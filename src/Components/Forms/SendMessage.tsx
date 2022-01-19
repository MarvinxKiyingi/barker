import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { Box } from '@mui/system';
import { ISendMessage } from '../../Models/ISendMessage';
import { useSwipe } from '../../Utils/Contexs/SwipeContex';
import { ISendMessageYupSchema } from '../../Models/IYupSchema';
import { yupResolver } from '@hookform/resolvers/yup';

export const SendMessage = () => {
  const { sendMessage } = useSwipe();
  // React-hook-form
  const { control, handleSubmit } = useForm<ISendMessage>(
    // Importing Yup Schema for validation
    { resolver: yupResolver(ISendMessageYupSchema) }
  );

  // Form handler
  const formSubmitHandler: SubmitHandler<ISendMessage> = (data: ISendMessage) => {
    // Reseting password through firebase auth
    sendMessage(data);
  };
  return (
    <Box className='sendMessageFormWrapper'>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Controller
          name={'message'}
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <OutlinedInput
              {...field}
              inputProps={{
                'aria-label': 'Send message input',
              }}
              type={'message'}
              multiline
              endAdornment={
                <InputAdornment className='submitButtonWrapper' position='end'>
                  <IconButton type='submit' aria-label='toggle password visibility' edge='end'>
                    send
                  </IconButton>
                </InputAdornment>
              }
              fullWidth
            />
          )}
        />
      </form>
    </Box>
  );
};
