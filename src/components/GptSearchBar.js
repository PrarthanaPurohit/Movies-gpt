import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GptSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang)
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {

    console.log(searchText.current.value);
    // make an API call to the Chat Completions API (messages)

    const gptQuery =
      "Act as a movie or series recommendation system and suggest some for the query " +
      searchText.current.value +
      ". Only give me names of 5 movies like the example result given ahead. Example Result: Frozen, Kantara, Jab We Met, Twilight Saga, Tangled.";

    // Use chat.completions.create because we are sending `messages` for chat models.
    const gptResults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }],
      max_tokens: 200,
    });

    // The response typically contains the assistant message at choices[0].message.content
    const assistantReply = gptResults?.choices?.[0]?.message?.content;
    console.log({ assistantReply, raw: gptResults });
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

