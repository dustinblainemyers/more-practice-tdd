describe('View react issues', () => {
  it('Displays a list of issues or no data ', () => {
      cy.visit('http://localhost:3001');
      cy.get('a' )
        .eq(1)
        .click()
          
      cy.get('.issueDetailRow').contains('blue-grey darken-1')
        
  
  });


})