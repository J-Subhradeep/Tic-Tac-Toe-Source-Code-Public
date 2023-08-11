import * as React from 'react';
import { CarouselWrapper } from './styles/carousel.styled';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    Name: 'Subhradeep Pal',
    Linkedin: 'https://www.linkedin.com/in/subhradeep-pal/',
    imgPath: 'images/landing-page/subhradeep.jpeg',
  },
  {
    Name: 'Kashmira Jha',
    Linkedin: 'https://www.linkedin.com/in/kashmira-jha-52405022b/',
    imgPath: 'images/landing-page/kashmira.jpeg',
  },
  {
    Name: 'Deblina Mandal',
    Linkedin: 'https://www.linkedin.com/in/deblina-mandal-13b990226/',
    imgPath: 'images/landing-page/deblina.jpeg',
  },
  {
    Name: 'Pratyush Banerjee',
    Linkedin: 'https://www.linkedin.com/in/pratyush-banerjee-98b66a219/',
    imgPath: 'images/landing-page/pratyush.jpg',
  },
  {
    Name: 'MD Safiul Haque',
    Linkedin: 'https://www.linkedin.com/in/md-safiul-haque-32a913242/',
    imgPath: 'images/landing-page/safiul.jpg',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <CarouselWrapper>
      <Box className="main-box" sx={{ width: 260, flexGrow: 1, }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 50,
            pl: 2,
            pr: 2,
            bgcolor: '#132F4C',
            borderRadius: '10px 10px 0px 0px'
            // opacity: 0.6
          }}
        >
          <Typography color='white' className='typography'
          >
            {images[activeStep].Name}
          </Typography>
          <Link className='linkedin' href={images[activeStep].Linkedin} target="_blank" >
            <LinkedInIcon className='largeicon' fontSize='large' sx={{ color: 'white' }} />
            <LinkedInIcon className='smallicon' fontSize='small' sx={{ color: 'white' }} />
          </Link>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.Name}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  className='photo'
                  component="img"
                  sx={{
                    // height: 250,
                    display: 'block',
                    maxWidth: 260,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.Name}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          color='white'
          sx={{
            bgcolor: '#132F4C',
            color: 'white',
            borderRadius: '0px 0px 10px 10px',
            display: 'flex',
            justifyContent: 'center'
          }}
        // nextButton={
        //   <Button
        //     size="small"
        //     onClick={handleNext}
        //     disabled={activeStep === maxSteps - 1}
        //     sx={{color: 'white'}}
        //   >
        //     Next
        //     {theme.direction === 'rtl' ? (
        //       <KeyboardArrowLeft />
        //     ) : (
        //       <KeyboardArrowRight />
        //     )}
        //   </Button>
        // }
        // backButton={
        //   <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{color: 'white'}}>
        //     {theme.direction === 'rtl' ? (
        //       <KeyboardArrowRight />
        //     ) : (
        //       <KeyboardArrowLeft />
        //     )}
        //     Back
        //   </Button>
        // }
        />
      </Box>
    </CarouselWrapper>
  );
}

export default SwipeableTextMobileStepper;