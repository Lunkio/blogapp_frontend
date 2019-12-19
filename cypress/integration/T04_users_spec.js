/* eslint-disable no-undef */
describe('users -view', function() {
    beforeEach(function() {
        cy.request('POST', 'http://localhost:3001/api/testing/reset')
        const newTestUser = {
            name: 'Cypress User',
            username: 'tester',
            password: 'bigsecret'
        }
        const secondTestUser = {
            name: 'Another Cypress',
            username: 'blogger',
            password: 'bigsecret'
        }
        cy.request('POST', 'http://localhost:3001/api/users', newTestUser)
        cy.request('POST', 'http://localhost:3001/api/users', secondTestUser)
        cy.visit('http://localhost:3001')
        cy.get('#idUsername').type('tester')
        cy.get('#idPassword').type('bigsecret')
        cy.contains('Login').click()
    })

    describe('Users -page', function() {

        it('usernames can be seen', function() {
            cy.contains('Users').click()
            cy.contains('Blogs created')
            cy.get('.user-name:first').should('have.text', 'Cypress User')
            cy.get('.user-name').eq(1).should('have.text', 'Another Cypress')
        })

        it('shows correct amount of blogs by users and added blogs by user', function() {
            cy.get('.create-button').click()
            cy.get('#idTitle').type('Test Title')
            cy.get('#idAuthor').type('Test Author')
            cy.get('#idUrl').type('Test Url')
            cy.get('#idButton').click()
            cy.wait(5000)
            cy.visit('http://localhost:3001')

            cy.contains('Users').click()
            cy.get('.blog-amount-test:first').should('have.text', '1')
            cy.get('.blog-amount-test').eq(1).should('have.text', '0')

            cy.get('.user-name:first').click()
            cy.contains('Cypress User')
            cy.contains('Test Title')
            cy.contains('Go back').click()

            cy.get('.user-name').eq(1).click()
            cy.contains('Another Cypress')
            cy.contains('No added blogs')
        })
    })
})