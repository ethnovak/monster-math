import { Button, Link } from '@mui/material';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import monster from './svg/monster.svg';

const HomePage: FC = () => {
  return (
    <div>
      <div className='github-ref'>
        <Link target='_blank' rel='noopener' href='https://github.com/ethnovak/monster-math' className='github-button' underline='none'>
          <FontAwesomeIcon className='github-icon' icon={faGithub} size='xl' /> View on GitHub
        </Link>
      </div>
      <div className='home-container'>
        <img src={monster} className='home-monster' alt='Monster Math' />
        <p className='home-title'>Monster Math</p>
        <Button className='start-button' disableElevation variant='contained'>Start Game</Button>
      </div>
    </div>
  );
};

export default HomePage;
