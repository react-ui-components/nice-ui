import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import buttonStyles from './Button.styled';

class Button extends Component {
  static propTypes = {
    containerElement: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    children: PropTypes.node,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    href: PropTypes.string
  };

  static defaultProps = {
    containerElement: 'button',
    type: 'button'
  };

  render() {
    const {
      containerElement,
      children,
      type,
      disabled,
      href,
      ...other
    } = this.props;

    const buttonProps = {
      ref: (node) => this.button = node,
      type: type,
      disabled: disabled,
      href: href,
      ...other
    };

    return React.createElement(href ? 'a' : containerElement, buttonProps, children);
  }
}

export default styled(Button)`${buttonStyles}`;
