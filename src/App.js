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
import PrivateRoute from './contents/PrivateRoute/PrivateRoute';
import HomeServices from './contents/HomeServices/HomeServices';
import Booking from './contents/Booking/Booking';
import MyOrders from './contents/MyOrders/MyOrders';

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
            <PrivateRoute path='/manageOrders'>
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path='/addService'>
              <AddNewService></AddNewService>
            </PrivateRoute>
            <PrivateRoute path='/myOrders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path='/service/:bookingId'>
              <Booking></Booking>
            </PrivateRoute>
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
