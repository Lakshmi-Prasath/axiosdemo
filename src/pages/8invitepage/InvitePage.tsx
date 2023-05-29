import React, { useState } from 'react'
import { TextField, Button, Grid, Typography, Divider, IconButton, Box, Select, MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'

function InvitePage() {
    return (
        <>
            <h1>INVITE USER</h1>
            <Box
                sx={{ border: "1px solid black", padding: "3rem 4rem", width: "fit-content", margin: "auto" }}
            >
                <h2 style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <u>Invite members to family's finance</u>
                </h2>
                <Grid container spacing={2}>
                    <Grid
                        xs={12}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "left", gap: "1rem" }}>
                                <TextField
                                    placeholder='email id/ user name/ mobile no.'
                                />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "left", gap: "1rem" }}>
                                <Select
                                    fullWidth
                                >
                                    <MenuItem>Editor</MenuItem>
                                    <MenuItem>Viewer</MenuItem>
                                </Select>
                            </div>
                            <Button variant='contained' sx={{ margin: "1rem auto 0px auto " }}>Send Invite</Button>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default InvitePage