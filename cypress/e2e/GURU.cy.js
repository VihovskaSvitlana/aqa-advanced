describe('guru tests', () => {
  before(() => {
    cy.visit('https://www.guru99.com/');
    cy.get('a[data-lasso-id="147432"]').click();

    cy.get('#sp_message_iframe_1091096')
      .eq(0)
      .should('be.visible')
      .then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).find(`button[aria-label="Accept"]`).click();
      });
  });

  beforeEach(() => {
    cy.visit('https://www.guru99.com/');
  });

  it('Check anchor', () => {
    cy.get('span.nav-drop-title-wrap')
      .filter(':contains("Testing")')
      .should('be.visible')
      .click();
    cy.get('#menu-item-4616').should('be.visible').click();
    cy.get('a[data-lasso-id="182494"]').should('be.visible').click();
    cy.get('button.kb-table-of-contents-icon-trigger')
      .should('be.visible')
      .click();
    cy.get('ul > li:nth-child(1) > a.kb-table-of-contents__entry')
      .should('be.visible')
      .click();
    cy.url().should('contain', '#functional-testing-of-mobile-application');
  });

  it('Check search', () => {
    cy.get('button.search-toggle-open').click();
    cy.get('input.search-field').should('be.visible').type('testing');
    cy.get('input.search-submit').click();
    cy.get('a.gsst_a').click();
    const searchRequest = 'software';
    cy.get('td.gsib_a input.gsc-input').type(searchRequest).type('{enter}');
    cy.get('span.gcsc-find-more-on-google-query').should('have.text', searchRequest);
  });

  it('Blog page', () => {
    cy.get('a[href="/blog"]').click();
    cy.get('h1.page-title').should('have.text', 'Blog');
    cy.get('div.entry-taxonomies a').eq(0).should('have.text', 'Blog');
    cy.get('a.post-more-link').eq(0).click();
    cy.get('header.post-title').should('be.visible');
    cy.get('main#main').scrollTo('bottom', { ensureScrollable: false });
    cy.get('a#kt-scroll-up').scrollIntoView().click();
  });
});
