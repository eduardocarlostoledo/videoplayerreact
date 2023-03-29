import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./styles/Reproductor.css";
import logo from "./img/youtubelogo.png";
const Repoductor = () => {
  const [url, setUrl] = useState("");

  return (
    <div >
      <div className="reproductor" >  
        <img className="logo" src={logo} alt="chototube" />
        <h1 className="nameplayer">Chootos Media Player</h1>
        <input
          className="input"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      <div className="video">
        {url !== "" && <ReactPlayer url={url} controls={true} />}
      </div>
    </div>
  );
};

export default Repoductor;
