// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************


Cypress.Commands.add('backgroundLogin', () => {
    cy.request({
        method: 'POST',
        url: `${Cypress.config().apiUrl}users/login`,
        body: {
           user: {
                email: 'joao.varella+1@totvs.com.br',
                password: '123456'
            }   
        }
    }).then(response => {
        cy.visit('/', {
            onBeforeLoad: (win) => {
                win.localStorage.setItem('jwtToken', response.body.token)
            }
        })
    })
})


import Routes from '../support/routes'

//inicia somente 1 vez

before(() => {
    Routes.init()
})