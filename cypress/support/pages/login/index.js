const element = require('./elements').ELEMENTS

class login {

    acessarPaginaLogin() {
        cy.visit('login');
    }

    fazerLogin(){
        cy.get(element.inputEmail).type(Cypress.config().user.email)
        cy.get(element.inputPassword).type(Cpress.config().user.password)
    }

    submeter(){
        cy.get(element.btnPrimary).click()
    }
}

export default new Login();