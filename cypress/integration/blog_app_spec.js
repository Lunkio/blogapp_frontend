/* eslint-disable no-undef */
describe('Blog app', function() {
    beforeEach(function() {
        cy.request('POST', 'http://localhost:3003/api/testing/reset')
        const user = {
            name: 'Cypress Mestari',
            username: 'cypressuser',
            password: 'secret'
        }
        cy.request('POST', 'http://localhost:3003/api/users/', user)

        cy.visit('http://localhost:3000/')
    })

    it('front page can be opened', function() {
        cy.contains('log in')
    })

    describe('when logged in', function() {
        beforeEach(function() {
            cy.contains('login')
                .click()
            cy.get('#idUsername')
                .type('cypressuser')
            cy.get('#idPassword')
                .type('secret')
            cy.contains('login')
                .click()
        })

        it('name of the user is shown after log in', function() {
            cy.contains('Cypress Mestari logged in')
        })

        it('a new blog can be created', function() {
            cy.contains('new blog')
                .click()
            cy.get('#idTitle')
                .type('a new blog by cypress')
            cy.get('#idAuthor')
                .type('Cypresshän se')
            cy.get('#idUrl')
                .type('Cypress.ei.ole')
            cy.get('#idButton')
                .click()
            cy.contains('a new blog by cypress')
        })

        describe('after user created a blog', function() {

            it('user\'s blogs can be seen in users tab', function() {
                cy.contains('users')
                    .click()
                cy.contains('blogs created')
                cy.get('.classTest')
                    .click()
                cy.contains('added blogs')
            })            
        })
    })
})