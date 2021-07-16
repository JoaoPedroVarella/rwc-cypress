/// <reference types="cypress" />

import articles from '../support/pages/articles'

import routes from '../support/routes'

context('Publicação', () => {
    // hooks -> momentos antes / momentos depois
    // before / beforeEach
    // after / afterEach

    beforeEach(() => {

        //inicia as rotas
        routes.init();


        cy.backgroundLogin()

        articles.acessarFormularioDeNovaPublicacao()
       
    })

    it('criar uma nova publicação', () => {

        articles.preencherFormulario()

        articles.submeterPublicacao()        

    })
    






})
