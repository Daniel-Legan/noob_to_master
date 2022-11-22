import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>Noob-to-Master was built with the following technologies/languages:</p>
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
          <li>Git-Hub</li>
          <li>Axios</li>
          <li>SQL</li>
          <li>Postgres</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
