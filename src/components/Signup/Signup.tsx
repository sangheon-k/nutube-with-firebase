import React, { useState } from 'react';
import { auth } from '../../../firebase';
import { useRouter } from 'next/router';
import Image from 'next/image';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import Link from 'next/link';

const SignupPage = () => {
  const [isLoading, setLoading] = useState(false);
  const user = auth.currentUser;
  const router = useRouter();

  const onSubmit = async () => {};

  return (
    <div className="w-full p-8 bg-white md:flex md:items-center md:justify-center md:h-full md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Welcome Back!
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Please sign up for an account
          </p>
        </div>
        <form className="mt-8 space-y-7" onSubmit={onSubmit}>
          <input type="hidden" name="remember" value="true" />

          <div>
            <label className="ml-2 text-sm font-bold tracking-wide text-gray-700 ">
              Name
            </label>
            <input
              className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-red-300"
              type="text"
              placeholder="mail@gmail.com"
              value="mail@gmail.com"
              required
            />
          </div>

          <div className="relative mt-4">
            <div className="absolute top-1/2 right-3">
              {/* <Image
                src="/ico_check_green.svg"
                className="w-6 h-6 text-green-500"
                alt="check_green"
                width={24}
                height={24}
              /> */}
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
            <label className="ml-2 text-sm font-bold tracking-wide text-gray-700 ">
              Email
            </label>
            <input
              className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-red-300"
              type="email"
              placeholder="mail@gmail.com"
              value="mail@gmail.com"
              required
            />
          </div>

          <div className="mt-4">
            <label className="ml-2 text-sm font-bold tracking-wide text-gray-700 ">
              Password
            </label>
            <input
              className="w-full px-4 py-3 border-b border-gray-300 rounded-2xl focus:outline-none focus:border-red-300"
              type="password"
              placeholder="Enter your password"
              value="*****|"
              required
            />
          </div>

          {/* <div className="flex items-center justify-between mt-6">
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
          </div> */}

          <div className="mt-12">
            <button
              type="submit"
              className="flex justify-center w-full p-4 font-semibold tracking-wide text-gray-100 transition duration-500 ease-in rounded-full shadow-lg cursor-pointer bg-gradient-to-r from-red-500 to-red-800 hover:from-red-800 hover:to-red-500"
            >
              {isLoading ? <LoadingScreen size="small" /> : 'Sign up'}
            </button>
          </div>
          <p className="flex flex-col items-center justify-center text-center text-gray-500 mt-9 text-md">
            <span>Do you already have an account?</span>
            <Link
              href="/login"
              className="text-indigo-400 no-underline transition duration-300 ease-in cursor-pointer hover:text-blue-500 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
