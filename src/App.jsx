import { Provider } from 'react-redux';
import store from 'redux/store';
import { BrowserRouter } from 'react-router-dom';

import NavBar from 'NavBar/NavBar';
import UserRoutes from 'UserRoutes';


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
