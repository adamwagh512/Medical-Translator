import React from "react";
import "./Medical_Questions.css";
import { useMutation } from "@apollo/client";
import { TRANSLATETEXT } from "../../utils/mutations";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const Medical_Questions = () => {
  const [translate] = useMutation(TRANSLATETEXT);
  // the funnction wil be here
  // Translate a formal document from English to German:
  const translateText = async () => {
    try {
      await translate({
        variables: { words: "words", translateFrom: "en", translateTo: "ro" },
      });
    } catch {
      console.log("stuff");
    }
  };

  return (
    <div>
      <h2>Medical_Questions</h2>
      <h3> Medical issues? Ex Diabetes, Prior hart attack etc.</h3>
      <h3> Medical issues? Ex Diabetes, Prior hart attack etc.</h3>{" "}
      <input placeholder="enter info here" />
      <button onClick={() => translateText}>Done</button>
    </div>
  );
};

export default Medical_Questions;

//  step 1 create that page
// render just the component instead of whole pages
