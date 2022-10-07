import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Share/Loading';
import {  toast } from 'react-toastify';

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    signInWithEmailAndPassword,
    epUser,
    epLoading,
    epError,
  ] = useSignInWithEmailAndPassword(auth);

  let singInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect( ()=>{
    if (user || epUser) {
      navigate(from, { replace: true });
      toast('Login Success')
   }
  },[user,epUser,from,navigate])

  if (epLoading || loading) {
    return <Loading />
  }
  if (epError || error) {
    singInError = <p>{epError?.message || error?.message}</p>
    toast('Please Correct Information')
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.Password)
  };



  return (
    <div className='flex justify-center items-center h-auto'>
      <div className="card w-1/2 bg-white shadow-xl">
        <div className="card-body">
          <h2 className="font-bold text-center text-2xl text-primary">Login Now!</h2>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs ">
              <label className="label">
                <span className="label-text">Email?</span>
              </label>
              <input type="email"
                placeholder="Enter Your Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: ' Email required'
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide Email'
                  }
                })}
                className="bg-white text-black font-mono font-bold input input-bordered "
              />
              <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-sm text-red-600">{errors.email.message}</span>}
              </label>
            </div>
            {/* password- field */}
            <div className="form-control  w-full max-w-xs ">
              <label className="label">
                <span className="label-text">Password?</span>
              </label>
              <input type="Password"
                placeholder="Password"
                {...register("Password", {
                  required: {
                    value: true,
                    message: ' Password required'
                  },
                  minLength: {
                    value: 6,
                    message: 'minimun 6 digit'
                  }
                })}
                className="bg-white text-black font-mono font-bold input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.Password?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.Password.message}</span>}
                {errors.Password?.type === 'minLength' && <span className="label-text-alt text-sm text-red-600">{errors.Password.message}</span>}
              </label>
            </div>
            {
              singInError
            }
            <input className='btn font-white w-full max-w-xs uppercase' type="submit" value="Login" />
          </form>
          <p>New to Doctor Portal! <Link to='/signup'><span className='text-primary'> Create New Account</span></Link> </p>
          <div className='divider w-full max-w-xm'>OR</div>
          <button
            className="btn  btn-secondary"
            onClick={() => signInWithGoogle()}
          >Continus With Google</button>
         
        </div>
      </div>
    </div>
  );
};

export default Login;