import styled from "styled-components";
export const WinnerWrapper = styled.div`

  .bt{
      padding-left:20px
  }

  canvas {
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

  .app-header-win {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(20px + 2vmin);
    font-weight: 700;
    letter-spacing: 0.1em;
  }
  
  .logo {
    height: 60vmin;
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

  .win {
    margin-top: 0.5px;
    color: white;
    text-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 40px #00b3ff,
      0 0 80px #00b3ff, 0 0 120px #00b3ff;
    animation: animate 2s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: rotateX(-0deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(-0deg) rotateY(360deg);
    }
  }
`
