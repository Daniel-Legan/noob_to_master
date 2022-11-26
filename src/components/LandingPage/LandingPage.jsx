import React, { useState } from 'react';
// import { Parallax } from 'react-scroll-parallax';
import { Parallax } from 'react-parallax'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';;
import './LandingPage.css';
import gamers from '../Images/gamers.jpg'

// CUSTOM COMPONENTS

function LandingPage() {

  return (
    <Box>
      <div>
        <Parallax className="image" strength={600} bgImage={gamers}>
          <div className='content'>
            <span className='text-content'>
              noob to master
            </span>
          </div>
        </Parallax>
      </div>
    </Box>
  );
}

export default LandingPage;
