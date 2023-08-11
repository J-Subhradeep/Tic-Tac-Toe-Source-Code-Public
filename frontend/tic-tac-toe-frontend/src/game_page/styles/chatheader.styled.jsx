import styled from "styled-components"

export const ChatHeadWrapper = styled.div`
position: relative; 
z-index: 1; 
.strip{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: white;
    box-shadow: 0px 1px 8px;
    /* background-color: #9a86f3; */
    /* background-color: #260483; */
    /* border-top-radius: 0.6rem; */
    border-top-right-radius:0.6rem;
    border-top-left-radius:0.6rem;
    height: 3rem;


    .heading{
        display:flex;
        align-items:center;
        gap: 0.5rem;

        .icon{
           font-size:30px;
           /* color:white; */
           padding-top: 0.5rem;
        }

        .head-text{
            font-family: cursive;
            /* color:white; */
        }
    }

    .cancel {
        float: right;
        position:absolute;
        top:0.5rem;
        right:0.4rem;
        cursor: pointer;
        opacity:0.9;
        width: 1.2rem;
        height: 1.2rem;
    } 

    .cancel:hover{
        opacity:1;
    }
}



`