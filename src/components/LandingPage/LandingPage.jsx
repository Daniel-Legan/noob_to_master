import React, { useState } from 'react';
// import { Parallax } from 'react-scroll-parallax';
import { Parallax } from 'react-parallax';
import './LandingPage.css';
import gamers from '../images/gamers.jpg'

// CUSTOM COMPONENTS

function LandingPage() {

  return (
    <>
          <div>
            <Parallax strength={800} bgImage={gamers}>
              <div className='content'>
                <div className='text-content'>
                  Normal Parallax
                </div>
              </div>
            </Parallax>
          </div>
    </>
  );
}

export default LandingPage;
