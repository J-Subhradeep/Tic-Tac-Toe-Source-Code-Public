
import styled from "styled-components"
export const PopIconWrapper = styled.div`


.transition-3{
        transition: all 0.33s ease;
        -webkit-transition: all 0.33s ease;
        -moz-transition: all 0.33s ease;
}

.css-kmh32b-MuiBadge-root {
    right: 10px;
    bottom: -10px;
}

.hello{ 
        // Position
        position: absolute;
    
        left: calc(-93% );
        top: calc(30% - 38px); 
         // Layering 
        z-index: 10000;
        box-shadow: 0px 0px 16px 6px rgba(0, 0, 0, 0.33);
        // Border
        padding: 12px 12px 12px 16px;
        border-radius: 24px; 
        // Color
        background-color: #e3c5f7;
        opacity:0;
        color: black;
        cursor: pointer;
    }

.chatButton {
        cursor: pointer;
        color: white;
        padding: 16px 20px;
        border: none;
        border-radius: 25%;
        opacity:0.85;
        width: 90px;
        height: 80px;
    }
.chatButton:hover,.icon .chatButton:hover ~ .hello {
    opacity: 1;
    }

@media only screen and (max-width: 850px) {
    .chatButton {
      width: 90px;
      height: 80px;
    }
    /* .css-kmh32b-MuiBadge-root {
      right: 8px;
      bottom: 2px;
      left: -30px;
      top: 30px;
    } */
  }

  @media only screen and (min-width: 851px) {
    /* .css-kmh32b-MuiBadge-root {
      right: 8px;
      bottom: 2px;
    } */
  }

  @media only screen and (max-height: 550px) {
    .chatButton {
      width: 90px;
      height: 80px;
    }
    /* .css-kmh32b-MuiBadge-root {
      left: -30px;
      top: 30px;
    } */
  }
  


`