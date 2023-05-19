import React from 'react';
import Button from './Button';
import '../Styles/Header.css';

function Header() {
  return (
    <>
      <div className='container'>
        <header>
          <div className='button-section'>
            <Button text={'Contact Us'} textColor={'black'} color={'white'} />
            <Button text={'SignUp'} textColor={'black'} color={'orange'} />
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
