import React from 'react';
import Amplify from 'aws-amplify';
import config from './config.json'; 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {connect} from 'react-redux';
import Login from './Pages/Login';
import * as pages from './Pages';
import "antd/dist/antd.css";
import './App.css';

function App(props) {
  Amplify.configure({
    Auth: {
      mandatorySignIn: true,
      region: config.cognito.REGION,
      userPoolId: config.cognito.USER_POOL_ID,
      userPoolWebClientId: config.cognito.APP_CLIENT_ID
    }
  });
  const GestRouts = () =>{
    return(
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/Register' component={pages.UserRegistraion}/>
        <Route exact path='/Confirm_Registration' component={pages.ConfirmRegist}/>
      </Switch>
    );
  } 
  const ClientRouts = () =>{
    return(
      <Switch>
        <Route exact path='/' component={pages.UserProfile}/>
      </Switch>
    );
  }
  console.log('asd5',localStorage.getItem('userTokenAmp')=== null);
  return (
    <Router>
      <div className="App">
        {
          localStorage.getItem('userTokenAmp') === null
          ?<GestRouts />
          :<ClientRouts />
        }
      </div>
    </Router>
  );
}
const mapStateToProps = ({AuthReducer}) =>{
  const {signInOutFlag} = AuthReducer;
  return{signInOutFlag}
}

export default connect(
  mapStateToProps,
  null
)(App);