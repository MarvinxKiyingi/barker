import * as yup from 'yup';

export const IYupSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'passwords does not match')
    .required('this field is required'),
  gdprTerms: yup.boolean().oneOf([true], 'You must accept the terms & conditions to continue'),
});
