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
    it.skip('Список отображается', () => {
        cy.getByTestId('ArticleList.List').should('exist');
        cy.getByTestId('ArticleViewSelector.LIST').click();
        cy.getByTestId('ArticleList.Item').should('have.length.greaterThan', 2);
        cy.get('not_exists_element').should('exist');
    });
    it('Список отображается (Стабы (фиктуры))', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
        cy.getByTestId('ArticleList.List').should('exist');
        cy.getByTestId('ArticleViewSelector.LIST').click();
        cy.getByTestId('ArticleList.Item').should('have.length.greaterThan', 2);
        cy.getByTestId('ArticleViewSelector.GRID').click();
        cy.getByTestId('ArticleList.Item').should('have.length.greaterThan', 3);
    });
});
