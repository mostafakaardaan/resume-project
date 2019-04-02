import React from 'react';
import PropTypes from 'prop-types';

import './Background.scss';

const Background = (props, context) => {
 
  const { theme: { colorPrimary } } = context;
  return (
    <div className="displacement" style={{ color: colorPrimary }} >
      <div id="stellar1" />
      <div id="stellar2" />
      <div id="stellar3" />
    </div>
  );
};

Background.contextTypes = {
  theme: PropTypes.any
};

export default Background;
