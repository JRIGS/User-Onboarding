// write tests here
describe('Quotes App', () => {

    const nameInput = () => cy.get('input[name="text"]')
    const emailInput = () => cy.get('input[name="input"]')
    const submitButton = () => cy.get('#submitBtn')
  
    //   beforeEach(() => {
    //       //automate cleanup
    //   })
  
    describe('Inputs, submit button cancel button', () => {
      it('can navigate to http://localhost:3000', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
      })
  
      it('the submit button is disabled', () => {
        cy.get('[name=submitBtn]').should('be.disabled')
      })
  
      it('can type something in the "name" input', () => {
        cy.get('input[name="name"]')
          .type('Have fun')
          .should('have.value', 'Have fun')
      })
  
      it('can Type Something In The "email" input', () => {
        //get the input
        cy.get('input[name="email"]')
          //type into text bar
          .type('pogChamp@pog.com')
          //Checks to make sure you passed 'pogChamp' into the text bar
          .should('have.value', 'pogChamp@pog.com')
      })

      it('can Type Something In The "password" input', () => {
        //get the input
        cy.get('input[name="password"]')
          //type into text bar
          .type('pogChamp')
          //Checks to make sure you passed 'pogChamp' into the text bar
          .should('have.value', 'pogChamp')
      })

      it('can toggle in "Terms of Services" input', () => {
        //get the input
        cy.get('[type="checkbox"]').check()

         
      })
  
      it('submit button is enabled', () => {
        cy.get('[name=submitBtn]').should('be.enabled')
      

      })
  
  
    })
  
    describe('Submitting a new member', () => {
      it('can navigate to http://localhost:3000', () => {
        cy.visit('http://localhost:3000')
        cy.reload()
      })
        
      it('can submit a new member', () => {
        cy.get('input[name="name"]')
        .type('Jonathan')
        cy.get('input[name="email"]')
        .type('raczkowskijonathan@gmail.com')
        cy.get('input[name="password"]')
        .type('password123')
        cy.get('[type="checkbox"]').check()
        cy.get('[name=submitBtn]').click()
      })
    })

    describe('can check if there is missing info', () => {
        it('can navigate to http://localhost:3000', () => {
        cy.visit('http://localhost:3000')
        cy.reload()
      })

      it('can show errors', () => {
          cy.get('input[name="name"]')
          .type('Jo')
          cy.get(".errors-container").should('be.visible')
      })


    })
  
  })
  