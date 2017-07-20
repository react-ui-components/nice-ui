// @flow
import Markdown from 'react-markdown'
import Layout from '../../components/Layout'
import docIndex from '../../mkdocs/components/index.md'

export default () => (
  <Layout>
    <Markdown source={docIndex} />
  </Layout>
)
