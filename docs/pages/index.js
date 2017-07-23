// @flow
import styled from 'styled-components'
import Markdown from 'react-markdown'
import { ThemeProvider } from 'nice-ui/Theme'
import { Button } from 'nice-ui'
import Layout from '../components/Layout'
import hello from '../mkdocs/hello.md'

const Container = styled.div`
  flex: 1 0 100%;
`

const Hero = styled.div`
  min-height: 100vh;
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  padding: '60px 30px';
  text-align: 'center';
`

const Index = () => (
  <ThemeProvider>
    <Layout>
      <Container>
        <Hero>
          <Content>
            <Markdown source={hello} />
            <Button>GET STARTED</Button>
          </Content>
        </Hero>
      </Container>
    </Layout>
  </ThemeProvider>
)

export default Index
