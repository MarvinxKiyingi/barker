import { Box, styled } from '@mui/material';

export const SignInFormWrapper = styled(Box)(({ theme }) => ({
  '.actionTitle': {
    padding: theme.spacing(2, 0),
  },
  '.resetPassword': {
    display: 'flex',
    justifyContent: 'end',
    padding: theme.spacing(2, 0),
  },
  '.submitButtonWrapper': {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(2, 0),
  },
}));

export const StyledSignUpForm = styled(Box)(({ theme }) => ({
  '.actionTitle': {
    padding: theme.spacing(2, 0),
  },

  '.submitButtonWrapper': {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(2, 0),
  },

  '.gdprTermsWrapper': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1rem 0rem',
  },
  '.gdprTermsWrapper_content': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export const StyledResetPasswordForm = styled(Box)(({ theme }) => ({
  '.actionTitle': {
    padding: theme.spacing(2, 0),
  },

  '.submitButtonWrapper': {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(2, 0),
  },
}));

export const StyledUpdateForm = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '40rem',
  padding: '0 2rem',
  textAlign: 'center',
}));
