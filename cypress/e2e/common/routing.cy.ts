describe('Роутинг', () => {
    describe('Пользователь НЕ авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.getByTestId('MainPage').should('exist');
        });
        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.getByTestId('MainPage').should('exist');
        });
        it('Переход на 404 страницу', () => {
            cy.visit('/profilesssss');
            cy.getByTestId('NotFound').should('exist');
        });
    });
    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.getByTestId('ProfilePage').should('exist');
        });
        it('Переход на список статей', () => {
            cy.visit('/articles');
            cy.getByTestId('ArticlesPage').should('exist');
        });
    });
});
