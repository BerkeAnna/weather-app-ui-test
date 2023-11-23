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
            cy.get('#Menu_Burger_Icon').should('exist');
            cy.get('#Menu_Burger_Icon').click();
            cy.get('.account-details .name__text').should('have.text', 'testtesttest2@gmail.com');
            cy.get('.account-details .email__text').should('have.text', 'Free Plan');

            cy.get('.menu-link').should('contain', 'Home');
            
            cy.get('.menu-link').should('contain', 'Add City');
            
            cy.get('.menu-link').should('contain', 'Logout');

        });

        it('Dark mode button', () => {
            cy.get('.mode-toggle__input').should('exist');
            cy.get('.mode-toggle__circle').click();

        });
      

        it('Add city - main page', () => {
            cy.get('.add__card').should('exist');
            cy.get('.add__card').click();
            cy.url().should('eq','https://weather.casrd.de/add' );

        });

        it('Add city - ☰ menu', () => {
            cy.get('#Menu_Burger_Icon').should('exist');
            cy.get('#Menu_Burger_Icon').click();
            cy.get('.menu-link').contains('Add City').click();
            cy.url().should('eq','https://weather.casrd.de/add' );

        });

        it('City of the month - follow button', () => {
            cy.get('.add__card').should('exist');
            cy.get('.add__card').click();
            cy.url().should('eq','https://weather.casrd.de/add' );
            cy.get('.fav-city-name').invoke('text').then((cityName) => {
                const upperCaseCityName = cityName.toUpperCase();
                cy.log(upperCaseCityName);
   
            cy.get('.fav-city-add-btn').should('exist');
            cy.get('.fav-city-add-btn').should('have.text', 'FOLLOW');
            cy.get('.fav-city-add-btn').click();
            cy.wait(3);
            cy.get('.fav-city-add-btn').should('exist');
            cy.get('button.fav-city-added-btn').should('have.class', 'fav-city-add-btn').and('contain', 'FOLLOWED');
            cy.get('#Menu_Burger_Icon').should('exist');
            cy.get('#Menu_Burger_Icon').click();
            cy.wait(4);
            cy.get('li.menu-link').contains('Home').click();

            cy.wait(7);
            cy.get('.city-name__text').invoke('text').then((text) => {
                expect(text.toUpperCase()).to.equal(upperCaseCityName);
              });
              
           
        });
      
    });
   
});
});