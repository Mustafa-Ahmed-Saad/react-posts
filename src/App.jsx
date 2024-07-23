import { useState } from "react";
import "./App.css";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
  const [moduleIsVisible, setModuleIsVisible] = useState(false);
  
  function showModalHandler() {
    setModuleIsVisible(true);
  }
  function hideModalHandler() {
    setModuleIsVisible(false);
  }
  
  return (
    <>
    <MainHeader onCreatePost={showModalHandler} />
    <main>
      <PostsList isPosting={moduleIsVisible} onStopPosting={hideModalHandler} />
    </main>  
    </>
  );
}

export default App;
