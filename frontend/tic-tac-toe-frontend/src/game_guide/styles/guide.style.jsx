import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    background-color: #132F4C;  
}
body::-webkit-scrollbar{
    display: none;
}
.headA{
    font-size: 30px;
}
.headB{
    font-size: 25px;
}
.gameSs{
    ${'' /* background-color: #2196f3; */}
    ${'' /* height: 100vh; */}
    margin-top: 80px;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.gameSsIn{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
${(props) =>
        props.responsive &&
        css`
    @media (max-width: 1050px)
    {
        .headA{
            font-size: 15px;
        }
        .headB{
            font-size: 15px;
        }
       .gameSs{
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
       } 
       .gameSsIn{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
       }
    }
    `
    }
`
