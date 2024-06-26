import { Header } from "./components/Header"
import { Content } from "./components/Content"
import { Projects} from "./components/Project"
import { Opensourceprogs } from "./components/OpenSourceWork"
import { Skills }  from "./components/Skill"
import { ContactMe } from "./components/ContactMe"
import './App.css'
function App() {
  return (
    <>
    <Header/>
    <Content/>
    <Projects/>
    <Opensourceprogs/>
    <Skills/>
    <ContactMe/>
    </>
  )
}

export default App
