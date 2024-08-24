import { useState } from "react"

import Content from "./components/Content"
import Header from "./components/Header"

function App() {
  const [tab, setTab] = useState(1)

  return (
    <>
      <Header setTab={setTab} tab={tab} />
      <Content number={tab}/>
    </>
  )
}

export default App
