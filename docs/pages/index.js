// @flow
import styled from 'styled-components'
import Markdown from 'react-markdown'
import Layout from '../components/Layout'
import hello from '../mkdocs/hello.md'

const Root = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: stretch;
`

const Container = styled.div`
  flex: '1 0 100%';
`

const Hero = styled.div`
  min-height: '100vh';
  flex: '0 0 auto';
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
`

const Content = styled.div`
  padding: '60px 30px';
  text-align: 'center';
`

const Index = () => (
  <Layout>
    <Root>
      <Container>
        <Hero>
          <Content>
            <Markdown source={hello} />
          </Content>
        </Hero>
      </Container>
    </Root>
  </Layout>
)

export default Index
