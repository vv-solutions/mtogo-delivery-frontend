import '../styles/globals.css'
import 'react-tabs/style/react-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import {Button, Container} from "react-bootstrap";
import Login from "./login";

function MyApp({ Component, pageProps }) {

  const [isLoggedIn,setIsLoggedIn] = useState(false)

  if(isLoggedIn){
    return <Component {...pageProps} />
  } else {
    return <>
      <Login setIsLoggedIn={setIsLoggedIn}></Login>
    </>
  }
}

export default MyApp
