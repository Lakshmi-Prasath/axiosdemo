import { Button, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'

function DevScatterUi() {
    return (
        <div>
            <h1> DevScatter UI </h1>
            <div style={{ textAlign: "center" }}>
                <Stack spacing={2}>
                    <Link to="/axiospage">AXIOS</Link>
                    <Link to="/loginpage">1. Login Screen</Link>
                    <Link to="/signuppage">2. Sign up</Link>
                    <Link to="/forgotpasswordpage">3. Forgot Password</Link>
                    <Link to="/otppage">4. OTP Confirmation Screen</Link>
                    <Link to="/resetpasswordpage">5. Reset Password</Link>
                    <Link to="/addaccountpage">6. Add Accounts</Link>
                    <Link to="/homescreenpage">7. Home Screen</Link>
                    <Link to="/invitepage">8.Invite Page</Link>
                    <Link to="   ">10. Add Transaction</Link>
                </Stack>
            </div>
        </div>
    )
}

export default DevScatterUi