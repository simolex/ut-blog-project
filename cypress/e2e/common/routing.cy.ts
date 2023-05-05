describe('Роутинг', () => {
    it('Переход на главную страницу', () => {
        cy.visit('/');
        cy.get('[data-testid=MainPage]').should('exist');
    });
});
