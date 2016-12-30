//import our clientId set in teh config file
import { clientId } from '../config';
//api urls for google tasks
const SCOPES = ['https://www.googleapis.com/auth/tasks', 'https://www.googleapis.com/auth/plus.me'];

export default {
  //authorize function takes in params
  authorize(params) {
    //return a new Promise
    return new Promise((resolve, reject) => {
      //google api authorize
      gapi.auth.authorize(
        {
          'client_id': clientId,
          'scope': SCOPES,
          'immediate': params.immediate,
          'cookie_policy': 'single_host_origin'
        },
        //auth result is the callback for the authorization
        authResult => {
          //if error, reject it with error
          if (authResult.error) {
            return reject(authResult.error);
          }
          //return the loaded client if succesful
          return gapi.client.load('tasks', 'v1', () => gapi.client.load('plus', 'v1', () => resolve()));
        }
      );
    });
  }
}
