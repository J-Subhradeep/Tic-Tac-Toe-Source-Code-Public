import styled from "styled-components";
export const TieWrapper = styled.div`
  .bt{
      padding-left:20px
  }

  .canvas-123 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    display: grid;
    overflow: hidden;
    place-content: center;
    background-color: #040411;
  }

  .canvas-123::before {
    content: "";
    width: 120vmax;
    height: 120vmax;
    opacity: 0.4;
    background: repeating-conic-gradient(
      from 0deg,
      #246cea 0deg 15deg,
      transparent 15deg 30deg
    );
    -webkit-mask-image: radial-gradient(
      rgba(255, 255, 255, 0.05) 15%,
      rgba(255, 255, 255, 0.7) 50%
    );
    animation: animate-tie 30s linear infinite;
  }

  @keyframes animate-tie {
    to {
      transform: rotate(1turn);
    }
  }

  .app-header-tie {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(20px + 2vmin);
    font-weight: 700;
    letter-spacing: 0.1em;
  }

  .fight-gif {
    height: 40vmin;
  }

  .result-tie {
    font-size: calc(20px + 2vmin);
    background-image: linear-gradient(90deg, #00dbde, #fc00ff);
    -webkit-background-clip: text;
    color: transparent;
    animation: textzoom 1s linear;
  }
  
  @keyframes textzoom{
    0%{
        font-size: calc(5px + 2vmin);
    }
    100%{
        font-size: calc(20px + 2vmin);
    }
  }

  .tie {
    margin-top: 1px;
    color: white;
    text-shadow:
        0 0 10px #00b3ff, 
        0 0 20px #00b3ff, 
        0 0 40px #00b3ff,
        0 0 80px #00b3ff, 
        0 0 120px #00b3ff;
  }

  @media screen and (max-width: 800px) {
    .fight-gif {
      height: 30vmin;
    }
  }
`