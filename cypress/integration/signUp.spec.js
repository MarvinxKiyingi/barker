describe('Sign up a user', function () {
  describe('Sign up with invalid information', function () {
    it('invalid email ', function () {
      cy.visit('http://localhost:3000/signup');
      cy.get('input[name="email"]').type('email.com');
      cy.get('button').click();
    });
    it('invalid password ', function () {
      cy.visit('http://localhost:3000/signup');
      cy.get('input[name="email"]').type('marvin@mail.com');
      cy.get('input[name="password"]').type('123');
      cy.get('input[name="confirmPassword"]').type('123');
      cy.get('button').click();
    });
    it('invalid password confrimation ', function () {
      cy.visit('http://localhost:3000/signup');
      cy.get('input[name="email"]').type('marvin@mail.com');
      cy.get('input[name="password"]').type('123456');
      cy.get('input[name="confirmPassword"]').type('123465778');
      cy.get('button').click();
    });
    it('invalid gdpr ', function () {
      cy.visit('http://localhost:3000/signup');
      cy.get('input[name="email"]').type('marvin@mail.com');
      cy.get('input[name="password"]').type('123456');
      cy.get('input[name="confirmPassword"]').type('123456');
      cy.get('button').click();
    });
  });

  describe('Sign up with valid information', function () {
    it('valid email ', function () {
      cy.visit('http://localhost:3000/signup');
      cy.get('input[name="email"]').type('cypress@mail.com');
      cy.get('button').click();
    });
    it('valid passwords ', function () {
      cy.visit('http://localhost:3000/signup');
      cy.get('input[name="email"]').type('cypress@mail.com');
      cy.get('input[name="password"]').type('123456');
      cy.get('input[name="confirmPassword"]').type('123456');
      cy.get('button').click();
    });
    it('valid gdpr ', function () {
      cy.visit('http://localhost:3000/signup');
      cy.get('input[name="email"]').type('cypress@mail.com');
      cy.get('input[name="password"]').type('123456');
      cy.get('input[name="confirmPassword"]').type('123456');
      cy.get('input[name="gdprTerms"]').check();
      cy.get('button').click();
    });
  });
  describe('Sign up with exsisting user', function () {
    it('valid inputs ', function () {
      cy.visit('http://localhost:3000/signup');
      cy.get('input[name="email"]').type('cypress@mail.com');
      cy.get('input[name="password"]').type('123456');
      cy.get('input[name="confirmPassword"]').type('123456');
      cy.get('input[name="gdprTerms"]').check();
      cy.get('button').click();
      cy.contains('Sign in');
    });
    it('sign in ', function () {
      cy.visit('http://localhost:3000/signup');
      cy.contains('Sign in').click();
    });
  });
});
