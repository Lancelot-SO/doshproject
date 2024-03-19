import React from 'react'

const Login = () => {
    return (
        <div>
            <div>
                <span>Login to your </span>
                <h2>Dosh Account</h2>
                <div></div>
                <div>
                    <label>Login with</label>
                    <div>
                        <div>
                            <input type='radio' name='email' />
                            Email
                        </div>
                        <div>
                            <input type='radio' name='email' />
                            Phone
                        </div>
                        <div>
                            <input type='radio' name='email' />
                            Dosh No.
                        </div>
                        <div>
                            <input type='radio' name='email' />
                            Username
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
