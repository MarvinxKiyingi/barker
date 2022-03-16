import { Box, styled } from '@mui/material';

export const StyledForm = styled(Box)(({ theme }) => ({
  '.actionTitle': {
    padding: theme.spacing(2, 0),
  },
  '.submitButtonWrapper': {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(2, 0),
  },
}));

export const SignInFormWrapper = styled(StyledForm)(({ theme }) => ({
  '.resetPassword': {
    display: 'flex',
    justifyContent: 'end',
    padding: theme.spacing(2, 0),
  },
}));

export const StyledSignUpForm = styled(StyledForm)(({ theme }) => ({
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

export const StyledCreateProfileForm = styled(StyledForm)(({ theme }) => ({
  '.alert': {
    margin: theme.spacing(2, 0),
  },
}));

export const StyledResetPasswordForm = styled(StyledForm)(({ theme }) => ({}));

export const StyledUpdateForm = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '40rem',
  padding: '0 2rem',
  textAlign: 'center',
}));
