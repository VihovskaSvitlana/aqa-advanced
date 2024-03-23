describe('qauto tests', () => {
  before(() => {
    cy.loginPromt();
  });

  it('registation', () => {
    const nameErr = 'Name has to be from 2 to 20 characters long';
    const nameInvalid = 'Name is invalid';
    const lastNameErr = 'Last name has to be from 2 to 20 characters long';
    const lastNameInvalid = 'Last name is invalid';
    const emailErr = 'Email is incorrect';
    const passwordErr =
      'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter';
    const oneChar = 'a';
    const specChar = '@';
    const strWithSpace = ' t A ';
    const twentyCharsTxt = 'abcdefghijklmnopqrstu';
    const correctPassword = 'Abcdefgh!jklmn1';
    const redBorder = 'rgb(220, 53, 69)';

    cy.get('button.header_signin').click();
    cy.get('app-signin-modal').should('be.visible');
    cy.get('.modal-footer > .btn-link').contains('Registration').click();
    cy.get('app-signup-modal').as('registrationModal').should('be.visible');
    cy.get('.modal-footer button').as('registerBtn');
    cy.hasAttDisabled('@registerBtn');

    cy.get('#signupName').as('nameInput').click();
    cy.get('#signupLastName').as('lastNameInput').click();
    cy.get('#signupEmail').as('emailInput').click();
    cy.get('#signupPassword').as('passwordInput').click();
    cy.get('#signupRepeatPassword').as('reEnterPasswordInput').click();
    cy.hasAttDisabled('@registerBtn');

    cy.get('@nameInput')
      .siblings('.invalid-feedback')
      .should('have.text', 'Name required');
    cy.get('@nameInput')
      .type(oneChar)
      .siblings('.invalid-feedback')
      .should('have.text', nameErr);
    cy.checkBorderColor('@nameInput', redBorder);
    cy.get('@nameInput').type(specChar);
    cy.get('@nameInput')
      .siblings('.invalid-feedback')
      .should('have.text', nameInvalid);
    cy.checkBorderColor('@nameInput', redBorder);
    cy.get('@nameInput').clear().type(twentyCharsTxt);
    cy.get('@nameInput')
      .siblings('.invalid-feedback')
      .should('have.text', nameErr);
    cy.checkBorderColor('@nameInput', redBorder);
    cy.get('@nameInput').clear().type(strWithSpace);
    cy.get('@nameInput')
      .siblings('.invalid-feedback')
      .should('have.text', nameInvalid);
    cy.checkBorderColor('@nameInput', redBorder);
    cy.get('@nameInput').clear().type('svitlana');
    cy.get('@nameInput').next().should('not.exist', 'div.invalid-feedback');
    cy.get('@nameInput')
      .should('have.css', 'border-color')
      .and('not.eq', redBorder);
    cy.hasAttDisabled('@registerBtn');

    cy.get('@lastNameInput')
      .siblings('.invalid-feedback')
      .should('have.text', 'Last name required');
    cy.checkBorderColor('@lastNameInput', redBorder);
    cy.get('@lastNameInput').type(oneChar);
    cy.get('@lastNameInput')
      .siblings('.invalid-feedback')
      .should('have.text', lastNameErr);
    cy.checkBorderColor('@lastNameInput', redBorder);
    cy.get('@lastNameInput').type(specChar);
    cy.get('@lastNameInput')
      .siblings('.invalid-feedback')
      .should('have.text', lastNameInvalid);
    cy.checkBorderColor('@lastNameInput', redBorder);
    cy.get('@lastNameInput').clear().type(twentyCharsTxt);
    cy.get('@lastNameInput')
      .siblings('.invalid-feedback')
      .should('have.text', lastNameErr);
    cy.checkBorderColor('@lastNameInput', redBorder);
    cy.get('@lastNameInput').clear().type(strWithSpace);
    cy.get('@lastNameInput')
      .siblings('.invalid-feedback')
      .should('have.text', lastNameInvalid);
    cy.get('@lastNameInput').clear().type('vihovska');
    cy.get('@lastNameInput').next().should('not.exist', 'div.invalid-feedback');
    cy.get('@lastNameInput')
      .should('have.css', 'border-color')
      .and('not.eq', redBorder);
    cy.hasAttDisabled('@registerBtn');

    cy.get('@emailInput')
      .siblings('.invalid-feedback')
      .should('have.text', 'Email required');
    cy.checkBorderColor('@emailInput', redBorder);
    cy.get('@emailInput').type(oneChar);
    cy.get('@emailInput')
      .siblings('.invalid-feedback')
      .should('have.text', emailErr);
    cy.checkBorderColor('@emailInput', redBorder);
    cy.get('@emailInput').clear().type('test.com');
    cy.get('@emailInput')
      .siblings('.invalid-feedback')
      .should('have.text', emailErr);
    cy.checkBorderColor('@emailInput', redBorder);
    cy.get('@emailInput').clear().type('svitlana.vihovska@gmail.com');
    cy.get('@emailInput').next().should('not.exist', 'div.invalid-feedback');
    cy.get('@emailInput')
      .should('have.css', 'border-color')
      .and('not.eq', redBorder);
    cy.hasAttDisabled('@registerBtn');

    cy.get('@passwordInput')
      .siblings('.invalid-feedback')
      .should('have.text', 'Password required');
    cy.checkBorderColor('@passwordInput', redBorder);
    cy.get('@passwordInput')
      .type(oneChar) //less than 8
      .siblings('.invalid-feedback')
      .should('have.text', passwordErr);
    cy.checkBorderColor('@passwordInput', redBorder);
    cy.get('@passwordInput')
      .clear()
      .type('abcdefgh!jklmn1o') // without capital
      .siblings('.invalid-feedback')
      .should('have.text', passwordErr);
    cy.checkBorderColor('@passwordInput', redBorder);
    cy.get('@passwordInput')
      .clear()
      .type(correctPassword + 'a')
      .siblings('.invalid-feedback')
      .should('have.text', passwordErr);
    cy.checkBorderColor('@passwordInput', redBorder);
    cy.get('@passwordInput')
      .clear()
      .type(correctPassword.toUpperCase())
      .siblings('.invalid-feedback')
      .should('have.text', passwordErr);
    cy.checkBorderColor('@passwordInput', redBorder);
    cy.get('@passwordInput')
      .clear()
      .type(correctPassword)
      .next()
      .should('not.exist', 'div.invalid-feedback');
    cy.get('@passwordInput')
      .should('have.css', 'border-color')
      .and('not.eq', redBorder);
    cy.hasAttDisabled('@registerBtn');

    cy.get('@reEnterPasswordInput')
      .siblings('.invalid-feedback')
      .should('have.text', 'Re-enter password required');
    cy.checkBorderColor('@reEnterPasswordInput', redBorder);
    cy.get('@reEnterPasswordInput')
      .type('abcdfgh')
      .siblings('.invalid-feedback')
      .should('have.text', passwordErr);
    cy.checkBorderColor('@reEnterPasswordInput', redBorder);
    cy.get('@reEnterPasswordInput')
      .clear()
      .type('Poiuytrewq!0')
      .siblings('.invalid-feedback')
      .should('have.text', 'Passwords do not match');
    cy.checkBorderColor('@reEnterPasswordInput', redBorder);
    cy.get('@reEnterPasswordInput')
      .clear()
      .type(correctPassword)
      .next()
      .should('not.exist', 'div.invalid-feedback');
    cy.get('@reEnterPasswordInput')
      .should('have.css', 'border-color')
      .and('not.eq', redBorder);
    cy.get('@registerBtn').should('not.have.attr', 'disabled');
    cy.get('@registerBtn').click();

    cy.get('@registrationModal').should('not.be.visible');
    cy.get('#userNavDropdown').should('be.visible');
  });
});
