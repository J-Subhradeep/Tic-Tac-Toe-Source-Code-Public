import React from 'react'
// import img from 'images/game_page/user1.jpg';
// import img from 'images/game_page/user2.jpg';
import { PlayerWrapper } from '../styles/players.styled';

const Players = (props) => {
  let userName;
  if (props.name.length > 15) {
    userName = props.name.substring(0, 15) + '...';
  }
  else {
    userName = props.name;
  }

  return (
    <PlayerWrapper>
      <div className='players'>
        <img src="images/game_page/user2.jpg" className="user" alt="user" />
        <p className='name'>{userName}</p>
      </div>
    </PlayerWrapper>
  )
}

export default Players