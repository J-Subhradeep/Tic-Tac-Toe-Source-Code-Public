import styled, { createGlobalStyle, css } from "styled-components";

export const LoginWrapper = styled.div`
${
  "" /* @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,500&display=swap'); */
}

.total{
  width: 560px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 20px 10px #8accef;
  border-radius: 22px;
}

.left{
  width: 280px;
  height: 450px;
  background-color: #1976d2;
  border-radius: 20px 0px 0px 20px;
}

.whole{
  box-sizing: border-box;
  height: 100vh;
  ${
    "" /* background-image: linear-gradient(to right, #160264 5%, #6a026a 95%); */
  }
  display: flex;
  justify-content: center;
  align-items: center;
    ${"" /* width: 100vw; */}
    /* background-image: linear-gradient(red,yellow); */
    ${"" /* margin: 0; */}
    padding: 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    ${"" /* align-content: center; */}
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.login-heading{
  font-family: 'DM Sans', sans-serif;
  font-weight: bold;
  font-size: large;
  color: #1976d2;
}

.left img{
  border-radius: 20px 0px 0px 0px;
  width: 100%;
}

.playFriends{
    height: 450px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: white;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 0px;
    border-radius: 0px 20px 20px 0px;
  }

.userName{
    width: 250px;
    height: 25px;
    font-size: 18px;
    border: none;
    outline: none;
    padding: 2px;
    text-align: center;
    border-radius: 2px;
}
.roomGeneration {
    display: inline-block;
    padding: 6px 20px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    /* background-color: #ff00ff; */
    background-color: #08812c;
    color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
  }
  
  .roomGeneration:hover {
    /* background-color:#9c049c; */
    background-color: #096b26;
  }
  
  .roomGeneration:active {
    /* background-color: #6a026a; */
    background-color: #036521;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .joinRoom {
    display: inline-block;
    padding: 6px 20px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    /* background-color: #ff4081; */
    background-color: #2196f3;
    color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
  }
  .error{
    height: 30px;
    width:250px;
    position:fixed;
    left:50%;
    top:70px;
    transform:translate(-50%,0);
    
  }
  
  .joinRoom:hover {
    /* background-color: #f50057; */
    background-color: #1e88e5;
  }
  
  .joinRoom:active {
    /* background-color: #c51162; */
    background-color: #1976d2;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  
  
  .roomCodeField{
    display: flex;
    flex-direction: row;
    gap: 0;
    justify-content: center;
    align-items: center;
  }
  .buttonSection{
    margin-top: 25px;
    display: flex;
    flex-direction:column ;
    gap: 25px;
  }
  .eachElement{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
    gap: 8px;
    ${"" /* text-align: center; */}
  }
  .developers li .eachElement p{
    text-align: left;
  } 
  .developers li p{
    width: 125px;
    color: #fff;
  }

  Button{
    height: 35px;
    ${"" /* border-radius: 15px; */}
  }

  ${(props) =>
    props.responsive &&
    css`
      @media (max-width: 800px) {
        .subWhole {
          position: relative;
          /* bottom:100px; */
          /* bottom:0 */
        }
        .devSection {
          left: 12px;

          /* justify-content: center; */
          position: fixed;
          bottom: 0;
        }
        @media (max-width: 500px) {
          .subWhole {
            position: relative;
            /* top:20px */
          }
          .devSection {
            /* top: 20px; */
            /* position: fixed; */
            justify-content: center;
          }
        }
      }
    `}
  
      #login-form{
        display: inline;
        height: 450px
      }

      @media only screen and (max-width: 850px) {
        .total{
          width: 0px;
          height: 380px;
  box-shadow: 0 0 0px 0px #8accef;
        }

        .left{
          display: none
        }
        .playFriends{
          height: 100%;
          border-radius: 10px;
          box-shadow: 0 0 20px 6px #8accef;
        }
        #login-form{
          height: 100%
        }
      }
  `;
// BsLinkedin
