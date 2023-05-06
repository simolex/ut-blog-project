import { User } from '../../../src/entities/User';
import { Article } from '../../../src/entities/Article';
import { articleTestData as defaultArticle } from '../../../src/entities/Article/model/const';

export const createArticle = (user: User, article?: Article) => {
    const articleData = article ?? defaultArticle;

    const userId = user?.id;
    delete articleData.id;
    delete articleData.user;
    console.log({ ...articleData, userId });
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:7000/articles',
            headers: { Authorization: 'has' },
            body: { ...articleData, userId },
        })
        .then(({ body }) => body);
};
//

export const removeArticle = (articleId: string) =>
    cy.request({
        method: 'DELETE',
        url: `http://localhost:7000/articles/${articleId}`,
        headers: { Authorization: 'has' },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(user: User, article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
