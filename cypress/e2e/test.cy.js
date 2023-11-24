
describe('To test weather app', () => {
    
    context( 'Sign up' , () => {
    beforeEach('create from', () => {
        cy.visit('https://weather.casrd.de/login');
        cy.wait(5);
    })

        it('login to the weather app', () => {
            cy.get('input[name="email"]').type('anna@test.com');
            cy.get('input[name="email"]').should('have.value', 'anna@test.com');
            cy.get('input[name="password"]').type('test123');
            cy.get('input[name="password"]').should('have.value', 'test123');
            cy.get('.login-btn').click();
        });    

       
    });


        beforeEach('login', () => {
            cy.visit('https://weather.casrd.de/login');
            cy.wait(5);
            cy.loginAs('anna@test.com', 'test123');
        })

      

        context('The “☰” menu', () => {
            it(`Check if user's username is correctly displayed in the menu`, () => {
            cy.wait(2);
            cy.get('#Menu_Burger_Icon').should('exist');
            cy.get('#Menu_Burger_Icon').click();
            cy.get('.account-details .name__text').should('have.text', 'anna@test.com');

            });

            it('Check the “Free Plan” subscription', () => {
            cy.get('.account-details .email__text').should('have.text', 'Free Plan');
            });

            it('Check if 3 button is listed', () => {
            cy.get('.menu-link').should('contain', 'Home');
            
            cy.get('.menu-link').should('contain', 'Add City');
            
            cy.get('.menu-link').should('contain', 'Logout');
            });

        });

        context('Dark mode button', () => {
            it('Dark mode toggle is displayed', () => {
                cy.get('.mode-toggle__input').should('exist');
               
            });

            beforeEach('Press dark mode button', () => {
                cy.get('.mode-toggle__circle').click();
            })

            it('Check the header background color', () => {
                cy.get('header').should('have.css', 'background-color').and('eq', 'rgb(43, 36, 77)');
            });

            it('Check the header title (TODAY) color', () => {
                cy.get('header .date__text').should('have.css', 'color').and('eq', 'rgb(255, 255, 255)');
            });
        });
      
        context('Check the ADD CITY page', () => {
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
        });

    context('Subscribe to “CITY OF THE MONTH” on the “ADD CITY” page', () => {
        let upperCaseCityName = "";
        it('Clicking on the FOLLOW button', () => {
            cy.get('.add__card').should('exist');
            cy.get('.add__card').click();
            cy.url().should('eq','https://weather.casrd.de/add' );
            cy.get('.fav-city-name:first').invoke('text').then((cityName) => {
                upperCaseCityName = cityName.toUpperCase();
                cy.log(upperCaseCityName);
   
            cy.get('.fav-city-add-btn').should('exist');
            cy.get('.fav-city-add-btn').should('have.text', 'FOLLOW');
            cy.get('.fav-city-add-btn').click();
            cy.wait(3);
            cy.get('.fav-city-add-btn').should('exist');
            cy.get('button.fav-city-added-btn').should('have.class', 'fav-city-add-btn').and('contain', 'FOLLOWED');
        });
    
       
            cy.get('#Menu_Burger_Icon').should('exist');
            cy.get('#Menu_Burger_Icon').click();
            cy.wait(4);

            cy.get('li.menu-link').contains('Home').click();

            cy.wait(7);
            cy.get('.city-name__text').invoke('text').then((text) => {
                expect(text.toUpperCase()).to.equal(upperCaseCityName);
              });
              cy.get('.remove-button').click();
            });
       
   
   
});
    context('Subscribe to a city from the search results on the “ADD CITY” page', () => {
        let name= 'Budapest'; 
        it('After clicking on the ADD CITY', () => {
           
            const upperCaseCityName = name.toUpperCase();
            cy.get('.add__card').should('exist');
            cy.get('.add__card').click();
            cy.get('.search-city-input').should('exist');
            cy.get('.search-city-input').type(name);
            cy.get('.search-city-input').should('have.value', name );
           
            cy.wait(50);
            cy.get('.search-city-btn').should('exist');
            cy.get('.search-city-btn').click();
            cy.wait(5000);
            cy.get('.add-city-btn').should('exist');
            cy.get('.add-city-btn').click();
            
            cy.get('body').should('contain', 'City has been successfully added!')
           
        });
        it('The city is listed on the home page', () => {
            cy.get('#Menu_Burger_Icon').should('exist');
            cy.get('#Menu_Burger_Icon').click();
            cy.wait(4);
            cy.get('li.menu-link').contains('Home').click();
            cy.contains('.weather__card .city-name__text', name).first().should('contain', name);
            cy.get('.remove-button').click();
        });

   
});
});