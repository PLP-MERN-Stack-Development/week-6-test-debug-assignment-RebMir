describe('Bug Tracker E2E Tests', () => {
    it('should display the bug tracker', () => {
        cy.visit('/');
        cy.contains('Bug Tracker');
    });
});