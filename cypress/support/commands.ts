import { loginCommandCypress } from './commands/login';

Cypress.Commands.add('login', loginCommandCypress);

declare global {
    namespace Cypress {
        interface Chainable {
            login(email?: string, password?: string): Chainable<void>;
            // drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>;
            // dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>;
            // visit(
            //     originalFn: CommandOriginalFn,
            //     url: string,
            //     options: Partial<VisitOptions>,
            // ): Chainable<Element>;
        }
    }
}

export {};
