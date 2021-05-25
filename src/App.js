import React,{useEffect} from 'react';
import {Auth} from 'aws-amplify';
// import config from './config.json'; 
import AmplifyINit from './AmplifyInit';
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
  AmplifyINit();
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
  //as a temp soultion check the token evrey refresh (first render for app) then it will be maneged by axios.
  useEffect(()=>{
    const sessionHandling = async() =>{
      try{
        const sessionResp = await Auth.currentSession();
        if(sessionResp){
          console.log(sessionResp);
        }
      }catch(err){
        console.log('session',err);
      }
    }
    if( localStorage.getItem('userTokenAmp') !== null){
      sessionHandling();
    }
  },[])
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