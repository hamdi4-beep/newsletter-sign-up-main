function FormComponent() {
    return (
        <form action="#">
            <label htmlFor="email">Email address</label>
            <input type="text" placeholder='email@company.com' />
            <button className="cta-btn">Subscribe to monthly newsletter</button>
        </form>
    )
}

export default FormComponent