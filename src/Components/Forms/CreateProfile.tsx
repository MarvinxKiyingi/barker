// Npm packages
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Models
import { IUserYupSchema } from '../../Models/IYupSchema';
import { IUser } from '../../Models/IUser';

// Importing context
import { useAuth } from '../../Utils/Contexs/AuthContext';

// MUI components
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const CreateProfile = () => {
  const { createUserProfile } = useAuth();

  // React-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>(
    // Importing Yup Schema for validation
    { resolver: yupResolver(IUserYupSchema) }
  );

  // Form handler
  const formSubmitHandler: SubmitHandler<IUser> = (data: IUser) => {
    createUserProfile(data);
  };

  return (
    <div className='passwordResetContent'>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Controller
          name={'name'}
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <TextField
              {...field}
              type='name'
              label='name'
              variant='outlined'
              error={!!errors.name}
              helperText={errors.name ? errors.name?.message : ''}
              fullWidth
              style={{ margin: ' 1rem 0rem' }}
            />
          )}
        />
        <Controller
          name={'age'}
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <TextField
              {...field}
              type='age'
              label='age'
              variant='outlined'
              error={!!errors.age}
              helperText={errors.age ? errors.age?.message : ''}
              fullWidth
              style={{ margin: ' 1rem 0rem' }}
            />
          )}
        />
        <Controller
          name={'height'}
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <TextField
              {...field}
              type='height'
              label='height'
              variant='outlined'
              error={!!errors.height}
              helperText={errors.height ? errors.height?.message : ''}
              fullWidth
              style={{ margin: ' 1rem 0rem' }}
            />
          )}
        />

        <div className='submitButtonWrapper'>
          <Button type='submit' variant='contained'>
            Create profile
          </Button>
        </div>
      </form>
    </div>
  );
};
