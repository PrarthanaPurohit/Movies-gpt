import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector, useDispatch } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang)
  const searchText = useRef(null);

  //search movie in tmdb 
  const searchMovieTMDB = async (movie) => { 
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' +
       movie 
       + '&include_adult=false&language=en-US&page=1', API_OPTIONS); 
    const json = await data.json(); 
    return json.results; 
  }

  const handleGptSearchClick = async () => {

    console.log(searchText.current.value);
    // make an API call to the Chat Completions API (messages)

    const gptQuery =
      "Act as a movie or series recommendation system and suggest some for the query " +
      searchText.current.value +
      ". Only give me names of 5 movies like the example result given ahead. Return ONLY comma-separated movie names. No numbering. No bullet list. No extra text. Example Result: Frozen, Kantara, Jab We Met, Twilight Saga, Tangled.";

    // Use chat.completions.create because we are sending `messages` for chat models.
    const gptResults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }],
      max_tokens: 200,
    });

    // The response typically contains the assistant message at choices[0].message.content
   
    let raw = gptResults?.choices?.[0]?.message?.content || "";

// Convert to clean array
const assistantReply = raw
  .replace(/\n/g, ",")          // new lines → comma
  .replace(/[0-9]+\./g, "")     // remove numbering like "1."
  .split(",")                   // split by comma
  .map(m => m.trim())           // trim
  .map(m => m.replace(/\.$/, "")) // remove trailing period
  .filter(m => m.length > 0);   // remove empty


    const promiseArray = assistantReply.map( movie => searchMovieTMDB(movie)); 
    const tmdbResults = await Promise.all(promiseArray); 
    console.log(tmdbResults); 
    dispatch(addGptMovieResults({movieNames: assistantReply, movieResults: tmdbResults}));
  };
  return (
    <div className="pt-24  flex justify-center">
      <form
      onSubmit={(e) => e.preventDefault()}
       className="bg-black/60 backdrop-blur-md rounded-2xl shadow-xl grid grid-cols-12 p-3 ">
        <input
          ref={searchText}
          className="col-span-10 m-2 p-3 rounded-lg bg-gray-900 text-white placeholder-gray-500 
          focus:outline-none focus:ring-2 focus:ring-red-700 transition-all duration-300"
          type="text"
          placeholder= {lang[langKey].searchPlaceholder}
        />
        <button
          type="submit"
          onClick = {handleGptSearchClick}
          className="col-span-2 m-2 bg-red-700 hover:bg-red-800 text-white font-semibold 
          rounded-lg px-4 py-3 transition-all duration-300 ease-in-out shadow-md hover:shadow-red-700/40"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

