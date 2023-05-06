import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localStorage';

export const loginCommandCypress = (username: string = 'testuser', password: string = '123') => {
    cy.log(`Logging in as ${username}`);

    cy.request({
        method: 'POST',
        url: 'http://localhost:7000/login',
        body: {
            username,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
    });
};
