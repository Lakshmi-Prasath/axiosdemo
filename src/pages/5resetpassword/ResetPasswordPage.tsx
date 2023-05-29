import React, { useState } from 'react'
import { TextField, Button, Grid, Typography, Divider, IconButton, Box } from '@mui/material'
import { Link } from 'react-router-dom'
function ResetPasswordPage() {
    return (
        <div>
            <h1>Reset Password</h1>
            <Box
                sx={{ border: "1px solid black", padding: "3rem 4rem", width: "fit-content", margin: "auto" }}
            >
                <Grid container spacing={2}>
                    <Grid
                        xs={12}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "left", gap: "1rem" }}>
                                <Typography>New Password :</Typography>
                                <TextField />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "left", gap: "1rem" }}>
                                <Typography>Confirm New Password :</Typography>
                                <TextField />
                            </div>
                            <Button variant='contained' sx={{ margin: "1rem auto 0px auto " }}>Confirm</Button>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div >
    )
}

export default ResetPasswordPage