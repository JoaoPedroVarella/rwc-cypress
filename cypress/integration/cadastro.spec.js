/// <reference types="cypress" />


const faker = require('faker')


context('cadastro', () => {
    it('Cadastrar novo usuário', () => {
        cy.visit('register');

        const name = faker.name.firstName() + ' ' + faker.name.lastName();
        const email = faker.internet.email();

        cy.get('input[ng-model*=username]').type(name);
        cy.get('input[ng-model*=email]').type(email);
        cy.get('input[ng-model*=password]').type('1234567890');

        cy.get('button.btn-primary').click();


    })
})


// input[ng-model*=username]
// input[ng-model*=email]
// input[ng-model*=password]
// button.btn-primary