describe('Login', () => {
  it('successful', () => {
      cy.visit('http://localhost:3000')
  })
})

describe('Staff view', () => {
  it('successful', () => {
      cy.visit('http://localhost:3000/staff')
  })
})

describe('admin view', () => {
  it('successful', () => {
      cy.visit('http://localhost:3000/admin')
  })
})

describe('dev view', () => {
  it('successful', () => {
      cy.visit('http://localhost:3000/dev')
  })
})

describe('Login Staff', () => {
  it('should perform a login functionality', () => {
    // Visit the website or application you want to test
    cy.visit('http://localhost:3000/');

    // Interact with elements and perform assertions
    cy.get('input[type="email"]').type('billsmith@codebeetle.com');
    cy.get('input[type="password"]').type('123pass');
    cy.get('button[type="submit"]').click();

    // Perform assertions to check the expected results
    cy.url().should('include', '/staff');
   
  });
});

describe('Login Developer', () => {
  it('should perform a login functionality', () => {
    // Visit the website or application you want to test
    cy.visit('http://localhost:3000/');

    // Interact with elements and perform assertions
    cy.get('input[type="email"]').type('janedoe@codebeetle.com');
    cy.get('input[type="password"]').type('pass321');
    cy.get('button[type="submit"]').click();

    // Perform assertions to check the expected results
    cy.url().should('include', '/dev');
   
  });
});

describe('Login Admin', () => {
  it('should perform a login functionality', () => {
    // Visit the website or application you want to test
    cy.visit('http://localhost:3000/');

    // Interact with elements and perform assertions
    cy.get('input[type="email"]').type('admin@codebeetle.com');
    cy.get('input[type="password"]').type('beetle123!');
    cy.get('button[type="submit"]').click();

    // Perform assertions to check the expected results
    cy.url().should('include', '/admin');
   
  });
});

