// @flow
import Link from 'next/link'
import styled from 'nice-ui/styled'

const Root = styled.div`
  position: fixed;
  top: 0;
  left: auto;
  right: 0;
  width: 100%;
  display: flex;
  z-index: 1100;
  flex-direction: column;
`

const ToolBar = styled.div`
  height: 56px;
  display: flex;
  position: relative;
  align-items: center;
`

const A = styled.a`
  padding: 6px 12px;
  margin-right: 10px;
`

const Header = () => (
  <Root>
    <ToolBar>
      <Link href="/">
        <A>Home</A>
      </Link>
      <Link href="/components">
        <A>Components</A>
      </Link>
      <Link href="/about">
        <A>About</A>
      </Link>
    </ToolBar>
  </Root>
)

export default Header
