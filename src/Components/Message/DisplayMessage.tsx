// Local imports
import { useSwipe } from '../../Utils/Contexs/SwipeContex';

// NPM package
import { useParams } from 'react-router-dom';

// MUI components
import { Box, CircularProgress, styled } from '@mui/material';

// Firebase
import { DocumentData } from 'firebase/firestore';
import { ISendMessage } from '../../Models/ISendMessage';

const RightMessage = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
  gap: '0.4rem',
  paddingBottom: '0.5rem',

  '.message': {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '80%',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '0.7rem 0.7rem 0 0.7rem',
    padding: '0.6rem 0.9rem',
    color: theme.palette.background.paper,
  },
}));

export const DisplayMessage = () => {
  const { id } = useParams();

  const { messagesValues, messagesValuesIsLoading } = useSwipe();
  const messagesSnapShot: DocumentData | undefined = messagesValues?.data()?.[id!];
  return (
    <RightMessage>
      {messagesValuesIsLoading ? (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <CircularProgress size={'3rem'} />
        </Box>
      ) : (
        messagesSnapShot?.map((value: ISendMessage, index: number) => (
          <Box key={index} className='message'>
            {value.message}
          </Box>
        ))
      )}
    </RightMessage>
  );
};
