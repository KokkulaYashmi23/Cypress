it ('OTP_Verify',()=> {
    cy.get('[maxlength="1"]').eq(0).type('7')
    cy.get('[maxlength="1"]').eq(1).type('3')
    cy.get('[maxlength="1"]').eq(2).type('7')
    cy.get('[maxlength="1"]').eq(3).type('9')
    cy.get('[maxlength="1"]').eq(4).type('8')
    cy.get('[maxlength="1"]').eq(5).type('7')
    cy.get('[type="submit"]').eq(1).click()
  });