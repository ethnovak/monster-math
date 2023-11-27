import { FC } from 'react';
import { Link } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import monster from './svg/monster.svg';

const GamePage: FC = () => {
  return (
    <div>
      <div className='title-bar'>
        <img src={monster} className='title-monster' alt='Monster Math' />
        <span className='titlebar-name'>Monster Math</span>
        <Link target='_blank' rel='noopener' href='https://github.com/ethnovak/monster-math' className='github-button' underline='none'>
          <FontAwesomeIcon className='github-icon' icon={faGithub} size='xl' /> View on GitHub
        </Link>
      </div>
    </div>
  )
};

export default GamePage;