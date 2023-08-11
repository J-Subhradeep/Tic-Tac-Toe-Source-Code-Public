import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { useNavigate } from 'react-router-dom';
import { BoxWrapper } from '../styles/Board.styled'
import SmallBox from '../small-box/SmallBox'
import { motion } from "framer-motion";
import sound_2 from '../../assets/audios/game-sounds/rclick-13693.mp3'
import { Howl } from 'howler';
import EnvObj from "../EnvObj"

const Board = (props) => {
  var sound = new Howl({
    src: [sound_2],
    html5: true
  });
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: () => {
      const delay = 1
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  const [boardElements, setBoardElements] = useState(['', '', '', '', '', '', '', '', ''])
  const [winElements, setWinElements] = useState(['', '', '', ''])
  const [lastSymbol, setLastSymbol] = useState('.')
  const [win, setWin] = useState(false)
  const [winColor, setWinColor] = useState('')

  const navigate = useNavigate()

  const [socketUrl, setSocketUrl] = useState(EnvObj.boardApiString);
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    shouldReconnect: (closeEvent) => true,
    reconnectAttempts: 10,
    reconnectInterval: 2000,
  });

  const checkWinning = (board) => {
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const lengths = [
      ['15', '95', '585', '95'],
      ['15', '300', '585', '300'],
      ['15', '510', '585', '510'],
      ['90', '20', '90', '580'],
      ['300', '20', '300', '580'],
      ['515', '20', '515', '580'],
      ['20', '20', '585', '585'],
      ['20', '585', '585', '20'],
    ]
    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c] = winLines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWin(true)
        setWinElements(lengths[i])
        if (board[a] == 'o') {
          setWinColor('#055C9D')
        }
        else {
          setWinColor('#AA336A')
        }
        if (board[a] == localStorage.getItem('symbol')) {
          setTimeout(() => {
            navigate("/result", {
              state: {
                winner: true
              },
            })
          }, 3000)
        } else {
          setTimeout(() => {
            navigate("/result", {
              state: {
                winner: false
              },
            })
          }, 3000)
        }

        return
      }
    }
    if (board.every((val) => val !== "")) {
      setTimeout(() => {
        navigate("/result", {
          state: {
            winner: null
          },
        })
      }, 1000)
    }
  };


  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
      setBoardElements(JSON.parse(lastMessage.data).arr)
      setLastSymbol(JSON.parse(lastMessage.data).lastSymbol)
      checkWinning(JSON.parse(lastMessage.data).arr)
      sound.play();
    }
    // getting last message
  }, [lastMessage, setMessageHistory]);


  const handleClickOnBoardElement = (e) => {
    if(props.both == true) {
    // identify the element/index
    let index = e.currentTarget.className

    if (boardElements[index] == 'x' || boardElements[index] == 'o') {
      // console.log('already clkd')
    }
    else if (lastSymbol == localStorage.getItem('symbol')) {
      // console.log('next turn')
      alert("Opponent's turn")
    }
    else {

      const newState = boardElements
      if (newState[index] == 'x' || newState[index] == 'o') {
        //
      } else {
        newState[index] = localStorage.getItem('symbol')

      }
      sendMessage(JSON.stringify({ arr: newState, lastSymbol: localStorage.getItem('symbol'), lastBox: index, }))

    }
  }
  }

  return (
    <>
      <BoxWrapper>
        <div className='box'>
          {win == true ?
            <motion.svg
              width="350"
              height="350"
              className='motion_body'
              viewBox="0 0 600 600"
              initial="hidden"
              animate="visible"
            >
              <motion.line
                x1={winElements[0]}
                y1={winElements[1]}
                x2={winElements[2]}
                y2={winElements[3]}
                stroke={winColor}
                variants={draw}
                custom={2}
              />

            </motion.svg>
            : <></>
          }


          <div className='game-box'>
            <div className='0' onClick={handleClickOnBoardElement}><SmallBox id='0' arr={boardElements} /></div>
            <div className='1' onClick={handleClickOnBoardElement}><SmallBox id='1' arr={boardElements} /></div>
            <div className='2' onClick={handleClickOnBoardElement}><SmallBox id='2' arr={boardElements} /></div>
            <div className='3' onClick={handleClickOnBoardElement}><SmallBox id='3' arr={boardElements} /></div>
            <div className='4' onClick={handleClickOnBoardElement}><SmallBox id='4' arr={boardElements} /></div>
            <div className='5' onClick={handleClickOnBoardElement}><SmallBox id='5' arr={boardElements} /></div>
            <div className='6' onClick={handleClickOnBoardElement}><SmallBox id='6' arr={boardElements} /></div>
            <div className='7' onClick={handleClickOnBoardElement}><SmallBox id='7' arr={boardElements} /></div>
            <div className='8' onClick={handleClickOnBoardElement}><SmallBox id='8' arr={boardElements} /></div>
          </div>
        </div>
      </BoxWrapper>
    </>
  )
}

export default Board