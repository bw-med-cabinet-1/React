import * as yup from 'yup'

export default yup.object().shape({
//   username: yup.string()
//     .required('Username is required')
//     .min(3, 'Username must be 3 chars or longer'),
  username: yup.string()
    .required('Username is required'),
  password: yup.string()
    .required('Password is required')
    .min(5, 'Password must be a minimum of 5 characters'),
})