import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddNewService from './contents/AddNewService/AddNewService';
import HomePage from './contents/HomePage/HomePage';
import Login from './contents/Login/Login';
import ManageOrders from './contents/ManageOrders/ManageOrders';
import PageNotFound from './contents/PageNotFound/PageNotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './contents/Navigation/Navigation';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path='/'>
              <HomePage></HomePage>
            </Route>
            <Route path='/home'>
              <HomePage></HomePage>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/manageOrders'>
              <ManageOrders></ManageOrders>
            </Route>
            <Route path='/addService'>
              <AddNewService></AddNewService>
            </Route>
            <Route path='*'>
              <PageNotFound></PageNotFound>

            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
