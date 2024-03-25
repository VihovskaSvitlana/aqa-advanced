// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('loginPromt', () => {
  cy.visit('https://qauto.forstudy.space/panel/garage', {
    failOnStatusCode: false,
    auth: {
      username: 'guest',
      password: 'welcome2qauto',
    },
  });
});

Cypress.Commands.add('checkBorderColor', (input, color) => {
  cy.get(input).should('have.css', 'border-color', color);
});

Cypress.Commands.add('hasAttDisabled', (input) => {
    cy.get(input).should('have.attr', 'disabled');
});
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
