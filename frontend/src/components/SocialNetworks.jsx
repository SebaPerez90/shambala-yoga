import { GrFacebookOption } from 'react-icons/gr';
import { GrInstagram } from 'react-icons/gr';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';

import '../styles/socialNetworks.css';

const SocialNetworks = () => {
  return (
    <ul className='networks-container'>
      <li className='list-item'>
        <a
          className='facebook'
          aria-label='social-network'
          href=''
          target='_blank'>
          <GrFacebookOption />
        </a>
      </li>
      <li className='list-item'>
        <a
          className='instagram'
          aria-label='social-network'
          href=''
          target='_blank'>
          <GrInstagram />
        </a>
      </li>
      <li className='list-item'>
        <a
          className='email'
          aria-label='social-network'
          href=''
          target='_blank'>
          <MdOutlineEmail />
        </a>
      </li>
      <li className='list-item'>
        <a
          className='whatsapp'
          aria-label='social-network'
          href=''
          target='_blank'>
          <BsWhatsapp />
        </a>
      </li>
    </ul>
  );
};

export default SocialNetworks;
