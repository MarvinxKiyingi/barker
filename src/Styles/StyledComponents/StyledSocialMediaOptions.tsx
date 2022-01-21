import styled from 'styled-components';

export const StyledSocialMediaOptions = styled.div`
  display: none;
  width: 100%;
  display: flex;
  max-width: 40rem;
  padding: 0 2rem;
  justify-content: space-around;

  @media (min-width: 768px) {
    display: unset;
    display: flex;
  }
`;
