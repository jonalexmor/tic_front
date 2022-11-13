import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import Login from "./components/login/login";
import Menu from "./components/navbar/navbar";
import AppRoutes from "./components/router/router"
import Footer from "./components/footer/footer";


function App() {
  return (
    <div className="App">
      <Menu />
      <Container>
        <AppRoutes />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
