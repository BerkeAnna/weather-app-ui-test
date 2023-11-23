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

    context( 'logged in' , () => {
        beforeEach('create from', () => {
            cy.visit('https://weather.casrd.de/login');
            cy.wait(5);
            cy.loginAs('testtesttest2@gmail.com', 'test123');
        })

        it('The “☰” menu', () => {
            cy.wait(2);
            cy.get('#Menu_Burger_Icon').click();
            cy.get('.account-details .name__text').should('have.text', 'testtesttest2@gmail.com');
            cy.get('.account-details .email__text').should('have.text', 'Free Plan');

            cy.get('.menu-link').should('contain', 'Home');
            
            cy.get('.menu-link').should('contain', 'Add City');
            
            cy.get('.menu-link').should('contain', 'Logout');

        });
      
    });
   
});