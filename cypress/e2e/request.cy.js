describe('Amazon', () => {
  it('Sign In', () => {
    cy.visit('https://www.amazon.in/')
    cy.get('[id="nav-link-accountList-nav-line-1"]').contains('Hello, sign in').click()
    cy.get('#ap_email').type('yashmikokkula23@gmail.com')
    cy.get('#continue').click()
    cy.get('#ap_password').type('idiot@23')
    cy.get('#signInSubmit').click()
    cy.get('[name="field-keywords"]').type('rings for women')
    cy.get('#nav-search-submit-button').click()
    cy.get('[data-image-index="57"]').click()
    cy.get('[name="submit.add-to-cart"]').click()
  })
});
