import React from "react";

export default function Hero({ handleLogout }) {
  return (
    <section >
      <h1 style={{fontSize: '3em', textAlign: 'center', paddingTop: '2em'}}>You are logged in</h1>
        <button
          style={{
            backgroundColor: "red",
            padding: "0.5em 1em",
            border: "1px solid red",
            color: "#fff",
            fontSize: "2em",
            position: "absolute",
            bottom: "0",
          }}
          onClick={handleLogout}
        >
          Logout
        </button>
    </section>
  );
}
