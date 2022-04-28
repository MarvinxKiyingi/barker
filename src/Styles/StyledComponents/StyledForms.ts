import { Box, styled } from '@mui/material';

export const StyledForm = styled(Box)(({ theme }) => ({
  '.actionTitle': {
    padding: theme.spacing(2, 0),
  },
  '.submitButtonWrapper': {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: theme.spacing(2, 0),
  },
  [theme.breakpoints.up('sm')]: {
    width: '100%',
    maxWidth: 600,
    margin: '0 auto',
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
  '.gdprTermsWrapper_content': {
    display: 'flex',
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
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    margin: '0 auto',
  },
}));
