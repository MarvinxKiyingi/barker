describe('Sign in a user', function () {
  it('Sign in with wrong credentials', function () {
    cy.visit('http://localhost:3000/signin');
    cy.get('input[name="email"]').type('wrongCredentials@mail.com');
    cy.get('input[name="password"]').type('123456');
    cy.get('button').contains('Sign in').click();
  });
  it('Sign in with wrong credentials', function () {
    cy.visit('http://localhost:3000/signin');
    cy.get('input[name="email"]').type('cypress@mail.com');
    cy.get('input[name="password"]').type('123456');
    cy.get('button').contains('Sign in').click();
  });
});

describe('Create a profile', function () {
  it('Create profile with wrong credentials', function () {
    cy.visit('http://localhost:3000/createprofile');
    cy.get('input[name="name"]').type('wrongCredentials');
    cy.get('input[name="age"]').type(0);
    cy.get('input[name="height"]').type('10');
    cy.get('button').click();
  });
  it('Create profile with the correct credentials', function () {
    cy.visit('http://localhost:3000/createprofile');
    cy.get('input[name="name"]').type('wrongCredentials');
    cy.get('input[name="age"]').type(4);
    cy.get('input[name="height"]').type(45);
    cy.get('button').click();
  });
});
