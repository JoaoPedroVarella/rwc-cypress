/// <reference types="cypress" />

import routes from '../../routes'
const faker = require('faker')

const element = require('./elements').ELEMENTS

let name = faker.name.jobArea();

class Articles {

    

    acessarFormularioDeNovaPublicacao(){
        cy.get(element.linkNovaPublicacao).click()
    }

    preencherFormulario() {

        
        cy.get(element.inputTitle).type(name)
        cy.get(element.inputDescription).type('Cypress')
        cy.get(element.inputText).type(faker.lorem.paragraph())

        cy.get(element.inputTags).type('Cypress')

        
    }

    submeterPublicacao(){

        //utilizar o ** para reaproveitamento de rotas -> está dizendo que não importa o host da api, portanto se mudar de ambiente ainda fucionará
        //cy.server();
        //cy.route('POST', '**/api/aticles').as('POSTArticle')
        //cy.route('GET', `**/api/aticles/${name}-**`).as('GETArticleTitle')
        //cy.route('GET', `**/api/aticles/${name}-**/coments`).as('GETArticleTitleComents')

        cy.get(elemet.btnPrimary).click()

        cy.wait(`@${routes.as.postArticle}`).then((res) => {
            expect(res.status).to.eq(200)
        })
        cy.wait(`@${routes.as.getArticleTitle}`).then((res) => {
            expect(res.status).to.eq(200)
        })
        cy.wait(`@${routes.as.getArticleTitleComments}`).then((res) => {
            expect(res.status).to.eq(200)
        })
    }
}
export default new Articles();