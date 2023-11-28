import React from 'react';
import { useLocation } from 'react-router-dom';

const NotePage = ({ note }) => {
  const location = useLocation();
//   console.log(location.state.note)

    return (
        <div className="App-Container">
      <h2>Note Details</h2>
      <p className='Paragraph'>{location.state.note}</p>
    </div>
  );
};

export default NotePage;
