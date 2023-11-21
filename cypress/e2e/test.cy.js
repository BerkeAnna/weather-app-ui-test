//An example test
describe('To test the login functionality', () => {
    
    context( 'Sign up' , () => {
    beforeEach('create from', () => {
        cy.visit('https://weather.casrd.de/login');
        cy.wait(5);
    })

        
       /* it('sign up to the weather app', () => {
            cy.get('.signup-link').click();
            cy.get('input[name="email"]').type('testtesttest2@gmail.com');
            cy.get('input[name="email"]').should('have.value', 'testtesttest2@gmail.com');
            cy.get('input[name="password"]').type('test123');
            cy.get('input[name="password"]').should('have.value', 'test123');
            cy.get('.signup-btn').click();
        });    
*/
        it('login to the weather app', () => {
            cy.get('input[name="email"]').type('testtesttest2@gmail.com');
            cy.get('input[name="email"]').should('have.value', 'testtesttest2@gmail.com');
            cy.get('input[name="password"]').type('test123');
            cy.get('input[name="password"]').should('have.value', 'test123');
            cy.get('.login-btn').click();
        });    

       
    });
   
});