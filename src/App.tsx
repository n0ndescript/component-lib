import { useState } from 'react'
import { Button } from './components/button'

import './App.css'

function App() {
  return (
    <div className="App">
      <h1> My Component Library</h1>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="success">Success Button</Button>
      <Button variant="danger">Danger Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="danger" disabled={true}>Disabled Button</Button>
      <Button onClick={() => alert('Button Clicked!')}>
        Click Me
      </Button>
    </div>
  );
}
export default App;
