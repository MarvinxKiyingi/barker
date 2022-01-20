import styled from 'styled-components';

export const StyledFormsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .actionTitle {
    margin: 1rem 0rem;
  }

  @media (min-width: 768px) {
    .actionTitle {
      font-size: 1.5rem;
    }
  }
`;
