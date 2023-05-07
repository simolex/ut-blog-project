import { selectorByTestId } from '../../helpers/selectorByTestId';
import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localStorage';
import { User } from '../../../src/entities/User';

export const login = (username: string = 'testuser', password: string = '123') => {
    cy.log(`Logging in as ${username}`);

    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:7000/login',
            body: {
                username,
                password,
            },
        })
        .then(({ body }) => {
            window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
            return body;
        });
};

export const getByTestId = (testId: string) => cy.get(selectorByTestId(testId));

declare global {
    namespace Cypress {
        interface Chainable {
            login(email?: string, password?: string): Chainable<User>;
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}
