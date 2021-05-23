import UserRegistraion from './Register';
import ConfirmRegist from './RegisterConf';
import UserProfile from './Profile';
export{
    UserRegistraion,
    ConfirmRegist,
    UserProfile
}
// hence the task is a relativley small in size lazy import give an unpleasent behavior
// import {lazy} from 'react';
// const UserRegistraion = lazy(()=> import('./Register'));
// const ConfirmRegist = lazy(()=> import('./RegisterConf'));
// const UserProfile = lazy(()=> import('./Profile'));