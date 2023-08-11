import styled from "styled-components"
export const SmallBoxWrapper = styled.div`

.main{
    width: 110px;
    height: 110px;
    background-color: #e0eff1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .3125rem;
    visibility: visible;
}


.circle{
    width: 15%;
}

.cross{
    width: 10%;
}



@media only screen and (max-width: 850px) {
    .main{
        width: 68px;
        height: 68px;
    }
    
  }

@media only screen and (max-height: 550px) {
    .main{
        width: 45px;
        height: 45px;
    }
    
  }

`