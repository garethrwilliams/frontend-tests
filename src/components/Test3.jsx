import { useState } from 'react';

export default function Test3() {
  const [showInstructions, setShowInstructions] = useState(false);

  function instructions() {
    return (
      <div className='border-y-2 border-gray-400 px-8 pb-4 text-sm leading-loose'>
        <h2 className='text-center text-2xl tracking-wide font-bold leading-loose'>
          Instructions
        </h2>
        <p>
          Your task is to build a mini game where a player can guess all 50 US
          states...
        </p>
        <h3 className='text-xl leading-loose font-semibold py-4'>
          You must complete the following:
        </h3>
        <ul>
          <li>
            Create an input box where the user can type any case insensitive
            state and it will accept the answer
          </li>
          <li>
            Create text box that will store all the correct answers the player
            has given
          </li>
          <li>
            The text box should not accept duplicate values, regardless of case
            sensitvity
          </li>
          <li>Create a restart button that will reset the game</li>
          <li>
            A give up button that will show the remaining answers that the
            player did not guess
          </li>
          <li>
            A counter that will tell the player how many states he has correctly
            guessed
          </li>
        </ul>
        <h3 className='text-xl leading-loose font-semibold py-4'>Challenge:</h3>
        <p>
          Add a timer that when it reaches 0 will disable the input box until
          restart is pressed
        </p>
      </div>
    );
  }

  return (
    <main className='text-center  flex flex-col items-center'>
      <h1 className='font-semibold text-2xl'>50 US States Game</h1>
      <button
        className={`my-6 border-gray-800 text-white px-2 py-1 rounded-lg bg-blue-600 font-sans shadow-md hover:bg-blue-800 font-semi-bold w-56  ${
          showInstructions && 'ring-opactiy-75 ring-4 outline-none'
        }`}
        onClick={() => setShowInstructions((bool) => !bool)}
      >
        Show/Hide Instructions
      </button>

      {showInstructions && instructions()}

      <button className='border px-4 rounded-md'>Restart?</button>
      <label for=''>Guess here:</label>
      <input className='border' type={'text'}></input>
      <p>Total</p>
      <textarea className='border'></textarea>
      <button>Give up</button>
    </main>
  );
}
