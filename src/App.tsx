import {
  Routes,
  Route
} from 'react-router-dom'

import SignUpContainer from './components/SignUpContainer'
import SuccessComponent from './components/SuccessComponent'
import './sass/index.scss'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignUpContainer />} />
        <Route path='/success' element={<SuccessComponent />} />
      </Routes>
    </div>
  )
}

export default App