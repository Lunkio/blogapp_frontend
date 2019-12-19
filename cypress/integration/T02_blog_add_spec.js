/* eslint-disable no-undef */
describe('blog adding', function() {
    beforeEach(function() {
        cy.request('POST', 'http://localhost:3001/api/testing/reset')
        const newTestUser = {
            name: 'Cypress User',
            username: 'tester',
            password: 'bigsecret'
        }
        cy.request('POST', 'http://localhost:3001/api/users', newTestUser)
        cy.visit('http://localhost:3001')
        cy.get('#idUsername').type('tester')
        cy.get('#idPassword').type('bigsecret')
        cy.contains('Login').click()
        cy.contains('Cypress User')
    })

    describe('blog form displays correctly', function() {

        it('clicking Create new blog -button opens form field', function() {
            cy.get('.create-button').click()
            cy.get('h2.create-new-header').should('exist')
            cy.contains('Title:')
            cy.contains('Author:')
            cy.contains('Url:')
        })

        it('clicking Close -button on form field closes it', function() {
            cy.get('.create-button').click()
            cy.contains('Close').click()
            cy.get('h2.create-new-header').should('not.visible')
        })
    })
    
    describe('blog creation', function() {

        it('blog can\'t be added unless all fields are filled', function() {
            cy.get('.create-button').click()
            cy.get('#idTitle').type('Title come here')
            cy.get('#idButton').click()
            cy.contains('Please fill in all the fields')
        })

        it('new blog can be added with notification and is rendered', function() {
            cy.get('.blog-title').should('not.exist')
            cy.get('.create-button').click()
            cy.get('#idTitle').type('Test Title')
            cy.get('#idAuthor').type('Test Author')
            cy.get('#idUrl').type('Test Url')
            cy.get('#idButton').click()
            cy.contains('a new blog Test Title by Test Author added')
            cy.get('.blog-title').should('exist')
        })
    })
})