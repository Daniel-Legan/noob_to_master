import React from 'react';
import { Parallax } from 'react-parallax';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import gamers from '../Images/gamers.jpg';
import grandma from '../Images/grandma.jpeg';
import boy from '../Images/boy.jpeg';
import gamer from '../Images/gamer.jpeg';

// CUSTOM COMPONENTS

function LandingPage() {

  return (
    <Box>
      <Parallax className="image" strength={600} bgImage={gamers}>
        <div className='content'>
          <span className='text-content'>
            noob to master
          </span>
        </div>
      </Parallax>
      <Card id="landingCard" sx={{ margin: "60px 20px", padding: "20px", boxShadow: 0, display: "flex" }}>
        <Box whiteSpace="nowrap" marginRight="20px">
          <Typography variant='h5'>
            What is noob to master?
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ textIndent: "30px" }}>
            With <b><i>noob to master</i></b>, local gamers connect with one another over a common game. <i>Noobs</i> find local masters to a game they are
            struggling with, while <i>masters</i> accept or deny requests. Once the master accepts the request, users exchange contact
            information and establish a real-world connection. With <b><i>noob to master</i></b>, reach out and level up your game! Or help your fellow
            gamer see their true potential!
          </Typography>
        </Box>
      </Card>
      <Box display="flex" justifyContent="space-evenly" marginBottom="100px">
        <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={boy}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                JimmyBoy11
              </Typography>
              <Typography variant="body2" color="text.secondary">
                "My mom let me visit this guy downtown. He had lots of candy. We played Fortnite for awhile and I got real good. Now I can play with my friends and get #1!"
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={gamer}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                YYLadderStall360NoScoper
              </Typography>
              <Typography variant="body2" color="text.secondary">
                "I like to help my fellow community by offering assistance to gamers. It is rewarding to see others go from noob to master in such a short period."
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={grandma}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                grandma_gertrude_1934
              </Typography>
              <Typography variant="body2" color="text.secondary">
                "My grandson told me about this app and I met a handsome fella. He showed my how to press the buttons and now I have a 11.67 K/D in Overwatch. Thanks noob to master!"
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
}

export default LandingPage;
