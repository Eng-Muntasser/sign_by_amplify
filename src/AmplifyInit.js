import Amplify, {Auth} from 'aws-amplify';
import config from './config.json'; 

const AmplifyINit = () =>{
    return(
        Amplify.configure({
            Auth: {
              mandatorySignIn: true,
              region: config.cognito.REGION,
              userPoolId: config.cognito.USER_POOL_ID,
              userPoolWebClientId: config.cognito.APP_CLIENT_ID
            },
            API:{
              endpoints:[
                {
                  name:'All_Departments',
                  endpoint:'https://k1y18e2yvj.execute-api.us-west-2.amazonaws.com/',
                  authorizationType: "AWS_IAM",
                  custom_header: async () => { 
                    return { Authorization : `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
                    } 
                  }
                }
              ]
            }
          })
    );
}
export default AmplifyINit;