import { IntroWrapper } from "./styles/intro.styled";
import SwipeableTextMobileStepper from "./carousel";
import FileSystemNavigator from "./technologyStack";

import Button from '@mui/material/Button';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Intro = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.clear();
    }, [])

    return (
        <>
            <IntroWrapper>


                <div className="wrapper2">
                    <span>❌</span>
                    <span>⭕</span>
                    <span>❌</span>
                    <span>⭕</span>
                    <span>❌</span>
                    <span>⭕</span>
                    <span>❌</span>
                    <span>⭕</span>
                    <span>❌</span>
                    <span>⭕</span>
                </div>
                <div className="banner">
                    <div className="content">
                        <div className="heading">
                            <div className="span-div">
                                <span>Real</span>
                                <span>tic-tac-toe</span>
                            </div>
                            <div className="buttons">
                                <Button className="button" onClick={() => navigate("/Login")} variant="contained" sx={{ zIndex: 5, fontWeight: 'bold', }} startIcon={<SportsEsportsIcon />}>Play Now</Button>
                                <br />
                                <Button className="button" onClick={() => navigate("/Guide")} variant="outlined" sx={{ zIndex: 5, fontWeight: 'bold' }}>game Guide</Button>
                            </div>
                        </div>
                        <div className="credits">
                            <div className="technology-stack">
                                <h2>Tech Stack</h2>
                                <FileSystemNavigator />
                            </div>
                            <div className="carousel">
                                <h2>Developed By</h2>
                                <SwipeableTextMobileStepper />
                            </div>
                            {/* <img className="img" src="images/landing-page/bgimg1.png" /> */}
                        </div>
                    </div>
                </div>
            </IntroWrapper>
        </>
    );
}
export default Intro