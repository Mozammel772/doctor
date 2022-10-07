import { async } from '@firebase/util';
import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Share/Loading';
import {toast } from 'react-toastify';

const Singup = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, upError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        cUser,
        cLoading,
        cError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    if (user || cUser) {
        console.log(user || cUser)
    }
    if (loading || cLoading || updating) {
        return <Loading></Loading>
    }
    let singUpError;
    if (error || cError || upError) {
        singUpError = <p className='text-yellow-600'>{error?.message || cError?.message || upError?.message}</p>
    }


    const onSubmit = async data => {
      await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
         console.log('Update Done')
         toast(`Sing Up Success `)
         navigate('/Appoiment')
    };

    return (
        <div className='flex justify-center items-center h-auto'>
            <div className="card w-96 bg-white shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold font-mono text-purple-600 text-center">Sing Up!</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name?</span>
                            </label>
                            <input type="text" placeholder="Enter-name"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name required'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{5}/,
                                        message: 'Ntring Name'
                                    }
                                })}
                                className="input bg-white text-black font-mono input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.name?.type === 'required' && <p className='text-orange-500 font-mono'>{errors.name.message}</p>}
                                {errors.name?.type === 'pattern' && <p className='text-red-600 font-mono'>{errors.name.message}</p>}
                            </label>
                        </div>
                        {/* email */}
                        <div className="form-control w-full max-w-xs mt-0">
                            <label className="label">
                                <span className="label-text">Email?</span>
                            </label>
                            <input type="text" placeholder="Enter-Email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide Email'
                                    }
                                })}
                                className="input bg-white text-black font-mono input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <p className='text-orange-500 font-mono'>{errors.email.message}</p>}
                                {errors.email?.type === 'pattern' && <p className='text-red-600 font-mono'>{errors.email.message}</p>}
                            </label>
                        </div>
                        {/* password */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password?</span>
                            </label>
                            <input type="password" placeholder="Enter-name"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Minium 6 digit'
                                    }
                                })}
                                className="input bg-white text-black font-mono input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <p className='text-orange-500 font-mono'>{errors.password.message}</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600 font-mono'>{errors.password.message}</p>}
                            </label>
                        </div>
                        {
                            singUpError
                        }
                        <input className='btn btn-outline btn-secondary w-full max-w-xs' type="submit" value="Sing up" />
                    </form>
                    <p>Already SingUp Now? <span className='text-orange-600'><Link to='/Login'>Please Login Now</Link></span></p>

                    <div className='divider'>OR</div>
                    <button
                        className="btn btn-outline btn-secondary"
                        onClick={() => signInWithGoogle()}
                    >Continus With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Singup;