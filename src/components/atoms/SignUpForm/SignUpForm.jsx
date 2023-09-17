import back from '../../../assets/images/back.png'
import axios from 'axios'; 
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigateTo = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    

    try {
      const user = {
        name, email, password
      }
      const response = await axios.post('http://localhost:8000/api/create', user);
      console.log('Registro exitoso', response.data); 
      navigateTo("/Success");
    } catch (error) {
      console.error('Error al registrar', error);
     
    }
  };
  return (
    <>
      
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className='w-6'>
          <a href="/LogIn"><img src={back} alt="back" /></a>
          </div>
          <h2 className="mt-10 font-sans text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up
          </h2>
          <p>Register and enjoy</p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900"> Full Name </label>
            <div className="mt-2">
                <input id="name" name="name" type="text" required placeholder="Type your full name" value={name} onChange={(event)=>setName(event.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900"> Email </label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" required placeholder="Type your email" value={email} onChange={(event)=>setEmail(event.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900"> Password </label>
              </div>
              <div className="mt-2">
                <input id="password" name="password" type="password" autoComplete="current-password" required placeholder="Type your password" value={password} onChange={(event)=>setPassword(event.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <button  onClick={handleSubmit} className="bg-custome flex w-full justify-center rounded-md px-3 py-1.5 text-s leading-6  shadow-sm">Continue</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            I Already Have an Account {' '}
            <a href="/LogIn" className="textoback font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Log In
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
