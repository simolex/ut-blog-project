import { selectorByTestId } from 'cypress/helpers/selectorByTestId';

describe('Роутинг', () => {
    describe('Пользователь НЕ авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.get(selectorByTestId('MainPage')).should('exist');
        });
        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectorByTestId('MainPage')).should('exist');
        });
        it('Переход на 404 страницу', () => {
            cy.visit('/profilesssss');
            cy.get(selectorByTestId('NotFound')).should('exist');
        });
    });
    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectorByTestId('ProfilePage')).should('exist');
        });
        it('Переход на список статей', () => {
            cy.visit('/articles');
            cy.get(selectorByTestId('ArticlesPage')).should('exist');
        });
    });
});
