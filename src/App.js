/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import SearchBarC from "./components/SearchBar/SearchBarContainer.js";
import PostPage from "./components/PostsContainer/PostsPage.js";

const App = (props) => {
  return (
    <div className="App">
      <SearchBarC />
      <PostPage />
    </div>
  );
};

export default App;
