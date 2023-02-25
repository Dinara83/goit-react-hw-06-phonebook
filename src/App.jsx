import NavBar from 'NavBar/NavBar';
import UserRoutes from 'UserRoutes';
import { Provider } from 'react-redux';
import store from 'redux/store';
// import './app.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-06-phonebook">
        <NavBar />
        <UserRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
