import { useFormik } from "formik"
// import '../assets/css/Login.css'
import axios from "axios"
import { ENDPOINT } from "../../config/index"
import { useNavigate } from "react-router-dom"

const Login = () => {
   const navigate = useNavigate()
   const formik = useFormik({
      initialValues: {
         username: '',
         password: '',
      },
      validate: (values) => {
         let errors = {}
         if (!values.username) {
            errors.username = 'please Enter usrename'
         }
         if (!values.password) {
            errors.password = 'please Enter password'
         }
         console.log(errors);
         return errors
      },
      onSubmit: (values) => {
         try {
            // console.log(process.env.REACT_APP_ENDPOINT );
            axios.post(`${ENDPOINT}/auth/login`, {
               username: values.username,
               password: values.password
            }).then((res) => {
               if (res?.status == 200 && res?.data?.token) {
                  localStorage.setItem('token', res?.data?.token)
                
                  navigate('/user/deshboard')
               }
            }).catch((error) => {
               console.log(error);
            })
         }
         catch (e) {
            console.log(e.message);
         }
      }
   })
   return (
      <>
         <h1>Login</h1>
         <form onSubmit={formik.handleSubmit}>
            <div>
               <input
                  type="text"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  placeholder="Enter username"
                  className={formik?.errors?.username && 'is-error'}
               />
            </div>
            {formik.errors.username && <p className="error">{formik?.errors?.username}</p>}
            <div>
               <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  placeholder="Enter password"
                  className={formik?.errors?.password && 'is-error'}
               />
            </div>
            {formik.errors.password && <p className="error">{formik?.errors?.password}</p>}
            <div>
               <button>Login</button>
            </div>
         </form>

      </>
   )
}
export default Login