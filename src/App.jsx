import Header from "./Components/Header"
import { Core_Concept } from "./Data"
import CoreConcept from "./Components/CoreConcept"
import TabButton from "./Components/TabButton"
import { DETAILS } from "./Data"
import { useState } from "react"
function App() {
  const [selectTopic, setSelectedTopic] = useState()
  function HandleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  let tabContent = <p>Please click on a button</p>
  if (selectTopic) {
    tabContent = (
      <div id="content-details">
        <p>{DETAILS[selectTopic].history}</p>
        <p>{DETAILS[selectTopic].dom}</p>
        <pre>
          <code>{DETAILS[selectTopic].code}</code>
          </pre>
      </div>
    )
  }
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {Core_Concept.map((conceptItems) => (
              <CoreConcept key={conceptItems.title} {...conceptItems} />
            ))}
          </ul>
        </section>
        <section id="details">
          <h2>Short Details</h2>
          <menu>
            <TabButton isSelect={selectTopic === 'react'} onSelect={() => HandleSelect("react")}>
              React Js</TabButton>
            <TabButton isSelect={selectTopic === 'angular'} onSelect={() => HandleSelect("angular")}>
              Angular Js</TabButton>
            <TabButton isSelect={selectTopic === 'vue'} onSelect={() => HandleSelect("vue")}>
              Vue Js</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>


  )
}

export default App
