import * as React from "react"
import {useNavigate} from 'react-router-dom'

function FormComponent() {
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const formElem = e.currentTarget as HTMLFormElement
        const formData = new FormData(formElem)

        navigate("/success", { state: {
            email: formData.get('email')
        } })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email address</label>

            <input
                type="email"
                placeholder='email@company.com'
                name='email'
                id='email'
            />
            
            <button className="cta-btn">Subscribe to monthly newsletter</button>
        </form>
    )
}

export default FormComponent