import { Button, IconButton, styled } from '@mui/material';

const StyledSwipeButtons = styled(IconButton)(({ theme }) => ({
  borderRadius: '50%',
  fontSize: '2rem',
  padding: theme.spacing(3),
  border: 'solid 0.2rem',
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.5rem',
  },
}));
export const StyledDeclinedButton = styled(StyledSwipeButtons)(({ theme }) => ({
  color: theme.palette.error.main,
}));
export const StyledLikeButton = styled(StyledSwipeButtons)(({ theme }) => ({
  color: theme.palette.success.main,
}));

export const StyledActionButton = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: '0.75rem 3rem',
  fontWeight: 600,
  letterSpacing: '0.0180em',
  [theme.breakpoints.up('sm')]: {
    minWidth: 290,
  },
}));
export const StyledGoogleButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'white',
  color: 'black',
}));
export const StyledFacebookButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#4267B2',
  color: 'white',
}));
export const StyledGithubButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'black',
  color: 'white',
}));

export const StyledUpdateButton = styled(Button)(({ theme }) => ({
  color: 'white',
  backgroundColor: '#0b203b',
  padding: '0.75rem 3rem',
  fontWeight: 600,
  letterSpacing: '0.0180em',
  borderRadius: '2rem',
  '&:hover': {
    backgroundColor: '#0b203b',
  },
}));
export const StyleDeleteButton = styled(Button)(({ theme }) => ({
  color: 'white',
  backgroundColor: '#d11e35',
  padding: '0.75rem 3rem',
  fontWeight: 600,
  letterSpacing: '0.0180em',
  borderRadius: '2rem',

  '&:hover': {
    backgroundColor: '#d11e35',
  },
}));

export const StyledFileUploadIcon = styled('label')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',
  color: theme.palette.secondary.main,
}));
export const Input = styled('input')({
  display: 'none',
});

export const StyleDialogDisagreeButton = styled(Button)(({ theme }) => ({
  color: 'white',
  backgroundColor: '#0b203b',
  padding: '0.375 1rem',
  fontWeight: 600,
  letterSpacing: '0.0180em',
  borderRadius: '2rem',

  '&:hover': {
    backgroundColor: '#0b203b',
  },
}));
export const StyleDialogDeleteButton = styled(Button)(({ theme }) => ({
  color: 'white',
  backgroundColor: '#d11e35',
  padding: '0.375 1rem',
  fontWeight: 600,
  letterSpacing: '0.0180em',
  borderRadius: '2rem',

  '&:hover': {
    backgroundColor: '#d11e35',
  },
}));
