import React, { useState } from 'react'
import { TextField, Button, Typography, Divider, IconButton, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
function LoginPage() {
    const [storeEmailId, setStoreEmailId] = useState('')
    const [storePassword, setStorePassword] = useState('')
    const [color, setColor] = useState("")
    const [emailMessage, setEmailMessage] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')

    const onChangeEmail = (data: any) => {
        setStoreEmailId(data)
    }

    const onChangePassword = (data: any) => {
        setStorePassword(data)
    }

    const emailValidation = (data: any) => {
        const regEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        if (regEx.test(data)) {
            setEmailMessage("email is valid");
            setColor('#028A0F')
        } else if (!regEx.test(data) && data != "") {
            setEmailMessage("*email is not valid");
            setColor("#FF0000")
        } else {
            setEmailMessage("");
        }
    }
    const passwordValidation = (data: any) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        if (passwordRegex.test(data)) {
            setPasswordMessage("password is valid")
            setColor('green')
        } else if (!passwordRegex.test(data) && data != "") {
            setPasswordMessage("Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*)")
            setColor("red")
        } else (
            setPasswordMessage("")
        )
    }

    return (
        <>
            <h1>LOGIN PAGE</h1>
            <Box
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                style={{ border: "1px black solid", width: "20rem", padding: "2rem", margin: "auto", textAlign: "center" }}
            >
                <div>
                    <TextField
                        variant='outlined'
                        fullWidth
                        label="Email"
                        inputProps={{ style: { fontSize: 15 } }}
                        InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
                        value={storeEmailId}
                        onChange={(e) => onChangeEmail(e.target.value)}
                    />
                    <p style={{ color: color }}>{emailMessage}</p>
                </div>
                <div>
                    <TextField
                        variant='outlined'
                        fullWidth
                        label="Password"
                        inputProps={{ style: { fontSize: 15 } }}
                        InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
                        onChange={(e) => { onChangePassword(e.target.value) }}
                        value={storePassword}
                    />
                    <p style={{ color: color }}>{passwordMessage}</p>
                </div>
                <Button
                    variant='contained'
                    onClick={() => {
                        emailValidation(storeEmailId)
                        passwordValidation(storePassword)
                    }}

                >
                    <Link
                        style={{ color: "inherit", textDecoration: "none" }}
                        to="/homescreenpage">
                        Submit
                    </Link>
                </Button>
                <Link to="/forgotpasswordpage" style={{ color: "black", }}>
                    <Typography sx={{ margin: "0.5rem auto", ":hover": { color: "primary.main", transitionDelay: "0.2s", transitionDuration: "0.2s" } }}>Forgot Password?</Typography>
                </Link>
                <Link to="/signuppage" style={{ color: "black", }}>
                    <Typography sx={{ margin: "0.5rem auto", ":hover": { color: "primary.main", transitionDelay: "0.2s", transitionDuration: "0.2s" } }}>Sign up?</Typography>
                </Link>
                <Divider>OR</Divider>
                <IconButton sx={{ color: "#ea4335" }}>
                    <a
                        target='_blank'
                        href="https://accounts.google.com/v3/signin/identifier?dsh=S1107826855%3A1685138512096070&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=Af_xneElAAbO6k4z_eDnJXw5knfp5vF1B7340eDaAEF8-yb0XI8MjEV4mq2I4FDV8G0uSR6gCvhO&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                        style={{ color: "inherit" }}
                    >
                        <GoogleIcon />
                    </a>
                </IconButton>
                <IconButton sx={{ color: "#4267B2" }}>
                    <a
                        target='_blank'
                        href="https://www.facebook.com/"
                        style={{ color: "inherit" }}
                    >
                        <FacebookIcon />
                    </a>
                </IconButton>
            </Box>

        </>
    )
}

export default LoginPage