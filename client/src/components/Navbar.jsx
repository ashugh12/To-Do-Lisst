import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";


const Navbar = ()=>{
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        <Link to="/api/todos">My Todo</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}


export default Navbar;

