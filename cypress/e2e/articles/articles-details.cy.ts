let currentArticleId: string;
describe('Статья', () => {
    beforeEach(() => {
        cy.login().then((user) => {
            cy.createArticle(user).then((article) => {
                currentArticleId = article.id ?? '';
                cy.visit(`/articles/${article.id}`);
            });
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('Статья отображается', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('Отображается список рекомендаций', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('Отправляем комментарий', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('textComment');
        cy.getByTestId('CommentItem.Content').should('have.length', 1);
    });

    it('Отправляем рейтинг', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('ArticleRating.Card').scrollIntoView();
        cy.setRate('ArticleRating', 4, 'textRate');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
    // AddCommentForm.Input CommentItem.Content
});
