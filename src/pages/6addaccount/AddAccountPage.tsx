import React, { useState } from 'react'
import { TextField, Button, Grid, Typography, Divider, IconButton, Box, Select, MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'
function AddAccountPage() {
    return (
        <>
            <h1>ADD ACCOUNT</h1>
            <Box
                sx={{ border: "1px solid black", padding: "3rem 4rem", width: "fit-content", margin: "auto" }}
            >
                <h2 style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <u>Add Account</u>
                </h2>
                <Grid container spacing={2}>
                    <Grid
                        xs={12}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "left", gap: "1rem" }}>
                                <Typography>Account Name :</Typography>
                                <TextField />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "left", gap: "1rem" }}>
                                <Typography>Balance :</Typography>
                                <TextField />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "left", gap: "1rem" }}>
                                <Typography>Currency: </Typography>
                                <Select
                                    fullWidth
                                >
                                    <MenuItem>INR</MenuItem>
                                    <MenuItem>USD</MenuItem>
                                    <MenuItem>EUR</MenuItem>
                                </Select>
                            </div>
                            <Button variant='contained' sx={{ margin: "1rem auto 0px auto " }}>Confirm</Button>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default AddAccountPage