import FormComponent from './FormComponent'
import IllustrationImage from './IllustrationImage'
import ListItems from './ListItems'

function SignUpContainer() {
    return (
        <div className='sign-up-container'>
            <IllustrationImage />

            <div className="content-container">
                <div className="content">
                    <h2>Stay updated!</h2>
                    <p>Join 60,000+ product managers receiving monthly updates on:</p>
                    <ListItems />
                    <FormComponent />
                </div>
            </div>
        </div>
    )
}

export default SignUpContainer