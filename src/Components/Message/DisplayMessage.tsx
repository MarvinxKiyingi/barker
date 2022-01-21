// Local imports
import { useSwipe } from '../../Utils/Contexs/SwipeContex';

// NPM package
import { useParams } from 'react-router-dom';
import { ChatFeed } from 'react-chat-ui';

// MUI components
import { Box, CircularProgress } from '@mui/material';

// Firebase
import { DocumentData } from 'firebase/firestore';

export const DisplayMessage = () => {
  const { id } = useParams();

  const { messagesValues, messagesValuesIsLoading } = useSwipe();
  const messagesSnapShot: DocumentData | undefined = messagesValues?.data()?.[id!];

  return (
    <Box>
      {messagesValuesIsLoading ? (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <CircularProgress size={'3rem'} />
        </Box>
      ) : (
        <ChatFeed
          className={'displayMessageWrapper'}
          messages={messagesSnapShot} // Array: list of message objects
          // JSON: Custom bubble styles
          bubbleStyles={{
            text: {
              fontSize: '1rem',
              fontWeight: 600,
            },
            chatbubble: {
              backgroundColor: '#0b203b',
              borderRadius: 70,
              padding: '1rem',
              float: 'right',
            },
          }}
        />
      )}
    </Box>
  );
};
