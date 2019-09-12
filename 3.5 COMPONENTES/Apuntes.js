import React from 'react';

class Popup extends React.Component {
  render() {
    return (
      <div className={`alert alert-${this.props.styling}`} role="alert">
        {this.props.children}
      </div>
    );
  }
}

ReactDOM.render(
  <Popup styling="info">
    <h1 className="horizontal-center">Welcome</h1>
    <p>Thank you for visiting our webpage!</p>
    <p>We hope you enjoy our new shiny site!</p>
  </Popup>,
  document.getElementById('react-root')
);

----------

  Button.defaultProps = {
  styling: 'primary', // from Bootstrap classes: primary, secondary, success, info, warning, danger, link
    label: 'Aceptar',
};

--------

import React from 'react';
import PropTypes from 'prop-types';
// ...

--------

import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  // class body
}

const stylingValues = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
  'link',
];
Button.propTypes = {
  label: PropTypes.string,
  styling: PropTypes.oneOf(stylingValues).isRequired // obligamos a que tenga valor
};

// Y también definimos valores por defecto
Button.defaultProps = {
  // no incluímos "styling" porque con propTypes y "isRequired" obligamos a que se pase un valor
  label: 'Aceptar'
};

---------

import React from 'react';
import PropTypes from 'prop-types';

class VerticalCenter extends React.Component {
  render() {
    return <div className="vertical-center">{this.props.children}</div>;
  }
}

VerticalCenter.propTypes = {
  children: PropTypes.element.isRequired
};