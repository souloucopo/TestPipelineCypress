describe('TESTANDO SITE AUTOMATION TEST', () => {
   
    it('TESTANDO NAVEGACAO',()=>{
        cy.visit("https://paxuniao.com/")

        /* ==== Generated with Cypress Studio ==== */
        cy.get('#cn-notice-buttons > [data-cookie-set="accept"]').click();
        cy.get('#close').click();
        cy.get('.nav > :nth-child(2) > a').click();
        cy.get('.nav > :nth-child(3) > a').click();
        cy.get('.nav > :nth-child(4) > a').click();
        cy.get(':nth-child(5) > a').click();
        cy.get(':nth-child(6) > a').click();
        cy.get(':nth-child(7) > a').click();
        /* ==== End Cypress Studio ==== */
    })

    
})