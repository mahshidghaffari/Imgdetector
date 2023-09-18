import Home from "./pages/Home/Home";
import {createContext, useState} from "react";
import "./app.css"
import Topbar from "./components/Topbar/Topbar";
import {Grid} from "@mui/material";
export const ThemeContext = createContext("light")

function App() {
    const [theme,setTheme] = useState("dark")
    const toggleTheme = (theme: string) =>{
        setTheme(theme)
    }

    return (
      <ThemeContext.Provider value={theme}>
        <Grid container spacing={0} className="App" id={theme}>
            <Grid item xs={12} className="topbarContainer">
                {/*<Topbar onThemeToggle={toggleTheme} />*/}
                <Topbar />
            </Grid>
            <Grid item xs={12} className="contentHeight">
                <Home/>
            </Grid>
        </Grid>
      </ThemeContext.Provider>

    );
}

export default App;

