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
  password: yup.string().required().min(6),
});