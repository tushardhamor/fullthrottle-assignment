import React from 'react';

import './card-list.styles.css';

const CardList = props => {
  return (
    <div className='user_wrapper'>
      <div className='user_container' onClick={props.click}>
        <div className='user_image' label={props.real_name.substring(0,2)}></div>
        <div className='user_info'>
          <h2 className='user_name' title={props.real_name}>{props.real_name}</h2>
          <p className='user_timezone' title={props.timezone}>{props.timezone}</p>
        </div>
      </div>
    </div>
  );
};

export default CardList;
