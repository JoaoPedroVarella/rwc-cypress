/// <reference types="cypress" />

import login from '../support/pages/login'

context('login', () => {
    it('Login novo usuário', () => {

        login.acessarPaginaLogin();
        login.fazerLogin();
        login.submeter();
        

    })
})