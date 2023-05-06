export const setRate = (testId: string = 'Rating', rate: number = 5, text: string = 'feedback') => {
    cy.getByTestId(`${testId}.Rate-${rate}`).click();
    cy.getByTestId(`${testId}.Input`).type(text);
    cy.getByTestId(`${testId}.Send`).click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(testId: string, rate: number, text: string): Chainable<void>;
        }
    }
}
