describe('', () => {
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/panel/garage', {
      failOnStatusCode: false,
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });
    cy.get('.header-link').as('header');
    cy.get('div.header_inner').find('button.-guest').click();
  });

  it('Instruction', () => {
    cy.get('@header').contains('Garage').should('have.class', '-active');
    cy.get('@header').contains('Instructions').click();
    cy.get('nav.sidebar')
      .children()
      .filter(':contains("Instructions")')
      .should('have.class', '-active');
    cy.get('div.instructions-search-controls')
      .children()
      .first()
      .should('have.length', 1);
    cy.get('.instruction-link')
      .eq(1)
      .find('p')
      .contains('Audi')
      .should('be.visible')
      .click();
  });

  it('Filter', () => {
    cy.get('@header').contains('Instructions').click();
    cy.get('div.instructions_content')
      .prev()
      .children()
      .find('button')
      .first()
      .should('be.visible')
      .click();
    cy.get('#brandSelectDropdown').next().children().should('have.length', 5);
    cy.get('#modelSelectDropdown')
      .click()
      .next()
      .get('li')
      .eq(0)
      .should('have.class', 'disabled');
    cy.get('ul.model-select-dropdown_menu')
      .find('li')
      .eq(1)
      .should('be.visible')
      .invoke('text')
      .then(text => {
        expect(text.trim()).equal('R8');
      });
  });
  it('Navigation', () => {
    cy.get('#userNavDropdown').click();
    cy.get('nav.user-nav_menu')
      .as('myProfile')
      .should('be.visible')
      .children()
      .should('have.length', 5);
    cy.get('@myProfile')
      .find('a')
      .contains('Garage')
      .should('have.class', 'disabled');
    cy.get('@myProfile')
      .find('a')
      .contains('Fuel expenses')
      .should('not.have.class', 'disabled')
      .click();
    cy.get('p [routerlink="/panel/garage"]').should('be.visible');
    cy.get('div.delimiter').siblings().should('have.attr', 'disabled');
  });
});
