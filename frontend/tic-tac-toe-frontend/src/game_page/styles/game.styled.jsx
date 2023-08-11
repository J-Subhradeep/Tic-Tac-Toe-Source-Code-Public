import styled from "styled-components"
export const GameWrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');

/* body{
  background: #111;
  height: 100vh;
} */

.upper{
    display: grid;
    height: 100vh;
    width: 100%;
    grid-gap: 10px;
    grid-template-columns: auto auto auto;
    justify-content: center;
    align-items: center;
}

.player{
    height: 250px;
    width: 250px;
    /* background-color: aqua; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 2px solid black; */
}


.board{
    height: 90vh;
    /* background-color: rgb(6, 167, 121); */
    /* border: 2px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
}

.player2{
    height: 120px;
    width: 120px;
    /* background-color: aqua; */
    display: inline-block;
    /* border: 2px solid black; */
}

.bottom{
    height: 50vh;
    width: 100%;
    grid-gap: 20px;
    grid-template-columns: 120px 120px;
    justify-content: center;
    align-items: center;
    /* margin-bottom: 50px; */
    display: none;
}

.room-code{
    background-color: rgb(255, 255, 255, 0);
    color: white;
    width: 420px;
    height: 80px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 30px;
    top: 30px;
    font-family: 'Nunito', sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    border-radius: 20px;
    z-index: 10;
}


.wrapper span {
	position: fixed;
	bottom: -180px;
	height: 50px;
	width: 50px;
	z-index: 1;
	background-color: #18191f;
	box-shadow: 0 0 50px #0072ff, 0 0 100px #0072ff, 0 0 150px #0072ff, 0 0 200px #0072ff;
	animation: animate2 10s linear infinite;
}
.wrapper span:nth-child(1) {
	left: 60px;
	animation-delay: 0.6s;
}
.wrapper span:nth-child(2) {
	left: 10%;
	animation-delay: 3s;
	width: 60px;
	height: 60px;
}
.wrapper span:nth-child(3) {
	left: 20%;
	animation-delay: 2s;
}
.wrapper span:nth-child(4) {
	left: 30%;
	animation-delay: 5s;
	width: 80px;
	height: 80px;
}
.wrapper span:nth-child(5) {
	left: 40%;
	animation-delay: 1s;
}
.wrapper span:nth-child(6) {
	left: 50%;
	animation-delay: 7s;
}
.wrapper span:nth-child(7) {
	left: 60%;
	animation-delay: 6s;
	width: 100px;
	height: 100px;
}
.wrapper span:nth-child(8) {
	left: 70%;
	animation-delay: 8s;
}
.wrapper span:nth-child(9) {
	left: 80%;
	animation-delay: 6s;
	width: 90px;
	height: 90px;
}
.wrapper span:nth-child(10) {
	left: 90%;
	animation-delay: 4s;
}
.banner2 {
	margin: 0;
    padding: 0;
    background: #111;
    height: 100vh;
    /* z-index: -10; */
}

@keyframes animate2 {
	0% {
		transform: translateY(0);
		opacity: 1;
	}
	80% {
		opacity: .7;
	}
	100% {
		transform: translateY(-800px) rotate(360deg);
		opacity: 0;
	}
}





@media only screen and (max-width: 850px) {
    .upper{
        grid-template-columns: 100%;
        align-items: start;
        height: 50vh;;
    }

    .player{
        display: none;
    }

    .board{
        height: 50vh;
        border: none;
    }

    .bottom{
        display: grid;
        grid-template-columns: auto auto;
        align-items: start;
        /* padding-top */
    }

    .room-code{
        position: fixed;
        justify-content: start;
        bottom: 24px;
        left: 25px;
        width: 190px;
        height: 70px;
        top: auto;
        font-size: 1.1rem;
        font-weight: bold;
    }

    .wrapper span:nth-child(1) {
	left: 60px;
	animation-delay: 0.6s;
    }
    .wrapper span:nth-child(2) {
        left: 10%;
        animation-delay: 3s;
        width: 30px;
        height: 30px;
    }
    .wrapper span:nth-child(3) {
        left: 20%;
        animation-delay: 2s;
    }
    .wrapper span:nth-child(4) {
        left: 30%;
        animation-delay: 5s;
        width: 50px;
        height: 50px;
    }
    .wrapper span:nth-child(5) {
        left: 40%;
        animation-delay: 1s;
    }
    .wrapper span:nth-child(6) {
        left: 50%;
        animation-delay: 7s;
    }
    .wrapper span:nth-child(7) {
        left: 60%;
        animation-delay: 6s;
        width: 65px;
        height: 65px;
    }
    .wrapper span:nth-child(8) {
        left: 70%;
        animation-delay: 8s;
    }
    .wrapper span:nth-child(9) {
        left: 80%;
        animation-delay: 6s;
        width: 60px;
        height: 60px;
    }
    .wrapper span:nth-child(10) {
        left: 90%;
        animation-delay: 4s;
    }
    
  }


@media only screen and (max-height: 450px) {
    .upper{
        display: grid;
        height: 100vh;
        width: 100%;
        grid-gap: 20px;
        grid-template-columns: auto auto auto;
        justify-content: center;
        align-items: center;
}

    .player{
        display: flex;
        height: 120px;
        width: 120px;
    }


    .board{
        height: 90vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .bottom{
        display: none;
    }

    .wrapper span:nth-child(1) {
	left: 60px;
	animation-delay: 0.6s;
    }
    .wrapper span:nth-child(2) {
        left: 10%;
        animation-delay: 3s;
        width: 25px;
        height: 25px;
    }
    .wrapper span:nth-child(3) {
        left: 20%;
        animation-delay: 2s;
    }
    .wrapper span:nth-child(4) {
        left: 30%;
        animation-delay: 5s;
        width: 45px;
        height: 45px;
    }
    .wrapper span:nth-child(5) {
        left: 40%;
        animation-delay: 1s;
    }
    .wrapper span:nth-child(6) {
        left: 50%;
        animation-delay: 7s;
    }
    .wrapper span:nth-child(7) {
        left: 60%;
        animation-delay: 6s;
        width: 55px;
        height: 55px;
    }
    .wrapper span:nth-child(8) {
        left: 70%;
        animation-delay: 8s;
    }
    .wrapper span:nth-child(9) {
        left: 80%;
        animation-delay: 6s;
        width: 50px;
        height: 50px;
    }
    .wrapper span:nth-child(10) {
        left: 90%;
        animation-delay: 4s;
    }
    
  }

  
`