// Npm packages
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

//Firebase
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../Utils/Firebase';

// react-firebase-hooks
import { useDocument } from 'react-firebase-hooks/firestore';

// Models
import { IUpdateUserYupSchema } from '../../Models/IYupSchema';
import { IUser } from '../../Models/IUser';

// Importing context
import { useAuth } from '../../Utils/Contexs/AuthContext';

// MUI components
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const UpdateProfile = () => {
  const { currentUser, deleteUserAndProfile, updateUserProfile } = useAuth();
  console.log('CurrentUser: ', currentUser);

  const [value] = useDocument(doc(db, 'Users', `${currentUser?.uid}`));

  console.log(value?.data());
  const snapShot = value?.data();

  // React-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>(
    // Importing Yup Schema for validation
    { resolver: yupResolver(IUpdateUserYupSchema) }
  );

  // Form handler
  const formSubmitHandler: SubmitHandler<IUser> = (data: IUser) => {
    console.log('Form object: ', data);
    updateUserProfile(data);
  };

  return (
    <div className='passwordResetContent'>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Controller
          name={'name'}
          control={control}
          defaultValue={snapShot?.name}
          render={({ field }) => (
            <TextField
              {...field}
              type='name'
              label={`${snapShot?.name}`}
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
          defaultValue={snapShot?.age}
          render={({ field }) => (
            <TextField
              {...field}
              type='age'
              label={`${snapShot?.age}`}
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
          defaultValue={snapShot?.height}
          render={({ field }) => (
            <TextField
              {...field}
              type='height'
              label={`${snapShot?.height}`}
              variant='outlined'
              error={!!errors.height}
              helperText={errors.height ? errors.height?.message : ''}
              fullWidth
              style={{ margin: ' 1rem 0rem' }}
            />
          )}
        />

        <Stack spacing={2} direction='row' justifyContent='center'>
          <Button type='submit' variant='contained'>
            Update
          </Button>
          <Button variant='contained' color='error' onClick={() => deleteUserAndProfile()}>
            Delete
          </Button>
        </Stack>
      </form>
    </div>
  );
};
