import * as yup from 'yup';

export const IYupSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords does not match')
    .required('This field is required'),
  gdprTerms: yup.boolean().oneOf([true], 'This field must be checked'),
});
