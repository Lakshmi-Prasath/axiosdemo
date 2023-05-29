import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Divider, IconButton, Box, Stack } from '@mui/material'
import { Link } from 'react-router-dom'

function OtpPage() {

    const [seconds, setSeconds] = useState(30)
    const [otpField, setOtpField] = useState([
        { id: "1", otp: "1" },
        { id: "2", otp: "2" },
        { id: "3", otp: "3" },
        { id: "4", otp: "4" },
    ])






    return (
        <div>
            <h1>One Time Password</h1>
            <Box
                style={{ border: "1px black solid", width: "20rem", padding: "2rem", margin: "auto", textAlign: "center" }}
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}>

                <Typography sx={{ textAlign: "left" }}>OTP</Typography>
                <Stack
                    direction="row" spacing={2}
                    component="form"
                    sx={{
                        width: '25ch',
                        margin: "auto"
                    }}
                >

                    {otpField.map((element, index) => (
                        <TextField
                            value={element.otp}
                        />
                    ))}

                </Stack>
                <Typography>
                    "Please check your email for the one time password"
                </Typography>
                <Typography>
                    "Resend otp in"  {seconds}
                </Typography>
                <Button
                    variant='contained'

                >
                    <Link to='/loginpage' style={{ color: "inherit", textDecoration: "none" }}>
                        Confirm
                    </Link>
                </Button>
            </Box>
        </div>
    )
}

export default OtpPage