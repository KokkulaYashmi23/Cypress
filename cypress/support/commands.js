// // ***********************************************
// // This example commands.js shows you how to
// // create various custom commands and overwrite
// // existing commands.
// //
// // For more comprehensive examples of custom
// // commands please read more here:
// // https://on.cypress.io/custom-commands
// // ***********************************************
// //
// //
// // -- This is a parent command --
// // Cypress.Commands.add('login', (email, password) => { ... })
// //
// //
// // -- This is a child command --
// // Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
// //
// //
// // -- This is a dual command --
// // Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
// //
// //
// // -- This will overwrite an existing command --
// // Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('signIn', (email, password) => {
    cy.visit('https://www.amazon.in/')
    cy.get('[id="nav-link-accountList-nav-line-1"]').contains('Hello, sign in').click()
    cy.get('#ap_email').type(email)
    cy.get('#continue').click()
    cy.get('#ap_password').type(password)
    cy.get('#signInSubmit').click()
  });
  
  Cypress.Commands.add('searchProduct', () => {
    cy.get('[data-csa-c-content-id="nav_cs_fresh"]').click()
    cy.get('[alt="KwalityWalls"]').click()
    cy.contains("Kwality Wall's Trixy Cookie Frozen Dessert Cup, 110ml").click()
  });
  