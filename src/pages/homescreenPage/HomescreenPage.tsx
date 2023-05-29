import React, { useState } from 'react'
import { TextField, Button, Typography, Divider, IconButton, Box, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
function HomescreenPage() {
    const [addGrid, setAddGrid] = useState([
        { id: "1", name: "HDFC", balance: "500" },
        { id: "2", name: "AXIS", balance: "50000" },
        { id: "3", name: "Wallet", balance: "300" },
    ])
    return (
        <>
            <h1>HOME SCREEN</h1>

            <Box
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                style={{ border: "1px black solid", width: "30rem", margin: "auto" }}
            >
                <div style={{ padding: "2rem" }}>
                    <div style={{ width: "fit-content", marginLeft: "auto" }}>
                        <IconButton>
                            <AccountCircleIcon />
                        </IconButton>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "1rem auto", gap: "1rem" }}>
                        <Typography>Deva's Finance :</Typography>

                        <TextField
                            style={{ display: "contents" }}
                            value={50800}
                        />
                    </div>
                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        style={{ border: "1px black solid", width: "auto", padding: "2rem", margin: "auto" }}
                    >
                        <Grid container spacing={2}>
                            {addGrid.map((element, index) => (
                                <Grid item xs={6}>
                                    <Box
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                                        }}
                                        style={{ border: "1px black solid", width: "auto", padding: "2rem", margin: "auto" }}
                                    >
                                        <div style={{ display: "flex", alignItems: "left", flexDirection: "column", gap: "1rem" }}>
                                            <Typography>{element.name}</Typography>
                                            <TextField
                                                value={element.balance}
                                                style={{ display: "contents" }}
                                            />
                                        </div>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>

                    </Box>
                    <div style={{ margin: "1rem auto" }}>
                        <Typography >Family's Finance:</Typography>
                        <Box
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            style={{ border: "1px black solid", width: "auto", padding: "2rem", margin: "1rem auto" }}
                        >
                            <div style={{ width: "fit-content", margin: "auto" }}>
                                <IconButton>
                                    <AddCircleIcon color='secondary' />
                                </IconButton>
                            </div>
                        </Box>
                    </div>
                </div>
                <div>
                    <Divider>
                        <IconButton>
                            <AddCircleIcon color='secondary' />
                        </IconButton>
                    </Divider>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <IconButton>4 Dot</IconButton>
                    <IconButton><p>Page 18 (statistics)</p></IconButton>
                </div>
            </Box >
        </>
    )
}

export default HomescreenPage