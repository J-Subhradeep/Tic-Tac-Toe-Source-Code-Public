import { TieWrapper } from "./styles/tie.styled";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Howl } from "howler";
import { useEffect } from "react";
import music from "../assets/audios/tie.wav";
import { useNavigate } from 'react-router-dom';

function Tie() {
  useEffect(() => {
    const sound = new Howl({
      src: [music],
      loop: true,
    });
    sound.play();
    return () => {
      sound.stop();
    }
  }, []);


  const navigate = useNavigate()
  const navigateToHome = () => {
    location.assign("/Login")
  };

  return (
    <TieWrapper>
      <div className="app">
        <div className="canvas-123"></div>
        <IconButton
          className="bt"
          aria-label="back-to-home"
          color="primary"
          sx={{ color: 'white', fontSize: 50, position: "absolute" }}
          onClick={navigateToHome}
        >
          <HomeIcon fontSize="inherit" />
        </IconButton>
        <header className="app-header-tie">
          <img src="./duo-fight.gif" className="fight-gif" alt="tie" />
          <p className="result-tie">Woopsie!</p>
          <p className="tie">It's a Tie</p>
        </header>
      </div>
    </TieWrapper>
  );
}

export default Tie;
