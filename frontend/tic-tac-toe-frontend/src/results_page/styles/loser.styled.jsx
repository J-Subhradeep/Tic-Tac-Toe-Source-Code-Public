import styled from "styled-components";
export const LoserWrapper = styled.div`
  .bt{
      padding-left:20px
  }
  
  .canvas-12 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: linear-gradient(
      45deg,
      #040411,
      #1a0321e4,
      #38081c,
      #15061ae4,
      #040221
    );
  }
  .wrapper span {
    position: fixed;
    bottom: -80px;
    animation: animate-emoji 8s linear infinite;
    font-size: 40px;
    z-index: -1;
    text-shadow: 
        0 0 5px #00b3ff, 
        0 0 10px #00b3ff, 
        0 0 15px #00b3ff,
        0 0 20px #00b3ff;
  }

  .wrapper span:nth-child(1) {
    left: 60px;
    animation-delay: 0.6s;
  }
  .wrapper span:nth-child(2) {
    left: 10%;
    animation-delay: 3s;
  }
  .wrapper span:nth-child(3) {
    right: 20%;
    animation-delay: 2s;
  }
  .wrapper span:nth-child(4) {
    left: 30%;
    animation-delay: 5s;
  }
  .wrapper span:nth-child(5) {
    left: 40%;
    animation-delay: 1s;
  }
  .wrapper span:nth-child(6) {
    left: 50%;
    animation-delay: 3s;
  }
  .wrapper span:nth-child(7) {
    left: 60%;
    animation-delay: 6s;
  }
  .wrapper span:nth-child(8) {
    left: 70%;
    animation-delay: 8s;
  }
  .wrapper span:nth-child(9) {
    left: 80%;
    animation-delay: 6s;
  }
  .wrapper span:nth-child(10) {
    left: 90%;
    animation-delay: 1s;
  }

  .wrapper span:nth-child(11) {
    left: 50%;
    animation-delay: 3s;
  }
  .wrapper span:nth-child(12) {
    left: 60%;
    animation-delay: 6s;
  }
  .wrapper span:nth-child(13) {
    left: 70%;
    animation-delay: 8s;
  }
  .wrapper span:nth-child(14) {
    left: 80%;
    animation-delay: 6s;
  }
  .wrapper span:nth-child(15) {
    left: 90%;
    animation-delay: 1s;
  }

  @keyframes animate-emoji{
    0% {
      transform: translateY(-800px);
        opacity: 1
    }
    70%{
        opacity: .8;
    }
    100% {
      transform: translateY(0px) rotate(360deg);	
        opacity: 0
    }
  }
  .app-header-lose {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(20px + 2vmin);
    font-weight: 700;
    letter-spacing: 0.1em;
  }
  .gif {
    height: 40vmin;
  }
  .result {
    margin-top: 0.5px;
    background-image: linear-gradient(90deg, #00dbde, #fc00ff);
    -webkit-background-clip: text;
    color: transparent;
    animation: textzoom 4s linear infinite;
  }
  @keyframes textzoom {
    0% {
      font-size: calc(5px + 2vmin);
    }
    100% {
      font-size: calc(20px + 2vmin);
    }
  }
  .lose {
    margin-top: 1px;
    color: white;
    text-shadow: 
        0 0 10px #00b3ff, 
        0 0 20px #00b3ff, 
        0 0 40px #00b3ff,
        0 0 80px #00b3ff, 
        0 0 120px #00b3ff;
  }
  @media screen and (max-width:800px) {
    .wrapper span{
        font-size: 30px;
    }
  }
`