//An example test
describe('To test the login functionality', () => {
    
    beforeEach('create from', () => {
        cy.visit('https://weather.casrd.de/login');
        cy.wait(5);
        
    })


        it('sign up to the weather app', () => {
        cy.get('.signup-link').click();
        
        });
   
});