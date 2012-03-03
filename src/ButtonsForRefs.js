/**
 * Add buttons to editor toolbar for some common references I use
 *
 * @tracking: [[Special:GlobalUsage/User:Helder.wiki/Tools/ButtonsForRefs.js]] ([[File:User:Helder.wiki/Tools/ButtonsForRefs.js]])
 */
if ( typeof $.fn.wikiEditor !== 'undefined' ) {
	$( function() {
		$( '#wpTextbox1' ).wikiEditor( 'addToToolbar', {
			'sections': {
				'refs': {
					'type': 'toolbar',
					'label': 'Referências'
				}
			}
		} );
		$( '#wpTextbox1' ).wikiEditor( 'addToToolbar', {
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
									pre: "* {' + '{Citar livro|nome= |sobrenome= |título= |subtítulo= |idioma= |edição= |local= |editora= |ano= |páginas= |volumes= |volume= |id=ISBN |url= }}\n"
								}
							}
						}
					}
				}
			}
		} );
	} );
}