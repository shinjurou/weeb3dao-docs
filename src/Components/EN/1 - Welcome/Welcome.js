import React from 'react'
import Typography from '@mui/material/Typography';

import cover from '../../../Imgs/cover.png'

export default function Welcome() {
      return (
        <div className='welcome'>
         <img src={cover} alt="cover" />
        <div className='m-10'>
          <Typography variant="h1" color="inherit" component="h1" mb={2}>
            Welcome!
          </Typography>
          <Typography variant="h3" color="inherit" component="h3" mb={2}>
          <span className='orange'>Firstly, welcome to the Anime NFT Community!<br/> We are so excited to have you here with us!</span>
          </Typography>
          <Typography variant="body1" color="inherit" component="div" mb={2}>          
          This website was created by <a href='https://twitter.com/weeb3dao' target="_blank" rel="noreferrer">weeb3dao</a> (with the support of <a href='https://twitter.com/AnifamNft' target="_blank" rel="noreferrer" rel="noreferrer">Anifam</a> and <a href='https://twitter.com/uwucrewnft' target="_blank">uwucrew</a>) to be used as an information booklet to help onboarding new anime artists integrate into to the current Anime NFT Community.
          </Typography>
          <Typography variant="body1" color="inherit" component="div" mb={2}>          
          The first NFT was created on May 2014, and while NFT has been around for many years now. Anime NFT artists only started to join at the start of 2021. This means that those of you who are joining now are <span className='green'>very early to the new way of integrating NFT to the anime art world.</span>
          </Typography>
          <Typography variant="body1" color="inherit" component="div">          
          In recent months, the Anime NFT Community has been growing continuously, but there is a lack of information. This led to new artists having to ask others continuously as they have no guidance. There is also a discrepancy too as each person will have different experiences and different answer to each question you ask.
          </Typography>
        </div>
        </div>
      );
  }
