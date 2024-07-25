import './App.css'
import Header from './components/Header'
import { BrowserRouter,Router,Route } from 'react-router-dom'

function App() {
  

  return (
    <>
      <div className='w-full'>
        <BrowserRouter>
          <Header/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
