import {object, string} from 'yup';

const forgetPasswordSchema = object({
  email: string().email('Enter a valid email').required('Email is required'),
});

export {forgetPasswordSchema};
