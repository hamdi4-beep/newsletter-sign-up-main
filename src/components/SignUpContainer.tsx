import FormComponent from './FormComponent'
import ImageContainer from './ImageContainer'

import IconSuccessUrl from '../assets/images/icon-list.svg'

function SignUpContainer() {
    return (
        <div className='sign-up-container'>
            <ImageContainer />

            <div className="content">
                <h2>Stay updated!</h2>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>

                <ul>
                    <li>
                        <img
                            src={IconSuccessUrl}
                            alt=""
                        />

                        Product discovery and building what matters
                    </li>

                    <li>
                        <img
                            src={IconSuccessUrl}
                            alt=""
                        />

                        Measuring to ensure updates are a success
                    </li>

                    <li>
                        <img
                            src={IconSuccessUrl}
                            alt=""
                        />
                        
                        And much more!
                    </li>
                </ul>

                <FormComponent />
            </div>
        </div>
    )
}

export default SignUpContainer