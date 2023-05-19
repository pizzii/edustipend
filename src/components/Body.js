import React from 'react';
import Button from './Button';
import '../Styles/Body.css';
import { ImPlus } from 'react-icons/im';

const Body = () => {
  return (
    <>
      <div className='container'>
        <div className='body-section'>
          <div className='left-side'>
            <h1>Make your party fun!</h1>
            <p className='para1'>Create your own custom playlist today.</p>
            <Button
              text={'Create playlist'}
              textColor={'black'}
              color={'orange'}
            />
          </div>
          <div className='right-side'>
            <div>
              <h3>Trending songs</h3>
              <ul>
                <li>
                  Unavailable by Davido <ImPlus className='plus' />
                </li>
                <li>
                  Unavailable by Davido <ImPlus className='plus' />
                </li>
                <li>
                  Unavailable by Davido <ImPlus className='plus' />
                </li>
                <li>
                  Unavailable by Davido <ImPlus className='plus' />
                </li>
                <li>
                  Unavailable by Davido <ImPlus className='plus' />
                </li>
                <li>
                  Unavailable by Davido
                  <ImPlus className='plus' />
                </li>
              </ul>
              <div className='btn-area'>
                <Button
                  text={'View more'}
                  textColor={'black'}
                  color={'orange'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
