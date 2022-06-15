import { useState, useEffect } from "react";
import Head from "next/head";
// import Input from "../components/Input.js";
import MiroItem from "../components/MiroItem.js";
import Time from "../components/Time.server.js";

export default function Main() {
  const [authenticated, setAuthenticated] = useState(false);
  const [items, setItems] = useState([]);

  // On Page Load
  useEffect(() => {
    fetch("api/authenticate")
      .then((response) => response.json())
      .then((result) => setAuthenticated(result.authenticated));
  }, []);

  // On Page load
  useEffect(() => {
    fetch("api/authenticate").then(() => {
      fetch("api/getItems").then((response) => {
        return response.json()
      }).then((result) => {
        // console.log('result :>> ', result);
        setItems(result.data)
      }).catch((error) => {console.log('error', error)})
    })
  }, [authenticated])
  

  return (
    <div className={"container"}>
      <Head>
        <title>We Are Developers Workshop</title>
        <meta name="description" content="We Are Developers Workshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {authenticated ? 
        <>
         {items.map((item, index) => (
           <MiroItem type={item.type} key={index} itemId={item.id} />
         ))
         
        }
        </> 
        : 
        <a href="/api/signin">Sign In</a>}
        <Time />
    </div>
  );
}
