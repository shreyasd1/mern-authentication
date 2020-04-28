import React from 'react';
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'
import Dashboard from './components/dashboard/Dashboard'
import ForgotPassword from './components/pages/ForgotPassword'
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import AuthState from './context/authContext/AuthState'
import PrivateRoute from './components/routes/PrivateRoute'

function App() {
  return (
    <AuthState>
      <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <SignUp />
        </Switch>
      </div>
      </BrowserRouter>
    </AuthState>
  );
}

export default App;
