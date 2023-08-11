import styled from "styled-components"
export const ChatBodyWrapper = styled.div`


gap: 0.1rem;
padding-top: 0.3rem;

.chat-messages{
    padding: 0.1rem ;
    display:flex;
    flex-direction:column;
    gap:0.5rem;
    overflow:auto;
    margin-bottom: 15px;
    
    .message{
      display:flex;
      align-items:center;
     
      .content{
        max-width:60%;
        overflow-wrap:break-word;
        padding-left:1rem;
        padding-right:1rem;
        font-size:0.75rem;
        font-family:cursive;
        border-radius:1.5rem;
        color:black;
        /* background-color:  #e6b7f5; */
        background-color:  white;
        box-shadow: 1px 1px 2px;
        
      }
      
  .message::after {
    content: "";
    clear: both;
    display: table;
  }
    }

    .sender{
      justify-content:flex-end;
      .content{
        /* background-color:#bfd9e9; */
        background-color:#9e5eff;
        box-shadow: 1px 1px 2px black;
        color:white;
      }
    }
    
  }
`