import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"
import { useSelector, useDispatch } from 'react-redux'


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={() => {
          
        }}/>


        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <Counter />
        

      </header>
    </div>
  )
}

export default App
