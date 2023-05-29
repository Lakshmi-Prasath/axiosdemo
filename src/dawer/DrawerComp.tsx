import React, { useState } from 'react'
import { Drawer, List, ListItemButton, ListItem, ListItemText, IconButton } from '@mui/material'
import { Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
function DrawerComp() {
    const arrOptions = [
        { id: "1", name: "Login" }
    ]
    const [open, setOpen] = useState(false)
    return (
        < div >
            <Box>
                <IconButton onClick={() => { setOpen(true) }}>
                    <MenuIcon />
                </IconButton>
                <Drawer open={open} onClose={() => { setOpen(false) }}>
                    {arrOptions.map((name: any, index: any) => {
                        return (
                            <List>
                                <ListItemButton onClick={() => { setOpen(false) }}>
                                    <ListItemText primary={name.name} />
                                </ListItemButton>
                            </List>
                        )
                    })}
                </Drawer>
            </Box>
        </div >
    )
}

export default DrawerComp