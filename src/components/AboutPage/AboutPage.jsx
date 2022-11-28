import React from 'react';
import Box from '@mui/material/Box';
import linkedin from '../Images/linkedin.png';
import github from '../Images/github.png';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <Box className="container">
      <Box display="flex">
        <Box>
          <p><b>noob to master</b> was built with the following technologies/languages:</p>
          <ul>
            <li>Google Maps JavaScript API</li>
            <li>Google Places API</li>
            <li>JavaScript</li>
            <li>React-Saga</li>
            <li>React-Redux</li>
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>Material-UI</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Axios</li>
            <li>SQL</li>
            <li>Postgres</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </Box>
        <Box display="flex" margin="0 auto">
          <Box>
            <img src={linkedin} />
            <Box textAlign="center">
              <a href='https://www.linkedin.com/in/daniel-legan-365120241/'>LinkedIn</a>
            </Box>
          </Box>
          <Box>
            <img src={github} />
            <Box textAlign="center">
              <a href='https://github.com/Daniel-Legan'>GitHub</a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutPage;
