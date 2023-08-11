import React, { useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import Winner from './Winner'
import Loser from './Loser';
import Tie from './Tie';

const Results = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('roomCode')) navigate('/');


    localStorage.clear();

  }, [])


  const location = useLocation();
  const status = location.state.winner

  return (
    <>
      {status == true ? <Winner /> : <></>}
      {status == false ? <Loser /> : <></>}
      {status == null ? <Tie /> : <></>}
    </>
  )
}

export default Results