import { useState } from 'react';

export default function Test1() {
  const [showInstructions, setShowInstructions] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignUpError, setShowSignUpError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpDetails, setSignUpDetails] = useState({
    name: '',
    email: '',
    password: '',
  });

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSignUpNameChange(e) {
    setSignUpDetails((details) => {
      const name = e.target.value;
      const newDetails = { ...details, name };
      return newDetails;
    });
  }

  function handleSignUpEmailChange(e) {
    setSignUpDetails((details) => {
      const email = e.target.value;
      const newDetails = { ...details, email };
      return newDetails;
    });
  }

  function handleSignUpPasswordChange(e) {
    setSignUpDetails((details) => {
      const password = e.target.value;
      const newDetails = { ...details, password };
      return newDetails;
    });
  }

  function handleSignUpSubmit(e) {
    e.preventDefault();
    const emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    const emailPass = emailRegex.test(e.target[2].value);

    const passwordRegex = new RegExp(
      '^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
    );
    const passwordPass = passwordRegex.test(e.target[3].value);

    console.log('passwordPass:', passwordPass, e.target[3].value);

    if (passwordPass && emailPass) {
      setSignUpDetails({
        name: '',
        email: '',
        password: '',
      });
      setShowSignUpError(false);
    } else {
      setShowSignUpError(true);
    }
  }

  function instructions() {
    return (
      <div className='border-y-2 border-gray-400 px-8 pb-4 text-sm leading-loose'>
        <h2 className='text-center text-2xl tracking-wide font-bold leading-loose'>
          Instructions
        </h2>
        <p>
          Your task is to build a login form where a user input their email and
          password to enter a website. Or, where they can sign up.
        </p>
        <h3 className='text-xl leading-loose font-semibold py-4'>
          You must complete the following:
        </h3>
        <ul>
          <li>Create a log in form where a user can put in their details</li>
          <li>
            Create a sign up form where a new user can create an account, using
            their name, email and password
          </li>
          <li>
            Hide the sign up info unless they click a button where they can sign
            up
          </li>
        </ul>
        <h3 className='text-xl leading-loose font-semibold py-4'>Challenge:</h3>
        <p>
          Add in input validation to ensure that their email is of the correct
          format and their password contains a number, a lowercase letter and an
          uppercase letter
        </p>
      </div>
    );
  }

  return (
    <main className='text-center'>
      <h1 className='font-semibold text-2xl'>Create A Log In Page</h1>
      <button
        className={`my-6 border-gray-800 text-white px-2 py-1 rounded-lg bg-blue-600 font-sans shadow-md hover:bg-blue-800 font-semi-bold   ${
          showInstructions && 'ring-opactiy-75 ring-4 outline-none'
        }`}
        onClick={() => setShowInstructions((bool) => !bool)}
      >
        Show/Hide Instructions
      </button>

      {showInstructions && instructions()}

      <form
        // onSubmit={handleLogInSubmit}
        action='test1'
        method='GET'
        id='loginForm'
        className='border border-red-600 w-4/5 m-auto sm:w-1/2 md:w-1/3 my-4 pb-2'
      >
        <fieldset>
          <legend className='font-bold py-2'>LOG IN</legend>
          <label>
            Email:
            <br />
            <input
              type={'text'}
              name='Email'
              value={email}
              onChange={handleEmailChange}
              className='border'
            ></input>
          </label>
          <br />
          <label>
            Password:
            <br />
            <input
              type={'password'}
              name='Password'
              value={password}
              onChange={handlePasswordChange}
              className='border'
            ></input>
          </label>
          <br />
          <button
            type='submit'
            form='loginForm'
            disabled={email.length === 0 || password.length === 0}
            className='border my-2 px-2 hover:text-gray-700'
          >
            Submit
          </button>
        </fieldset>
      </form>

      <button
        className='border px-2'
        onClick={() => setShowSignUp((bool) => !bool)}
      >
        Sign up
      </button>

      {showSignUp && (
        <form
          onSubmit={handleSignUpSubmit}
          action='test1'
          id='signUpForm'
          className='border border-blue-600 mx-36 my-4 pb-2'
        >
          <fieldset>
            <legend className='font-bold py-2'>SIGN UP</legend>
            <label>
              Name:
              <br />
              <input
                type={'text'}
                name='Name'
                value={signUpDetails['name']}
                onChange={handleSignUpNameChange}
                className='border'
              ></input>
            </label>
            <br />
            <label>
              Email:
              <br />
              <input
                type={'text'}
                name='Email'
                value={signUpDetails['email']}
                onChange={handleSignUpEmailChange}
                className='border'
              ></input>
            </label>
            <br />
            <label>
              Password:
              <br />
              <input
                type={'password'}
                name='Password'
                value={signUpDetails.password}
                onChange={handleSignUpPasswordChange}
                className='border'
              ></input>
            </label>
            <br />
            <button
              type='submit'
              form='signUpForm'
              disabled={
                signUpDetails.email.length === 0 ||
                signUpDetails.password.length === 0 ||
                signUpDetails.name.length === 0
              }
              className='border my-2 px-2 hover:text-gray-700'
            >
              Submit
            </button>
            {showSignUpError && <p>Please enter a valid email and password</p>}
          </fieldset>
        </form>
      )}
    </main>
  );
}
