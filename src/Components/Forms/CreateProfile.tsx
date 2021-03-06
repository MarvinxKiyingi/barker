// Npm packages
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Models
import { IUserYupSchema } from '../../Models/IYupSchema';
import { IUser } from '../../Models/IUser';

// Importing context
import { useAuth } from '../../Utils/Contexs/AuthContext';

// MUI components
import TextField from '@mui/material/TextField';
import { StyledActionButton } from '../../Styles/StyledComponents/Button';
import { Alert, Box, Typography } from '@mui/material';
import { StyledCreateProfileForm } from '../../Styles/StyledComponents/StyledForms';

export const CreateProfile = () => {
  const { createUserProfile } = useAuth();

  // React-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>(
    // Importing Yup Schema for validation
    { resolver: yupResolver(IUserYupSchema), defaultValues: { name: '', age: 0, height: 0 } }
  );

  // Form handler
  const formSubmitHandler: SubmitHandler<IUser> = (data: IUser, event) => {
    createUserProfile(data);

    // console.log(data?.profileImg?.[0].name);
  };

  return (
    <StyledCreateProfileForm className='createProfileContent'>
      <Alert className='alert' severity='info'>
        Welcome to <b>Barker</b>! A match is established when a dog is proportionate in height with your dog profile, so choose carefully.
      </Alert>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Typography className='actionTitle' variant='h6' gutterBottom component='h1'>
          Create profile
        </Typography>

        <input {...register('profileImg')} type='file' />
        <TextField
          {...register('name')}
          label='name'
          variant='outlined'
          error={!!errors.name?.message}
          helperText={errors.name ? errors.name?.message : ''}
          fullWidth
          style={{ margin: ' 1rem 0rem' }}
        />
        <TextField
          {...register('age')}
          label='Age'
          variant='outlined'
          error={!!errors.age?.message}
          helperText={errors.age ? errors.age?.message : ''}
          fullWidth
          style={{ margin: ' 1rem 0rem' }}
        />
        <TextField
          {...register('height')}
          label='Height'
          variant='outlined'
          error={!!errors.height?.message}
          helperText={errors.height ? errors.height?.message : ''}
          fullWidth
          style={{ margin: ' 1rem 0rem' }}
        />

        <Box className='submitButtonWrapper'>
          <StyledActionButton type='submit' variant='contained'>
            Create profile
          </StyledActionButton>
        </Box>
      </form>
    </StyledCreateProfileForm>
  );
};
