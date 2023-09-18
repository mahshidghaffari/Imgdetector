// import "./topbar.css"
// import {Search} from "@material-ui/icons"
// import { NavLink as Link } from "react-router-dom";
// import Switch from '@mui/material/Switch';
//
// // @ts-ignore
// import {ReactComponent as Detect} from "../../Asset/detect.svg"
// import {useState} from "react";
// import {Grid} from "@mui/material";
//

// @ts-ignore
// export default function Topbar({onThemeToggle}){
//
//     const [theme,setTheme] = useState("dark")
//     const toggleTheme = () =>{
//         setTheme((curr) => (curr === "light" ? "dark" : "light") )
//         onThemeToggle(theme)
//     }
//
//     return(
//         <Grid container spacing={4} >
//             <Grid item xs={3} className="topbarLeft">
//                 <span className="logo">Image <Detect to="/detect" className="svgLink"></Detect></span>
//             </Grid>
//             <Grid item xs={4} className="topbarCenter">
//                 <div className="searchBar">
//                     <Search className="searchIcon" onChange={toggleTheme}/>
//                     <input type="text" className="searchInput" placeholder="seach"/>
//                 </div>
//             </Grid>
//             <Grid item container xs={5} className="topbarRight">
//                 <Switch checked={theme==="dark"} onChange={toggleTheme}></Switch>
//                 <Link to="/" className="topbarLink">Home</Link>
//                 <Link to="/detect"><Detect to="/detect" className="svgLink"></Detect>
//                 </Link>
//                 <Link to="/about" className="topbarLink">About</Link>
//                 <Link to="/contact" className="topbarLink">Contact</Link>
//             </Grid>
//         </Grid>
//     )
// }

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {Person} from "@material-ui/icons";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useState} from "react";
interface Props {
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home","Detect","About", "Contact"];

export default function Topbar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <Person />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                    >
                        MUI
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: "#fff" }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth
                        }
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}
