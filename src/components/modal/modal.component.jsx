import React from 'react';

import './modal.styles.css';

const Modal = props => {
  let activity_details = props.member;
  console.log(activity_details);
  let activity = null;
  if (activity_details != null) {
    activity = (
      <div className="activity_wrapper">
        {activity_details.map((member, id) => {
          return (
            <div className='activity_container' key={id}>
              <p>Start Time : {member.start_time}</p>
              <p>End Time : {member.end_time}</p>
            </div>
          );
        })}
      </div>
    );
  }
if (props.show) {
  return (
    <div className='popup_wrapper'>
      <div className='popup_container'>
        <div className='popup'>
          <span className="icon_close" onClick={props.closed}>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12">
              <path fill="#999999" fill-rule="evenodd" d="M12 0a6.579 6.579 0 0 0-2 0L6 5 2 0a6.579 6.579 0 0 0-2 0 6.57 6.57 0 0 0 0 2l5 4-5 4a6.57 6.57 0 0 0 0 2 6.579 6.579 0 0 0 2 0l4-5 4 5a6.579 6.579 0 0 0 2 0 6.57 6.57 0 0 0 0-2L7 6l5-4c.102-.624.102-.286 0-1"/>
            </svg>
          </span>
          <p className="activity_label">Active Time for {props.user_name}</p>
          {activity}
        </div>
      </div>
    </div>
  );
}else {
  return('');
}
};

export default Modal;
