import React from 'react'
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
function Home() {
  const [{ user }] = useStateValue();
  return (
    <div>
      <p>{user ? user.displayName : "Please Login First"}</p>
    </div>
  );
}

export default Home;
