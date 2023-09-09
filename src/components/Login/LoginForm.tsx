import React from 'react';

const LoginForm = () => {
  return (
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true" />
      <div className="relative">
        <div className="absolute mt-4 right-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <label className="ml-3 text-sm font-bold tracking-wide text-gray-700">
          Email
        </label>
        <input
          className="w-full px-4 py-2 text-base border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
          type=""
          placeholder="mail@gmail.com"
          value="mail@gmail.com"
        />
      </div>
      <div className="content-center mt-8">
        <label className="ml-3 text-sm font-bold tracking-wide text-gray-700">
          Password
        </label>
        <input
          className="content-center w-full px-4 py-2 text-base border-b border-gray-300 rounded-2xl focus:outline-none focus:border-indigo-500"
          type=""
          placeholder="Enter your password"
          value="*****|"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember_me"
            name="remember_me"
            type="checkbox"
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded focus:ring-blue-400"
          />
          <label
            htmlFor="remember_me"
            className="block ml-2 text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>
        <div className="text-sm">
          <a href="#" className="text-indigo-400 hover:text-blue-500">
            Forgot your password?
          </a>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="flex justify-center w-full p-4 font-semibold tracking-wide text-gray-100 transition duration-500 ease-in rounded-full shadow-lg cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-600 hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600"
        >
          Sign in
        </button>
      </div>
      <p className="flex flex-col items-center justify-center mt-10 text-center text-gray-500 text-md">
        <span>Don&rsquo;t have an account?</span>
        <a
          href="#"
          className="text-indigo-400 no-underline transition duration-300 ease-in cursor-pointer hover:text-blue-500 hover:underline"
        >
          Sign up
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
