import './App.css'






import {auth} from "./firebase"
import React,{useEffect,useState} from "react";


function App() {

  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <>

    </>
  )
}

export default App