import styled from "styled-components"
export const IntroWrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Nova+Oval&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

.content{
    
    background: #001E3C;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    overflow-y: hidden;
}

.heading{
    width: 35%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 180px;
}

.span-div{
    display: flex;
    flex-direction: column;
    align-items: start;
}

.heading span{
    font-family: 'Nova Oval', cursive;
    font-size: 4.5rem;
    color: white;
    z-index: 10;
}
.credits{
    width: 50%;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: auto auto;
    grid-column-gap: 80px;
}

.credits h2{
    color: white;
    font-family: 'Ubuntu', sans-serif;
}

.technology-stack{
    width: 240px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.buttons{
    width: 100%;
    display: flex;
    justify-content: center;
}

.button{
    width: 155px;
    margin: 40px 10px 0 10px;
}

.carousel{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.carousel h2{
    color: white;
    font-family: 'Ubuntu', sans-serif;
}


.wrapper2 span {
	position: fixed;
	bottom: -80px;
	animation: animate 10s linear infinite;
	font-size: 40px;
	z-index: 5;
}

.wrapper2 span:nth-child(1){
    left: 60px;
    animation-delay: 0.6s;    
}
.wrapper2 span:nth-child(2){
    left: 10%;
    animation-delay: 3s;  
}
.wrapper2 span:nth-child(3){
    left: 20%;
    animation-delay: 2s;    
}
.wrapper2 span:nth-child(4){
    left: 30%;
    animation-delay: 5s;   
}
.wrapper2 span:nth-child(5){
    left: 40%;
    animation-delay: 1s;    
}
.wrapper2 span:nth-child(6){
    left: 50%;
    animation-delay: 7s;    
}
.wrapper2 span:nth-child(7){
    left: 60%;
    animation-delay: 6s;  
}
.wrapper2 span:nth-child(8){
    left: 70%;
    animation-delay: 8s;    
}
.wrapper2 span:nth-child(9){
    left: 80%;
    animation-delay: 6s;  
}
.wrapper2 span:nth-child(10){
    left: 90%;
    animation-delay: 4s;    
}

.banner{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    z-index: 1;
}


@keyframes animate{
    0% {
      transform: translateY(0);
        opacity: 1
    }
    70%{
        opacity: .8;
    }
    100% {
      transform: translateY(-800px) rotate(360deg);	
        opacity: 0
    }
}


@media only screen and (max-width: 1250px) {
    .heading{
        width: 40%;
        padding-top: 240px;
    }
    .heading span{
        font-size: 3.6rem;
    }
    .button{
    width: 120px;
    margin: 35px 8px 0 8px;
    font-size: x-small;
    }
    .credits{
        width: 55%;
        grid-column-gap: 50px;
    }
    
    .content{
        justify-content: center;
    }
}

@media only screen and (max-width: 950px) {
    
    .content{
        flex-direction: column;
    }

    .heading{
    width: 100%;
    height: 40vh;
    justify-content: center;
    align-items: center;
    padding-top: 0;
    }

    .span-div{
    align-items: center;
    }

    .heading span{
        font-size: 2.5rem;
    }

    .credits{
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    grid-column-gap: 0;
    }

    .technology-stack{
        width: 50%;
    }

    .carousel{
        width: 50%;
    }


    .button{
    width: 115px;
    margin: 30px 8px 0 8px;
    }

    .carousel h2{
    font-size: 1rem;
    }
    .credits h2{
    font-size: 1rem;
}

    
  }

  @media only screen and (max-height: 550px) {
    .heading{
        width: 40%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 0px;
    }
    .heading span{
        font-size: 3rem;
    }
    .span-div{
        align-items: start;
    }

    .credits{
        width: 55%;
        grid-column-gap: 50px;
        height: 100vh;
    }
    
    .content{
        flex-direction: row;
        justify-content: space-around;
    }
    .carousel h2{
    font-size: 1rem;
    }
    .credits h2{
    font-size: 1rem;
}
  }


`