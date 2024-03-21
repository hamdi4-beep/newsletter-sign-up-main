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
          <Route path='/newsletter-sign-up-main' element={<SignUpContainer />} />
          <Route path='/newsletter-sign-up-main/success' element={<SuccessComponent />} />
        </Routes>
    </div>
  )
}

export default App