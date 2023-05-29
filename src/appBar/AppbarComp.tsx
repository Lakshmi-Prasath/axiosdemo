import { Button, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import DrawerComp from '../dawer/DrawerComp';
function AppbarComp() {

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton
                            size='large'
                            edge="start"
                            color='inherit'
                            aria-label='menu'
                            sx={{ mr: 3 }}
                        >
                            <DrawerComp />
                        </IconButton>
                        <Typography
                            variant='h6'
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                                DEV SCATTER
                            </Link>
                        </Typography>

                        <Button color='inherit'>
                            <Link to="/loginpage" style={{ textDecoration: "none", color: "inherit" }}>
                                Login
                            </Link>
                        </Button>


                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default AppbarComp