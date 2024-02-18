// https://on.cypress.io/api

describe('Test the Todo List', () => {
  it('Check whether the app is up ', () => {
    cy.visit('http://localhost:5173/')
  })
  it('Check if the to-do list exist', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('To-do List')
  })
})
