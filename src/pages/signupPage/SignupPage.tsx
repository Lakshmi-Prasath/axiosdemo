import React, { useState } from 'react'
import { TextField, Button, Typography, Divider, IconButton, Box } from '@mui/material'
import { Link } from 'react-router-dom'
function SignupPage() {
    const [storeName, setStoreName] = useState('')
    const [storeEmail, setStoreEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const onChangeName = (data: any) => {
        setStoreName(data)
    }
    const onChangeEmail = (data: any) => {
        setStoreEmail(data)
    }
    const onChangePassword = (data: any) => {
        setPassword(data)
    }
    const onChangeConfirmPassword = (data: any) => {
        setConfirmPassword(data)
    }
    return (
        <div>
            <h1>Signup Page</h1>
            <div style={{ border: "1px black solid", width: "20rem", padding: "2rem", margin: "auto", textAlign: "center" }}>
                <Box
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                >
                    <TextField
                        variant='outlined'
                        label="Name"
                        fullWidth
                        onChange={(e) => { onChangeName(e.target.value) }}
                        value={storeName}
                    />
                    <TextField
                        variant='outlined'
                        label="Email"
                        fullWidth
                        onChange={(e) => { onChangeEmail(e.target.value) }}
                        value={storeEmail}
                    />
                    <TextField
                        variant='outlined'
                        label="Password"
                        fullWidth
                        onChange={(e) => { onChangePassword(e.target.value) }}
                        value={password}
                    />
                    <TextField
                        variant='outlined'
                        label="Confirm Password"
                        fullWidth
                        onChange={(e) => { onChangeConfirmPassword(e.target.value) }}
                        value={confirmPassword}
                    />
                    <Button
                        variant='contained'
                    >
                        <Link to='/otppage' style={{ color: "inherit", textDecoration: "none" }}>
                            Sign Up
                        </Link>
                    </Button>
                </Box>
            </div>
        </div>
    )
}

export default SignupPage