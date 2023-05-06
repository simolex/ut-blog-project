export const updateProfile = (first: string, last: string) => {
    cy.getByTestId('EditableProfilePageHeader.EditButton').click();
    cy.getByTestId('ProfileCard.Firstname').clear().type(first);
    cy.getByTestId('ProfileCard.Lastname').clear().type(last);
    cy.getByTestId('EditableProfilePageHeader.SaveButton').click();
    //
};

export const resetProfile = (profileId: string) =>
    cy.request({
        method: 'PUT',
        url: `http://localhost:7000/profile/${profileId}`,
        headers: { Authorization: 'has' },
        body: {
            id: '4',
            username: 'testuser',
            first: 'User',
            lastname: 'Testoff',
            age: 43,
            currency: 'RUB',
            country: 'Belarus',
            city: 'Moscow',
            // eslint-disable-next-line max-len
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqpsbd_G9Kkj28U1iMKL82RBqw_o9RRPBPSDpCZS9jCr2Bex9dI9poavlvjvF6LqRvGVU',
        },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(first: string, last: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
