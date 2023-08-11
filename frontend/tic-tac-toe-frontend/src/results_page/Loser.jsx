import { LoserWrapper } from "./styles/loser.styled";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
// import { Howl } from "howler";
// import { useEffect } from "react";
import music from "../assets/audios/lose.mp3";
import { useEffect } from "react";
import { Howl } from "howler";
import { useNavigate } from 'react-router-dom';

function Loser() {
  useEffect(() => {
    const sound = new Howl({
      src: [music],
      loop: true,
    });
    sound.play();
    return ()=>{
      sound.stop();
    }
  }, []);

  const navigate = useNavigate()
  const navigateToHome = () =>{
      location.assign("/Login")
  };

  return (
    <LoserWrapper>
      <div className="app">
        {/* <canvas className="canvas-12"></canvas> */}
        <div className="canvas-12"></div>
        <div className="wrapper">
          <span>&#128531;</span>
          <span>&#128532;</span>
          <span>&#128534;</span>
          <span>&#128547;</span>
          <span>&#128553;</span>
          <span>&#128546;</span>
          <span>&#128557;</span>
          <span>&#128560;</span>
          <span>&#128555;</span>
          <span>&#128542;</span>
          <span>&#128532;</span>
          <span>&#128546;</span>
          <span>&#128546;</span>
          <span>&#128560;</span>
          <span>&#128555;</span>
        </div>
        <IconButton
            className="bt"
            aria-label="back-to-home"
            color="primary"
            sx={{color:'white',fontSize:50,position:"absolute"}}
            onClick={navigateToHome}
          >
          <HomeIcon fontSize="inherit" />
        </IconButton>
        <header className="app-header-lose">
          <img src="./sad-gif.gif" className="gif" alt="gif" />
          <p className="result">Better luck next time!</p>
          <p className="lose">You lost</p>
        </header>
      </div>
    </LoserWrapper>
  );
}

export default Loser;
