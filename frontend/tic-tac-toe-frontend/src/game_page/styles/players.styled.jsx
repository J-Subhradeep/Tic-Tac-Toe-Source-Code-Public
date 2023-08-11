import styled from "styled-components"
export const PlayerWrapper = styled.div`
    .players{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction:column;
        overflow:hidden;
        z-index:10;
    }
    .user{
        position: relative;
        height: 165px;
        width: 165px; 
        overflow: hidden;
        border-radius: 20px;
        padding: 4px;
    }
    .name{
        background-image: linear-gradient(90deg, #00dbde, #fc00ff);
        font-size:15px;
        font-weight:bolder;
        font-family: Arial, Helvetica, sans-serif;
        text-align:center;
        border-radius:10px;
        padding-left:20px;
        padding-right:20px;
    }

    @media screen and (max-width: 850px){
        .user{
            height: 100px;
            width: 100px; 
        }
    }
    @media screen and (max-height: 550px){
        .user{
            height: 80px;
            width: 80px; 
        }
    }
`