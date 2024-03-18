import { useLocation } from 'react-router-dom'

import successIconURL from '../assets/images/icon-success.svg'

function SuccessComponent() {
    const location = useLocation()
    const {email} = location.state

    return (
        <div className="success-container">
            <div className="success-icon">
                <img
                    src={successIconURL}
                    alt="large success icon"
                />
            </div>

            <h1>Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <span>{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
            <button className='cta-btn'>Dismiss message</button>
        </div>
    )
}

export default SuccessComponent