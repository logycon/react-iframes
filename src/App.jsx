import React, { useState } from 'react'
import { Tab } from 'semantic-ui-react'
import './App.css'

const panes = [
  {
    menuItem: 'Tab 1 - Iframe App 1',
    render: () => (
      <Tab.Pane>
        <iframe
          src="http://localhost:3001"
          title="Iframe App 1"
          style={{ width: '100%', height: '800px', border: 'none' }}
        />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Tab 2 - Iframe App 2',
    render: () => (
      <Tab.Pane>
        <iframe
          src="http://localhost:3002"
          title="Iframe App 2"
          style={{ width: '100%', height: '800px', border: 'none' }}
        />
      </Tab.Pane>
    ),
  },
]

function App() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="App">
      <div className="header">
        <h1>Tab Iframe Investigation</h1>
        <p>
          Investigating why tab switching doesn&apos;t trigger &quot;Leave Site&quot; prompt in
          Chrome
        </p>
      </div>
      <Tab
        panes={panes}
        activeIndex={activeIndex}
        onTabChange={(e, { activeIndex }) => setActiveIndex(activeIndex)}
      />
    </div>
  )
}

export default App

