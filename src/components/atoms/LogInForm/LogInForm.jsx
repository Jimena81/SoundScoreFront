
import  { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';


export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigateTo = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const loginData = { email, password };
      const response = await axios.post('http://127.0.0.1:8000/api/login', loginData);
      const { status, data } = response;
      console.log('Response Status:', status);
      console.log('Response Data:', data);
      
      const authToken = response.data.token; 
      localStorage.setItem('authToken', authToken);
      
      navigateTo('/NewReleases');
    } catch (error) {
      
      console.error('Error al logear', error);
      
    }
  };

      return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 font-sans text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
          <p>Feel the music</p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" > 
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email} onChange={(event)=>setEmail(event.target.value)} 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password} onChange={(event)=>setPassword(event.target.value)} 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button type="submit" onClick={handleSubmit}
                className="bg-custome flex w-full justify-center rounded-md px-3 py-1.5 text-s leading-6  shadow-sm">
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a href="/SignUp" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign Up with us now
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
