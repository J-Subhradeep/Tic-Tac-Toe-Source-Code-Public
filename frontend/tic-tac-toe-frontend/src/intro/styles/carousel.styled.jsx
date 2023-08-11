import styled from "styled-components"
export const CarouselWrapper = styled.div`

.typography{
    font-weight: bold
}

.smallicon{
    display: none;
}


@media only screen and (max-width: 1250px) {

        .main-box{
        width: 220px;
    }
    
    .photo{
        /* height: 200px; */
        width: 220px;
}

}

@media only screen and (max-width: 950px) {

    .main-box{
        width: 180px;
    }
    
    .photo{
        /* height: 160px; */
        width: 180px;
    }
    .typography{
        font-size: small;
    }
    .largeicon{
        display: none;
    }
    .smallicon{
        display: block;
    }
}
@media only screen and (max-width: 290px) {
    .main-box{
        width: 170px;
    }
    
    .photo{
        width: 170px;
    }

}

@media only screen and (max-height: 550px) {
    .main-box{
        width: 180px;
    }
    
    .photo{
        /* height: 160px; */
        width: 180px;
    }
    .typography{
        font-size: small;
    }
    .largeicon{
        display: none;
    }
    .smallicon{
        display: block;
    }
}




`