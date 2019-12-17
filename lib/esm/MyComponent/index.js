import React from 'react';
import PropTypes from 'prop-types';
/** MyComponent description. See [Docs](https://github.com/jonamat/react-library-boilerplate). */
const MyComponent = ({ myProp = 'world' }) => {
    return React.createElement(React.Fragment, null,
        "Hello ",
        myProp,
        "!");
};
MyComponent.propTypes = {
    myProp: PropTypes.element,
};
export default MyComponent;
