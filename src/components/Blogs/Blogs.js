import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <h2>Blogs </h2>
      <div className="blogs">
        <h3>What is Context API?</h3>
        <p>
          Context API in ReactJS is a very effective way to produce global
          variables which can be passed and received through any component.
          Without Context API developer needs to drill props through components
          to components. Sometimes it becomes very harder to manage the states
          and code readability because of props drilling. So, here comes React's
          Context API for state management to make it easier and lighter. To use
          context API first you have to import it from react using the code
          below.
          <p>
            <code style={{ color: "purple" }}>
              import React, {"{createContext}"} from "react"{" "}
            </code>
          </p>
        </p>
      </div>
      <div className="blogs">
        <h3>What is Semantic Tag?</h3>
        <p>
          Semantic tags are HTML elements by which itself describes ownself in
          such a way so that it increases readibility between human and machine.
          The HTML elements which are considered as semantic elements are:
        </p>
        <p>
          <code style={{ color: "purple" }}>
            {"<header>, <footer>, <article>, <main>, <summary>, <nav>"}{" "}
          </code>
          and so on.
        </p>
        Using semantic tag increases code readability. It also has greater
        accessibility. Semantic tags were introduced in 2014 when HTML was
        upgraded to HTML5 from HTML4.
      </div>
    </div>
  );
};

export default Blogs;
