/* global cy */
describe('The landing page', function () {
  it.skip ('should load ', function () {
    cy.visit('/exist/apps/01-data/index.html')
      .get('.alert')
      .contains('app.xqm')
  })

})
