import './App.scss';


// Bootstrap Container
import { Container } from 'react-bootstrap';

// the routes
import { useRoutes } from 'hookrouter';
import routes from './router'

function App() {

  const routesResult = useRoutes(routes);

  return (
    <Container fluid className="App">
      { routesResult }
    </Container>
  
  );
}
export default App;