import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import { GlobalStyle } from './styles/guide.style';
import { useNavigate } from "react-router-dom";

const Guide = () => {
  const [isExpanded, setExpanded] = useState(true);
  const [isExpanded1, setExpanded1] = useState(true);
  const [isExpanded2, setExpanded2] = useState(true);
  const [isExpanded3, setExpanded3] = useState(true);
  const [isExpanded4, setExpanded4] = useState(true);
  const navigate = useNavigate();
  const handleChange = () => {
    setExpanded(!isExpanded);
  };
  const handleChange1 = () => {
    setExpanded1(!isExpanded1);
  };
  const handleChange2 = () => {
    setExpanded2(!isExpanded2);
  };
  const handleChange3 = () => {
    setExpanded3(!isExpanded3);
  };
  const handleChange4 = () => {
    setExpanded4(!isExpanded4);
  };
  return (
    <>
      <GlobalStyle responsive />
      <div className='gameSs'>
        <h1 style={{ color: 'white', textAlign: 'center', marginX: "30px" }}>Instructions for Real-Tic-Tac-Toe</h1>
        <Typography sx={{ color: 'white', fontSize: '15px', textAlign: 'center', marginX: "50px" }}>
          Welcome to Real-Tic-Tac-Toe Game! 😍
          In this guide, we’ll walk you through the steps to get started and spend
          quality time with friends and family by playing this interesting game
          together 🎮.
        </Typography>
        <div className='gameSsIn'>
          <Card sx={{ width: '80vw', border: '5px white' }} className='card'>
            <CardActionArea>
              <CardMedia
                component="img"
                maxHeight="200"
                image="images/game_guide/intro.png"
                alt="green iguana"
              />
              <CardContent>
                <Accordion expanded={isExpanded} onChange={handleChange}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography><span className='headA'>Intro</span></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <span className='headB'>1.	This is the Landing page of the Real Time Tic-Tac-Toe game.
                      </span>
                    </Typography>
                    <Typography>
                      <span className='headB'>2.	The tech stack section shows what we have used to make this project.
                      </span>
                    </Typography>
                    <Typography>
                      <span className='headB'>3.	The Developed By section shows all the members who have worked on this project along with there LinkedIn profile attached.
                      </span>
                    </Typography>
                    <Typography>
                      <span className='headB'>4.		There are two buttons, ‘Play Now’ button will redirect you to the Login page of the game and the ‘Game Guide’ button will carry you to the guide page where you can understand how this web application works.</span>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ width: '80vw', border: '5px white' }} className='card'>
            <CardActionArea>
              <CardMedia
                component="img"
                maxHeight="200"
                image="images/game_guide/login.png"
                alt="green iguana"
              />
              <CardContent>
                <Accordion expanded={isExpanded1} onChange={handleChange1}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography><span className='headA'>LogIn Page</span></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <span className='headB'>1. After clicking on the ‘Play now’ button, you will be redirected to this
                        page.</span>
                    </Typography>
                    <Typography>
                      <span className='headB'>2. Enter your Name in the section provided for the name.This will be your
                        display name during the game.</span>
                    </Typography>
                    <Typography>
                      <span className='headB'>3. If you are the first player, create a room by clicking on the ‘Create room’
                        button and then share the room code with your friend and they can join
                        your game by entering the code.</span>
                    </Typography>
                    <Typography>
                      <span className='headB'>4. If a friend has already started a game, then ask them for their room
                        code, then enter the room code and click on the ‘Join and Play’ button
                        to enter the game.</span>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ width: '80vw' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                maxHeight="200"
                image="images/game_guide/gamepage.png"
                alt="green iguana"
              />
              <CardContent>
                <Accordion expanded={isExpanded2} onChange={handleChange2}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography><span className='headA'>Game Page</span></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <span className='headB'>1. Once you have joined a game, you’ll be redirected to the game board.</span>
                    </Typography>
                    <Typography>
                      <span className='headB'>2. The game board consists of a 3x3 grid. Players take alternate turns to
                        place their respective symbols (X or O) in an empty cell.</span>
                    </Typography>
                    <Typography>
                      <span className='headB'>3. Your goal is to get 3 of your symbols in a row, horizontally, vertically or
                        diagonally.</span>
                    </Typography>
                    <Typography>
                      <span className='headB'>4. Whoever achieves this goal first, wins the game.</span>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className='gameSsIn'>
          <Card sx={{ width: '80vw' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                maxHeight="200"
                image="images/game_guide/chat.png"
                alt="green iguana"
              />
              <CardContent>
                <Accordion expanded={isExpanded3} onChange={handleChange3}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography><span className='headA'>Chat With Friend</span></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <span className='headB'>1. To start a conversation with your friend in the game, click on the chat
                        icon on the bottom-right corner of the game board page.</span>
                    </Typography>
                    <Typography>
                      <span className='headB'>2. A chat-box will pop up, allowing you to chat with your friend in real-
                        time.</span>
                    </Typography>
                    <Typography>
                      <span className='headB'>3. To close the chat-box, click on the close button.</span>
                    </Typography>
                    <Typography>
                      <span className='headB'>4. You can use this chat feature to have a real-time interaction with your
                        friend during the game.</span>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ width: '80vw' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                maxHeight="200"
                image="images/game_guide/result (2).png"
                alt="green iguana"
              />
              <CardContent>
                <Accordion expanded={isExpanded4} onChange={handleChange4}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography><span className='headA'>Results Page</span></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <span className='headB'>1. After the game ends, the results page will display if you won or lost the
                        game or declare it a draw.</span>
                    </Typography>
                    <Typography>
                      <span className='headB'>2. You can then again navigate to the Login page by clicking the home
                        icon on the top-left corner of the results page.</span>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <Typography sx={{ color: 'white', fontSize: '15px', textAlign: 'center', marginX: "50px", marginTop: "20px" }}>
          The motive of the game is to have fun and enjoy the time spent with your
          friends together. So, invite your friends, start a game and may the best
          strategist win! Good luck and have a blast! ❤
        </Typography>
        <Button className="button" onClick={() => navigate("/")} variant="contained" color="primary" sx={{ zIndex: 5, fontWeight: 'bold', marginTop: '15px', fontSize: '15px' }}>Back To Game</Button>
      </div>
    </>
  )
}
export default Guide
