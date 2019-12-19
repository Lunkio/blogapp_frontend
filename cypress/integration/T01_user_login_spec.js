/* eslint-disable no-undef */
describe('User login and logout', function() {
    beforeEach(function() {
        cy.request('POST', 'http://localhost:3001/api/testing/reset')
        const newTestUser = {
            name: 'Cypress User',
            username: 'tester',
            password: 'bigsecret'
        }
        cy.request('POST', 'http://localhost:3001/api/users', newTestUser)
        cy.visit('http://localhost:3001')
    })

    it('user can log in and username is shown', function() {
        cy.get('#idUsername').type('tester')
        cy.get('#idPassword').type('bigsecret')
        cy.contains('Login').click()
        cy.contains('Cypress User')
    })

    it('user can log out', function() {
        cy.get('#idUsername').type('tester')
        cy.get('#idPassword').type('bigsecret')
        cy.contains('Login').click()
        cy.contains('Logout').click()
        cy.contains('Log in to application')
    })

    it('can not login with wrong credentials', function() {
        cy.get('#idUsername').type('wrong')
        cy.get('#idPassword').type('password')
        cy.contains('Login').click()
        cy.contains('wrong username or password')
    })
})