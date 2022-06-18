import React from 'react'
import { auth } from "../firebase";
function Home() {
  return (
    <div>
      <p>
        {auth.currentUser ? auth.currentUser.displayName : "please login first"}
      </p>
    </div>
  );
}

export default Home
