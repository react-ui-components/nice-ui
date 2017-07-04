// @flow
import { css } from 'styled-components'

const buttonStyles = css `
  color: ${props => props.theme.primary[0]};
  background-color: ${props => props.theme.primary[5]};
  border: 2px solid ${props => props.theme.primary[5]};
  display: inline-block;
  box-sizing: border-box;
  min-width: 80px;
  text-align: center;
  margin: 4em 0;
  padding: 0.25em 2em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 14px;

  &:active {
    background-color: ${props => props.theme.primary[6]};
    border-color: ${props => props.theme.primary[6]};
    color: ${props => props.theme.primary[0]};
  }
`

export default buttonStyles
