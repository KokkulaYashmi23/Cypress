describe('Amazon', () => {
    it('Sign In, Search Product, and Add to Cart', () => {
      const email = Cypress.env('email');
      const password = Cypress.env('password');
      cy.signIn(email, password)
      cy.searchProduct()
    })
  });