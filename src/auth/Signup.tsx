import React, { useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import auth from "../firebaseSetup";
import { useNavigate } from "react-router-dom";


export default function Signup(): JSX.Element {

  const user = useContext(AuthContext);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const createAccount = async () => {
    try {
      await auth.createUserWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    await auth.signOut();
  };

  return (
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
              <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                 Sign up
              </h1>
              <form className="mt-6">
                  <div className="mb-2">
                      <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-gray-800"
                      >
                          Email
                      </label>
                      <input
                          ref={emailRef}
                          type="email"
                          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                  </div>
                  <div className="mb-2">
                      <label
                          htmlFor="password"
                          className="block text-sm font-semibold text-gray-800"
                      >
                          Password
                      </label>
                      <input
                          ref={passwordRef}
                          type="password"
                          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                  </div>
                  <a
                      href="#"
                      className="text-xs text-purple-600 hover:underline"
                  >
                      Forget Password?
                  </a>
                  <div className="mt-6">
                      <button 
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                        onClick={createAccount}
                        type="button">
                          Sign up
                      </button>
                  </div>
              </form>

              <p className="mt-8 text-xs font-light text-center text-gray-700">
                  <a
                      href="/login"
                      className="font-medium text-purple-600 hover:underline"
                  >
                      Sign in
                  </a>
              </p>
          </div>
      </div>
  );
}