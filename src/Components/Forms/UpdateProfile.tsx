import { useState } from 'react';

// Npm packages
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

//Firebase
import { doc } from 'firebase/firestore';
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
import { Alert, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, InputLabel } from '@mui/material';

export const UpdateProfile = () => {
  const { currentUser, deleteUserAndProfile, updateUserProfile, firebaseError, errorMsg } = useAuth();

  // using React Firebase Hooks to retrive the data from firebase
  const [value, isLoading] = useDocument(doc(db, 'Users', `${currentUser?.uid}`));
  const snapShot = value?.data();

  // state for MUI Dialog
  const [open, setOpen] = useState(false);

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
    updateUserProfile(data);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const errorHandler = () => {
    return errorMsg.errorCode;
  };

  return (
    <div className='passwordResetContent'>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          {firebaseError ? <Alert severity='error'>{errorHandler}</Alert> : null}
          <Controller
            name={'name'}
            control={control}
            defaultValue={snapShot?.name}
            render={({ field }) => (
              <>
                <InputLabel>Name: {snapShot?.name}</InputLabel>
                <TextField
                  {...field}
                  type='name'
                  variant='outlined'
                  error={!!errors.name}
                  helperText={errors.name ? errors.name?.message : ''}
                  fullWidth
                  style={{ margin: ' 1rem 0rem' }}
                />
              </>
            )}
          />
          <Controller
            name={'age'}
            control={control}
            defaultValue={snapShot?.age}
            render={({ field }) => (
              <>
                <InputLabel>Age: {snapShot?.age}</InputLabel>
                <TextField
                  {...field}
                  type='age'
                  variant='outlined'
                  error={!!errors.age}
                  helperText={errors.age ? errors.age?.message : ''}
                  fullWidth
                  style={{ margin: ' 1rem 0rem' }}
                />
              </>
            )}
          />
          <Controller
            name={'height'}
            control={control}
            defaultValue={snapShot?.height}
            render={({ field }) => (
              <>
                <InputLabel>Height: {snapShot?.height}</InputLabel>

                <TextField
                  {...field}
                  type='height'
                  variant='outlined'
                  error={!!errors.height}
                  helperText={errors.height ? errors.height?.message : ''}
                  fullWidth
                  style={{ margin: ' 1rem 0rem' }}
                />
              </>
            )}
          />
          <Stack spacing={2} direction='row' justifyContent='center'>
            <Button type='submit' variant='contained'>
              Update
            </Button>
            <Button variant='contained' color='error' onClick={() => handleClickOpen()}>
              Delete
            </Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
              <DialogTitle id='alert-dialog-title'>{'Delete account'}</DialogTitle>
              <DialogContent>
                <DialogContentText id='alert-dialog-description'>
                  Are you sure you want remove Barker account? All of your data and information will be permanently deleted.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={() => deleteUserAndProfile()} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </Stack>
        </form>
      )}
    </div>
  );
};