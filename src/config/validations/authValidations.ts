import {object, string} from 'yup';

const forgetPasswordSchema = object({
  email: string().email('Enter a valid email').required('Email is required'),
});

const signinSchema = object({
  email: string().email('Enter a valid email').required('Email is required'),
  password: string()
    .min(6, 'Password must contain min 8 characters')
    .required('Password is required'),
});

export {forgetPasswordSchema, signinSchema};
