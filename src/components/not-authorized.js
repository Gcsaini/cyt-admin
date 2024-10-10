import React from "react";
import { Link } from "react-router-dom";
export default function NotAuthorizedPage() {
  return (
    <div
      style={{
        height: "100vh", // Ensures the div takes the full viewport height
        width: "90vw", // Corrected the width unit
        display: "flex",
        justifyContent: "center", // Centers horizontally
        alignItems: "center", // Centers vertically
      }}
    >
      <div class="marquee">
        <h1>401!</h1>
        <h3>Not Authorized</h3>
      </div>
    </div>
  );
}
