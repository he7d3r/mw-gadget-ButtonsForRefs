/**
 * Add buttons to editor toolbar for some common references I use
 * @author: [[User:Helder.wiki]]
 * @tracking: [[Special:GlobalUsage/User:Helder.wiki/Tools/ButtonsForRefs.js]] ([[File:User:Helder.wiki/Tools/ButtonsForRefs.js]])
 */
/*jslint browser: true, white: true*/
/*global mediaWiki, jQuery */
( function ( mw , $ ) {
'use strict';

function customizeToolbar() {
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
				'label': 'Temas',
				'tools': {
					'geometry-heading': {
						'label': 'Geometria',
						'type': 'select',
						'list': {
							'campos1735' : {
								'label': 'Manoel de Campos. Elementos de geometria plana e solida segundo a ordem de Euclides.',
								'action': {
									'type': 'encapsulate',
									'options': {
										'pre': '* {' + '{Citar livro|nome=Manoel de |sobrenome=Campos |título=Elementos de geometria plana e solida segundo a ordem de Euclides |subtítulo= |idioma= |edição= |local= |editora=Officina Rita-Cassiana |ano=1735 |páginas= |volumes= |volume= |id=|url=http://books.google.com.br/books?id=Hof-Xq5rm5kC }}\n'
									}
								}
							},
							'manfredo2010' : {
								'label': 'Carmo, M. P. do. Geometria Diferencial de Curvas e Superfícies.',
								'action': {
									'type': 'encapsulate',
									'options': {
                                                                          'pre': '* {' + '{Citar livro|nome=Manfredo Perdigão do |sobrenome=Carmo |título=Geometria Diferencial de Curvas e Superfícies |subtítulo= |idioma= |edição=4 |local=Rio de Janeiro |editora=SBM |ano=2010 |páginas= |volumes= |volume= |id=ISBN 978-85-85818-26-5|url=http://www.sbm.org.br/web//up/editor/File/livros/ctu04.pdf }}\n'
									}
								}
							},
							'warner' : {
								'label': 'Warner. Foundations of differentiable manifolds and Lie groups',
								'action': {
									'type': 'encapsulate',
									'options': {
										'pre': '* {' + '{cite book|last=Warner| first=Frank Wilson| author-link=Frank Wilson Warner| date=1983| title=Foundations of differentiable manifolds and Lie groups| publisher=Springer| isbn = 9780387908946}}\n'
									}
								}
							}
						}
					},
					'algebra-heading': {
						'label': 'Álgebra',
						'type': 'select',
						'list': {
							'vianna1914' : {
								'label': 'Vianna, J. J. L.. Elementos de Arithmetica',
								'action': {
									'type': 'encapsulate',
									'options': {
										'pre': '* {' + '{Citar livro|nome=João José Luiz|sobrenome=Vianna|título=[[s:Galeria:Elementos de Arithmetica|Elementos de Arithmetica]]|edição=15|local=Rio de Janeiro|editora=Francisco Alves|ano=1914}}\n'
									}
								}
							},
							'serrasqueiro1906' : {
								'label': 'Serrasqueiro, J. A.. Tratado de Algebra Elementar',
								'action': {
									'type': 'encapsulate',
									'options': {
										'pre': '* {' + '{Citar livro|nome=José Adelino|sobrenome=Serrasqueiro|título=[[s:Galeria:Tratado de Algebra Elementar.djvu|Tratado de Algebra Elementar]]|edição=9|local=Largo da Sé Velha|editora=Livraria Central de J. Diogo Pires|ano=1906}}\n'
									}
								}
							},
							'hazewinkel2004' : {
								'label': 'Hazewinkel. Algebras, rings and modules',
								'action': {
									'type': 'encapsulate',
									'options': {
										'pre': '* {' + '{cite book|first1=Michiel|last1=Hazewinkel|authorlink1=Michiel Hazewinkel|first2=Nadezhda Mikhaĭlovna|last2=Gubareni|authorlink2=Nadezhda Mikhaĭlovna|first3=Nadiya|last3=Gubareni|authorlink3=Nadiya Gubareni|first4=Vladimir V.|last4=Kirichenko|authorlink4=Vladimir V. Kirichenko|title=Algebras, rings and modules|publisher=Springer|year=2004|isbn=9781402026904}}.\n'
									}
								}
							},
							'lam2001' : {
								'label': 'Lam. A first course in noncommutative rings',
								'action': {
									'type': 'encapsulate',
									'options': {
										'pre': '* {' + '{cite book |last1=Lam |first1=Tsit-Yuen |authorlink1= |last2= |first2= |authorlink2= |title=A first course in noncommutative rings |url= |edition=2 |series=Graduate texts in mathematics |volume=131 |year=2001 |publisher=Springer |location= |isbn=0387951830 |id= }}\n'
									}
								}
							},
							'lawson1998' : {
								'label': 'Inverse semigroups',
								'action': {
									'type': 'encapsulate',
									'options': {
										'pre': '* {' + '{cite book |last1=Lawson |first1=M.V. |authorlink1= |last2= |first2= |authorlink2= |title=Inverse semigroups: the theory of partial symmetries |url= |edition= |series= |volume= |year=1998 |publisher=World Scientific |location= |isbn=9789810233167 |id= }}\n'
									}
								}
							},
							'jacobson2009I' : {
								'label': 'Jacobson. Basic algebra I',
								'action': {
									'type': 'encapsulate',
									'options': {
										'pre': '* {' + '{Citation| last=Jacobson| first=Nathan| author-link=Nathan Jacobson| date=2009| title=Basic algebra| edition=2nd| volume = 1 | series= | publisher=Dover| isbn = 978-0-486-47189-1}}\n'
									}
								}
							},
							'jacobson2009II' : {
								'label': 'Jacobson. Basic algebra II',
								'action': {
									'type': 'encapsulate',
									'options': {
										'pre': '* {' + '{Cite book| last=Jacobson| first=Nathan| author-link=Nathan Jacobson| date=2009| title=Basic algebra| edition=2nd| volume = 2 | series= | publisher=Dover| isbn = 978-0-486-47187-7}}\n'
									}
								}
							},
							'dascalescu2001' : {
								'label': 'Dascalescu. Hopf Algebras: An introduction',
								'action': {
									'type': 'encapsulate',
									'options': {
										'pre': '* {' + '{Cite book| last1=Dăscălescu| first1=Sorin| last2=Năstăsescu| first2=Constantin| last3=Raianu| first3=Șerban| date=2001| title=Hopf Algebras| subtitle=An introduction| edition=1st| volume = 235| series=Pure and Applied Mathematics | publisher=Marcel Dekker| isbn = 0-8247-0481-9}}\n'
									}
								}
							},
							'milies2002' : {
								'label': 'Milies. An introduction to group rings',
								'action': {
									'type': 'encapsulate',
									'options': {
										'pre': '* {' + '{cite book  | author = Milies, César Polcino | author2 = Sehgal, Sudarshan K. | year = 2002 | title = An introduction to group rings | publisher = Springer | isbn = 9781402002380 }}\n'
									}
								}
							}
						}
					},
					'coding-heading': {
						'label': 'Códigos',
						'type': 'select',
						'list': {
							'hefez2002' : {
								'label': 'Hefez, A.; Villela, M. L. T.. Códigos Corretores de Erros',
								'action': {
									'type': 'encapsulate',
									'options': {
										'pre': '* {' + '{Citar livro|autor=HEFEZ, Abramo; VILLELA, Maria Lúcia T. |título=Códigos Corretores de Erros |subtítulo= |idioma= |edição= |local=Rio de Janeiro |editora=IMPA |ano=2002 |páginas= |volumes= |volume= |id=ISBN 85-244-0169-9|url= }}\n'
									}
								}
							},
							'roman1997' : {
								'label': 'Roman, S.. Introduction to Coding and Information Theory',
								'action': {
									'type': 'encapsulate',
									'options': {
										'pre': '* {' + '{Citar livro|nome=Steven |sobrenome=Roman |título=Introduction to Coding and Information Theory |subtítulo= |idioma= |edição= |local= |editora=Springer |ano=1997 |páginas= |volumes= |volume= |id=ISBN 0-387-94704-3|url= }}\n'
									}
								}
							}
						}
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
		if ( mw.user.options.get( 'usebetatoolbar' ) && mw.user.options.get( 'showtoolbar' ) ) {
			mw.loader.using( 'ext.wikiEditor.toolbar', function () {
				$(customizeToolbar);
			} );
		}
	} );
}

}( mediaWiki, jQuery ) );