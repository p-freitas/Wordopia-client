const APP_URL = 'http://localhost:3000'

describe('template spec', () => {
  it('loads the page', () => {
    cy.viewport(1920, 1080);
    cy.visit(APP_URL)
  })
  it('translate the page to PT', () => {
    cy.viewport(1920, 1080);
    cy.visit(APP_URL)
    cy.get('[data-testid="brazil-button"]').click();
    cy.get('[data-testid="or-text"]').should('contain', 'ou');
  })
  it('translate the page to EN', () => {
    cy.viewport(1920, 1080);
    cy.visit(APP_URL)
    cy.get('[data-testid="us-button"]').click();
    cy.get('[data-testid="or-text"]').should('contain', 'or');
  })
  it('translate the page to ES', () => {
    cy.viewport(1920, 1080);
    cy.visit(APP_URL)
    cy.get('[data-testid="spain-button"]').click();
    cy.get('[data-testid="or-text"]').should('contain', 'o');
  })
  it('enter a room', () => {
    cy.viewport(1920, 1080);
    cy.visit(APP_URL)
    cy.get('[data-testid="brazil-button"]').click();
    cy.get('[data-testid="enter-room-input"]').type('123456');
    cy.get('[data-testid="enter-room-button"]').click()
    cy.get('[data-testid="tutorial-modal-close-button"]').click()
    cy.get('[data-testid="room-not-found-modal-text"]').should('contain', 'Essa sala não existe!');
  })
  it('create a room', () => {
    cy.viewport(1920, 1080);
    cy.visit(APP_URL)
    cy.get('[data-testid="brazil-button"]').click();
    cy.get('[data-testid="create-room-button"]').click()
    cy.get('[data-testid="custom-themes-button"]').click()
    cy.get('[data-testid="custom-themes-modal-title"]').should('contain', 'Adicione novos temas');
    cy.get('[data-testid="custom-themes-create-room-button"]').click()
    cy.get('[data-testid="tutorial-modal-close-button"]').click()
    cy.get('[data-testid="playerName-modal-input"]').type('player');
    cy.get('[data-testid="playerName-modal-confirm-button"]').click()
    cy.get('[data-testid="friends-link-modal-close-button"]').click()
    cy.get('[data-testid="player-list-modal-text"]').should('contain', 'player');
  })
})
