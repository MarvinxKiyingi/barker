import { Button, ButtonProps } from '@mui/material';
import styled from 'styled-components';

export const StyledDeclinedButton = styled(Button)<ButtonProps>`
  border-radius: 50%;
  padding: 1.3rem;

  &:hover {
    background-color: #092c4c;
    color: red;
  }
`;
export const StyledLikeButton = styled(Button)<ButtonProps>`
  border-radius: 50%;
  padding: 1.3rem;

  &:hover {
    background-color: #4c6b84;
    color: #90ee90;
  }
`;

export const StyledActionButton = styled(Button)<ButtonProps>(() => ({
  color: 'white',
  backgroundColor: '#0b203b',
  borderRadius: '2rem',
  padding: '0.75rem 5rem',
  fontWeight: 600,
  letterSpacing: '0.0180em',
  '&:hover': {
    backgroundColor: '#0b203b',
  },
}));
export const StyledUpdateButton = styled(Button)<ButtonProps>(() => ({
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
export const StyleDeleteButton = styled(Button)<ButtonProps>(() => ({
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
export const StyleDialogDisagreeButton = styled(Button)<ButtonProps>(() => ({
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
export const StyleDialogDeleteButton = styled(Button)<ButtonProps>(() => ({
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
