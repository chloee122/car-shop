import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container, CssBaseline } from "@mui/material";
import "./App.css";
import Carlist from "./components/Carlist";

function App() {
  return (
    <Container maxWidth="xl">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">CarShop</Typography>
        </Toolbar>
      </AppBar>
      <Carlist />
      <CssBaseline />
    </Container>
  );
}

export default App;
