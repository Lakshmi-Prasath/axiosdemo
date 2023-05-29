import React, { useState } from 'react'
import { TextField, Button, Typography, Divider, IconButton, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

function ForgotPasswordPage() {
    const [storeEmailId, setStoreEmailId] = useState('')
    const [color, setColor] = useState("")
    const [emailMessage, setEmailMessage] = useState('')

    const onChangeEmail = (data: any) => {
        setStoreEmailId(data)
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
    return (
        <div>
            <h1>FORGOT PASSWORD</h1>
            <div style={{ border: "1px black solid", width: "20rem", padding: "2rem", margin: "auto", textAlign: "center" }}>
                <Box
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
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
                    <Button
                        variant='contained'
                        onClick={() => {
                            emailValidation(storeEmailId)
                        }}

                    >
                        <Link
                            style={{ color: "inherit", textDecoration: "none" }}
                            to="/otppage"
                        >
                            Confirm
                        </Link>
                    </Button>
                </Box>
            </div>
        </div>
    )
}

export default ForgotPasswordPage