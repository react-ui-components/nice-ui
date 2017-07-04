// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import defaultTheme from './defaultTheme'

class NiceUIThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    theme: PropTypes.object,
  };

  static defaultProps = {
    theme: defaultTheme,
  };

  render() {
    const { children, theme, ...other } = this.props

    return <ThemeProvider theme={theme} {...other}>{children}</ThemeProvider>
  }
}

export default NiceUIThemeProvider
