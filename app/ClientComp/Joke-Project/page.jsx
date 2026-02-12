'use client';
import React, { useEffect, useState } from 'react';

function JokeGenerator() {
  let [joke, setJoke] = useState({});
  let [visible, setVisible] = useState(false);

  let URL = "http://www.official-joke-api.appspot.com/random_joke";

  async function fetchRandomJoke() {
    let res = await fetch(URL);
    let joke = await res.json();
    setJoke(joke);
    setVisible(false);
  }

  useEffect(() => {
    fetchRandomJoke();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 to-blue-200 p-4">
      
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full text-center transition-all duration-300">
        
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          😂 Random Joke Generator
        </h1>

        {/* Joke Setup */}
        <p className="text-lg font-medium text-gray-700 mb-4">
          {joke.setup}
        </p>

        {/* Punchline */}
        {visible && (
          <p className="text-md text-blue-600 font-semibold mb-6 transition-opacity duration-300">
            👉 {joke.punchline}
          </p>
        )}

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-lg transition"
            onClick={() => setVisible(!visible)}
          >
            {visible ? "Hide Punchline" : "Show Punchline"}
          </button>

          <button
            className="bg-amber-400 hover:bg-amber-500 text-black px-5 py-2 rounded-lg transition"
            onClickCapture={fetchRandomJoke}
          >
            Next Joke
          </button>
        </div>

      </div>
    </div>
  );
}

export default JokeGenerator;
