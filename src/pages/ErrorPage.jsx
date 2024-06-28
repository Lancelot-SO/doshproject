import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className='main__error'>
            <div className='error-content'>
                <h1>Please go back to the </h1>
                <Link to="/" className='error__link'>home page</Link>
            </div>
        </div>
    )
}

export default ErrorPage
