import { MainContent } from './components/MainContent'
import { NavBar } from './components/NavBar'
import { Notices } from './components/Notices'
import { Layout } from './container/Layout'

function App() {
  return (
    <Layout>
      <NavBar />
      <MainContent />
      <Notices />
    </Layout>
  )
}

export default App
