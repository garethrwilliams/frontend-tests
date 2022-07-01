import { useState } from 'react';
const movieData = require('../assets/movies.json');

export default function Test2() {
  const [showInstructions, setShowInstructions] = useState(false);
  const [listIncludes, setListIncludes] = useState('');

  function instructions() {
    return (
      <div className='border-y-2 border-gray-400 px-8 pb-4 text-sm leading-loose'>
        <h2 className='text-center text-2xl tracking-wide font-bold leading-loose'>
          Instructions
        </h2>
        <p>
          Your task is to build a similar movie search bar as below. We have
          given the data for you in a movies.json file.
        </p>
        <h3 className='text-xl leading-loose font-semibold py-4'>
          You must complete the following:
        </h3>
        <ul>
          <li>
            A results table displaying the title, director, genre, cast and
            average rating of each movie
          </li>
          <li>
            search bar that will only display movies that match the current
            search
          </li>
          <li>
            The search bar must be able to search for any movie title, director,
            genre or cast member
          </li>
        </ul>
        <h3 className='text-xl leading-loose font-semibold py-4'>Challenge:</h3>
        <p>
          Can you create a 500 milisecond delay before updating the list once
          the user has stopped typing?
        </p>
      </div>
    );
  }

  function makeTable() {
    // Get table column
    const columns = Object.keys(movieData[0]);
    // First letter to uppercase
    const upperCaseCols = columns.map(
      (e) => e.charAt(0).toUpperCase() + e.slice(1)
    );

    // Get th heading data
    const thData = () => {
      return upperCaseCols.map((data) => {
        return (
          <th className='bg-amber-400' key={data}>
            {data}
          </th>
        );
      });
    };

    // Get table row data
    const tdData = () => {
      return movieData.map((movie, i) => {
        // Check if query is included in row
        const titleQuery = movie.title
          .toLowerCase()
          .includes(listIncludes.toLowerCase());
        const directorQuery = movie.director
          .toLowerCase()
          .includes(listIncludes.toLowerCase());
        const genreQuery = movie.genre
          .toLowerCase()
          .includes(listIncludes.toLowerCase());
        const castQuery = movie.cast.some((actor) =>
          actor.toLowerCase().includes(listIncludes.toLowerCase())
        );

        // Collate rating

        const rating = Object.values(movie.ratings).flat();
        rating[0] *= 10;
        const avRating = (
          rating.reduce((sum, num) => sum + num, 0) / rating.length
        ).toFixed(2);

        if (titleQuery || directorQuery || genreQuery || castQuery) {
          return (
            <tr className={`h-20 ${i % 2 ? 'bg-amber-200' : ''}`}>
              {columns.map((v) => {
                if (v === 'ratings') {
                  return <td className='pr-4'>{avRating}</td>;
                }
                return (
                  <td
                    className={`${v === 'cast' ? 'text-sm' : ''} ${
                      v === 'year' || v === 'director' ? 'px-6' : ''
                    } `}
                  >
                    {movie[v]}
                  </td>
                );
              })}
            </tr>
          );
        }
      });
    };
    return (
      <table className='w-5/6 mx-auto'>
        <thead>
          <tr>{thData()}</tr>
        </thead>
        <tbody>{tdData()}</tbody>
      </table>
    );
  }

  return (
    <main className='text-center '>
      <h1 className='font-semibold text-2xl'>Movie List Filter</h1>
      <button
        className={`my-6 border-gray-800 text-white px-2 py-1 rounded-lg bg-blue-600 font-sans shadow-md hover:bg-blue-800 font-semi-bold   ${
          showInstructions && 'ring-opactiy-75 ring-4 outline-none'
        }`}
        onClick={() => setShowInstructions((bool) => !bool)}
      >
        Show/Hide Instructions
      </button>

      {showInstructions && instructions()}

      <br />

      <input
        className='border rounded-md border-black mb-4 w-2/3 p-2'
        placeholder='Search by Title, Director, Genre or Actor'
        onChange={(e) => setListIncludes(e.target.value)}
        value={listIncludes}
      ></input>

      {makeTable()}
    </main>
  );
}
