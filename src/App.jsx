import { MainContent } from './components/MainContent'
import { NavBar } from './components/NavBar'
import { Layout } from './container/Layout'

function App() {
  return (
    <Layout>
      <NavBar />
      <MainContent />
      <aside />
    </Layout>
  )
}

export default App
