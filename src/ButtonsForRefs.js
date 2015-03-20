/**
 * Add buttons to editor toolbar for some common references I use
 * @author: Helder (https://github.com/he7d3r)
 * @license: CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0/>
 */
( function ( mw, $ ) {
	'use strict';
	var bookIds = window.buttonsForRefsIds || [],
		lang = mw.config.get('wgContentLanguage'),
		ajaxParams = {
			url: '//www.wikidata.org/w/api.php',
			xhrFields: {
				'withCredentials': true
			}
		},
		tName = {
			pt: 'Citar livro',
			en: 'Cite book'
		},
		tParam = {
			// {{Citar livro}}
			'P50': {
				// FIXME: split into first / last names
				pt: 'nome',
				en: 'first1'
			}, // autor
			// 'P50': 'sobrenome', // autor
			'P357': {
				pt: 'título',
				en: 'title'
			}, // título de uma obra
			'P392': {
				pt: 'subtítulo'
			},
			'P407': {
				pt: 'língua',
				en: 'language'
			}, // idioma original
			'P393': {
				pt: 'edição',
				en: 'edition'
			}, // número de edição
			'P291': {
				pt: 'local',
				en: 'location'
			}, // local de publicação
			'P123': {
				pt: 'editora',
				en: 'publisher'
			}, // editora
			'P577': {
				pt: 'ano',
				en: 'year'
			}, // data de publicação
			'P1104': {
				pt: 'páginas',
				en: 'pages'
			}, // número de páginas
			// 'P9999999999': 'volumes',
			'P478': {
				pt: 'volume',
				en: 'volume'
			}, // volume
			'P957': {
				pt: 'id',
				en: 'isbn'
			}, // ISBN-10
			'P212': {
				pt: 'id',
				en: 'isbn'
			}, // ISBN-13
			'P953': {
				pt: 'url',
				en: 'url'
			} // texto na íntegra disponível em
			// 'P31': 'instância de',
			// 'P921': 'tópico principal da obra criativa'
		};
	function getFromWikidata( bookIds ) {
		var deferred = $.Deferred(),
			params = {
				origin: 'https:' + mw.config.get( 'wgServer' ),
				action: 'wbgetentities',
				ids: bookIds.join( '|' ),
				format: 'json'
			};
		( new mw.Api( { ajax: ajaxParams } ) ).get( params )
		.done( function ( data ) {
			var id, item, c, book, datatype, value, year, q,
				books = [],
				toUpdate = {};
			for ( id in data.entities ) {
				item = data.entities[id];
				if ( !item.labels[ lang ] ){
					console.log( 'Missing label in ' + lang + '. These are the existing labels: ', JSON.stringify( item.labels ) )
				}
				books.push( {
					label: (item.labels[ lang ] || item.labels.pt).value,
					qitem: id
				} );
				book = books[ books.length - 1 ];
				for ( c in item.claims ) {
					if ( tParam[c] && tParam[c][lang] ) {
						value = item.claims[c][0].mainsnak.datavalue.value;
						datatype = item.claims[c][0].mainsnak.datatype;
						if ( datatype === 'quantity' ) {
							// P1104
							book[ tParam[c][lang] ] = parseInt( value.amount, 10 );
						} else if ( datatype === 'string' || datatype === 'url' ) {
							// P357, P392, P393, P478, P957, P212, P953
							book[ tParam[c][lang] ] = value;
						} else if ( datatype === 'time' ) {
							// P577
							year = value.time.match( /(\d{4})-\d\d-\d\dT/ );
							if ( year ) {
								book[ tParam[c][lang] ] = year[1];
							}
						} else if ( datatype === 'wikibase-item' ) {
							// P50, P407, P291, P123
							// FIXME: get the language code (ISO 639-1, P218) for P407
							// FIXME: ignore if it is the same as lang
							q = 'Q' + value['numeric-id'];
							if ( !toUpdate[ q ] ) {
								toUpdate[ q ] = [];
							}
							toUpdate[ q ].push( {
								book: book,
								param: tParam[c][lang]
							} );
						} else {
							console.warn( c, tParam[c][lang], datatype );
						}
					}
				}
			}
			( new mw.Api( { ajax: ajaxParams } ) ).get( {
				origin: 'https:' + mw.config.get( 'wgServer' ),
				action: 'wbgetentities',
				ids: Object.keys( toUpdate ).join( '|' ),
				props: 'labels',
				languages: lang,
				format: 'json'
			} )
			.done( function ( data ) {
				var id, i, c, p, template,
					list = {};
				for ( id in data.entities ) {
					try {
						for ( i = 0; i < toUpdate[ id ].length; i++ ) {
							toUpdate[ id ][i].book[ toUpdate[ id ][i].param ] = data.entities[id].labels[lang].value;
						}
					} catch ( err ) {
						console.warn( data.entities[id] );
					}
				}
				for ( i = 0; i < books.length; i++ ) {
					template = '* {' + '{' + tName[lang];
					for ( p in books[i] ) {
						if ( p !== 'qitem' && p !== 'label' ) {
							template += '|' + p + '=' + books[i][p];
						}
					}
					template += '}}\n';
					list[ books[i].qitem ] = {
						'label': books[i].label,
						'action': {
							'type': 'encapsulate',
							'options': {
								'pre': template
							}
						}
					};
				}
				deferred.resolve( list );
			} );
		} );
		return deferred.promise();
	}

	function customizeToolbar( a, b, list ) {
		console.log( 'arguments', arguments );
		$( '#wpTextbox1' ).wikiEditor( 'addToToolbar', {
			'sections': {
				'refs': {
					'type': 'toolbar',
					'label': 'Referências'
				}
			}
		} )
		.wikiEditor( 'addToToolbar', {
			'section': 'refs',
			'groups': {
				'subjects': {
					'label': 'Livros',
					'tools': {
						'geometry-heading': {
							'label': 'Selecione...',
							'type': 'select',
							'list': list
						}
					}
				},
				'insert': {
					'label': 'Inserir',
					'tools': {
						'my-cite-book': {
							label: 'Citar livro',
							type: 'button',
							icon: '//upload.wikimedia.org/wikipedia/commons/e/ef/Button_cite_book.png',
							action: {
								type: 'encapsulate',
								options: {
									pre: ( function ( db ) {
										return {
											ptwikibooks: '* {' + '{Referência a livro|NomeAutor= |SobrenomeAutor= |Título= |Subtítulo= |Edição= |Local de publicação= |Editora= |Ano= |Páginas= |Volumes= |Volume= |ID= |URL= }}',
											ptwiki: '* {' + '{Citar livro|nome= |sobrenome= |título= |subtítulo= |idioma= |edição= |local= |editora= |ano= |páginas= |volumes= |volume= |id=ISBN |url= }}\n',
											enwiki: '* {' + '{cite book |last1= |first1= |authorlink1= |last2= |first2= |authorlink2= |title= |url= |edition= |series= |volume= |year= |publisher= |location= |isbn= |id= }}\n'
										}[ db ];
									}( mw.config.get( 'wgDBname' ) ) )
								}
							}
						},
						'my-google-books-quote': {
							label: 'Citar livro do Google Books',
							type: 'button',
							icon: '//upload.wikimedia.org/wikipedia/commons/4/4f/Button_verse.png',
							action: {
								type: 'encapsulate',
								options: {
									pre: '<ref>Author (), {' + '{Google books quote|id=|page=9999|text=|p. }}</ref>'
								}
							}
						},
						'my-ref-improve': {
							label: 'Precisa de mais citações',
							type: 'button',
							icon: '//upload.wikimedia.org/wikipedia/commons/f/fe/Button_refs.png',
							action: {
								type: 'encapsulate',
								options: {
									pre: '{' + '{Refimprove|{' + '{subst:DATE}}}}'
								}
							}
						}
					}
				}
			}
		} );
	}

	/* Check if we are in edit mode and the required modules are available and then customize the toolbar */
	if ( $.inArray(mw.config.get( 'wgAction' ), [ 'edit', 'submit' ] ) !== -1 ) {
		mw.loader.using( 'user.options', function () {
			// This can be the string "0" if the user disabled the preference ([[phab:T54542#555387]])
			/*jshint eqeqeq:false*/
			if ( mw.user.options.get( 'usebetatoolbar' ) == 1 ) {
				$.when(
					mw.loader.using( 'ext.wikiEditor.toolbar' ),
					$.ready,
					getFromWikidata( bookIds )
				).then( customizeToolbar );
			}
			/*jshint eqeqeq:true*/
		} );
	}

}( mediaWiki, jQuery ) );
