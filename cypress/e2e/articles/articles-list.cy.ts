describe('Список статей', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            cy.visit('/articles');
        });
    });
    it('Список отображается', () => {
        cy.getByTestId('ArticleList.List').should('exist');
        cy.getByTestId('ArticleViewSelector.LIST').click();
        cy.getByTestId('ArticleList.Item').should('have.length.greaterThan', 2);
        cy.getByTestId('ArticleViewSelector.GRID').click();
        cy.getByTestId('ArticleList.Item').should('have.length.greaterThan', 3);
    });
});
