import React from 'react';

const Caraousal = ({ children: slides }) => {
  return (
    <div className='overflow-hidden relative'>
      <div className='flex'>
        {slides}
      </div>
    </div>
  );
};

export default Caraousal;
