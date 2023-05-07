import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';
import * as articleCommands from './commands/article';
import * as commentsCommands from './commands/comments';
import * as ratingCommands from './commands/rating';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(commentsCommands);
Cypress.Commands.addAll(ratingCommands);
// Cypress.Commands.overwrite('intercept', () => {
//     const FIXTURE_MODE = process.env.FIXTURE_MODE;
//     const fixtureName = req.METHOD + req.url + hash(req.body);
//     if (FIXTURE_MODE === 'READ') {
//         readFixture(fixtureName);
//     }
//     if (FIXTURE_MODE === 'WRITE') {
//         createFixture(fixtureName, req.body);
//     }
//     if (FIXTURE_MODE === 'API') {
//         createFixture(fixtureName, req.body);
//     }
// });

export {};
