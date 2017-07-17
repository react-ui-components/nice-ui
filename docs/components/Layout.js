// @flow
import styled from 'styled-components'
import Header from './Header'

const Root = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: stretch;
`

const Layout = (props) => (
  <Root>
    <Header />
    {props.children}
  </Root>
)

export default Layout
