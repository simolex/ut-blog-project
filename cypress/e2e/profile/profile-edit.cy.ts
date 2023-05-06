let profileId: string;
describe('Профиль пользователя', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`/profile/${profileId}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Успешно загружается профиль', () => {
        cy.getByTestId('ProfileCard').should('exist');
        cy.getByTestId('ProfileCard.Lastname').should('have.value', 'Testoff');
    });
    it('Редактирует профиль', () => {
        const newFirstname = 'New';
        const newLastname = 'Pedal`kin';
        cy.updateProfile(newFirstname, newLastname);
        cy.getByTestId('ProfileCard.Firstname').should('have.value', newFirstname);
        cy.getByTestId('ProfileCard.Lastname').should('have.value', newLastname);
    });
});
