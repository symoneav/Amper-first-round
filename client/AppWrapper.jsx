import React from 'react';
import PropTypes from 'prop-types';
import SideBar from './Sidebar';



const AppWrapper = ({ children }) => {
  return (
    <div className="flex">
       <SideBar/>
        <div className="main-app f-grow">
            <div className="top-bar flex f-al-center f-just-end">
              <div>Demo</div>
            </div>
            {children}
        </div>
    </div>
  );
};

AppWrapper.defaultProps = {};
AppWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(Object),
        PropTypes.shape({}),
    ]).isRequired,
};

export default AppWrapper;
