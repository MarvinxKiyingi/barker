import styled from 'styled-components';

export const StyledSignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  padding: 0 2rem;

  .formInputs .gdprTermsWrapper {
    margin: 1rem 0rem;
  }

  .gdprTermsWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0rem;
  }
  .gdprTermsWrapper_content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .submitButtonWrapper {
    display: flex;
    justify-content: center;
  }
`;
export const StyledSignInForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  padding: 0 2rem;
  text-align: center;

  .submitButtonWrapper {
    display: flex;
    justify-content: center;
    margin: 1rem 0rem;
  }
  .resetPassword {
    display: flex;
    justify-content: center;
    margin: 1rem 0rem;
  }
`;
export const StyledResetPasswordForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  text-align: center;
`;
export const StyledUpdateForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  padding: 0 2rem;
  text-align: center;
`;
