import styled from "styled-components"
export const BoxWrapper = styled.div`

.box{
  position: relative;
  width: 365px;
  height: 365px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.5);
  overflow: hidden;
  border-radius: 20px;
  padding: 4px;
  z-index: 5;
  }

.game-box{
    height: 350px;
    width: 350px;
    display: grid;
    justify-content: space-between;
    grid-row-gap: 6px;
    grid-column-gap: 6px;
    grid-template-columns: auto auto auto;
    overflow: hidden;
    /* border-radius: 20px; */
    z-index: 5;
}

.motion_body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
  width: 350px;
  /* min-height: 100vh; */
  /* background: #222222; */
  position: absolute;
  /* border: 2px solid red; */
  z-index: 10;
}

line {
  stroke-width: 20px;
  stroke-linecap: round;
  fill: transparent;
  z-index: 10;
}



.box::before{

content: '';
position: absolute;
width: 160px;
height: 140%;
background: linear-gradient(#00ccff, #d400d4);
animation: animate 4s linear infinite;
}
.box::after{
content: '';
position: absolute; 
inset: 6px;
background: #0e1538; 
border-radius: 16px;
}

@keyframes animate

{

0%

{

transform: rotate(0deg);

}

100%

{

transform: rotate(360deg);

}
}


@media only screen and (max-width: 850px) {
    .game-box{
        height: 220px;
        width: 220px;
    }

    .motion_body {
      height: 210px;
      width: 210px;
    }

    line {
      stroke-width: 20px;
    }

    .box{
      height: 229px;
      width: 229px;
    }

    .box::before{
    width: 120px;
    height: 140%;
    }

    .box::after{
    inset: 5px;
    }
    
  }

@media only screen and (max-height: 550px) {
    .game-box{
        height: 150px;
        width: 150px;
        grid-row-gap: 2px;
        grid-column-gap: 2px;
    }
    .motion_body {
      height: 140px;
      width: 140px;
    }

    line {
      stroke-width: 20px;
    }
    .box{
      height: 154px;
      width: 154px;
      border-radius: 15px;
    }

    .box::before{
    width: 100px;
    height: 140%;
    }

    .box::after{
    inset: 4px;
    }
    
  }



`