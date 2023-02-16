import React from 'react'

const CustomButton = ({ children, ...otherProps }) => {
  return <button className='btn button me-2' {...otherProps}>{children}</button>;
};

export default CustomButton