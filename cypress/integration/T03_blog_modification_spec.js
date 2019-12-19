/* eslint-disable no-undef */
describe('blog modification', function() {
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
        cy.contains('Cypress User')
        cy.get('.create-button').click()
        cy.get('#idTitle').type('Test Title')
        cy.get('#idAuthor').type('Test Author')
        cy.get('#idUrl').type('Test Url')
        cy.get('#idButton').click()
    })

    describe('blog view', function() {

        it('blog can be viewed, liked and commented', function() {
            cy.get('.blog-title').click()
            cy.contains('Test Title')
            cy.contains('Test Author')
            cy.contains('Test Url')
            cy.contains('Like')
            cy.contains('0')
            cy.get('comment').should('not.exist')
            cy.contains('Like').click()
            cy.get('input[name="newComment"]').type('test comment')
            cy.contains('Add Comment').click()
            cy.contains('1')
            cy.contains('test comment')
        })

        it('blog cannot be removed if user has not added the blog', function() {
            cy.contains('Logout').click()
            cy.get('#idUsername').type('blogger')
            cy.get('#idPassword').type('bigsecret')
            cy.contains('Login').click()
            cy.get('.blog-title').click()
            cy.get('.remove-button').should('not.visible')
        })
        
        it('blog can be removed by the user that added it', function() {
            cy.get('.blog-title').click()
            cy.get('.remove-button').click()
            cy.get('.blog-title').should('not.exist')
        })
    })
})