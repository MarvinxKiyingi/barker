import * as yup from 'yup';

export const ISignUpYupSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'passwords does not match')
    .required('confirm password is a required field'),
  gdprTerms: yup.boolean().oneOf([true], 'you must accept the terms & conditions to continue'),
});
export const ISignInYupSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});
export const IUserYupSchema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().min(1).max(16),
  height: yup.number().required().min(30).max(110),
});
export const IUpdateUserYupSchema = yup.object().shape({
  name: yup.string(),
  age: yup.number().min(1).max(16),
  height: yup.number().min(15).max(90),
});
export const IPasswordResetYupSchema = yup.object().shape({
  email: yup.string().required().email(),
});
