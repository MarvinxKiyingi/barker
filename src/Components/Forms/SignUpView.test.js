import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { SignUpView } from '../../Views/SignUpView';

describe('Sign up a user', () => {
  test('Should render sigUp view component', () => {
    render(
      <Router>
        <SignUpView />
      </Router>
    );
  });
});
