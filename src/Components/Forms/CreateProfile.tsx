// Npm packages
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

//Firebase
import { doc, setDoc } from 'firebase/firestore';

// Models
import { IUserYupSchema } from '../../Models/IYupSchema';
import { IUser } from '../../Models/IUser';

// Importing context
import { useAuth } from '../../Utils/Contexs/AuthContext';

// MUI components
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';
import { db } from '../../Utils/Firebase';

export const CreateProfile = () => {
  const { currentUser, errorMsg, firebaseError } = useAuth();
  console.log('CurrentUser: ', currentUser);

  // Used to redirect users to a spesific route
  const navigate = useNavigate();

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
    console.log('Form object: ', data);
    if (currentUser) {
      try {
        setDoc(doc(db, 'Users', currentUser.uid), {
          name: data.name,
          age: data.age,
          height: data.height,
        });
        navigate('/');
      } catch {
        console.log('something went wrong');
      }
    }
  };
  // This functions returns a string that is being presented to the user if there is an error.
  const errorHandler = () => {
    return errorMsg.errorCode;
  };

  return (
    <div className='passwordResetContent'>
      {firebaseError ? <Alert severity='error'>{errorHandler}</Alert> : null}
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
