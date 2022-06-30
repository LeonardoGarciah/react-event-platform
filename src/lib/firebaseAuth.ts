import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import {auth} from './firebase';
const githubProvider = new GithubAuthProvider();
async function firebaseAuth() {
  return await signInWithPopup(auth,githubProvider).then((res)=>{
    return res.user;
  }).catch((error)=>{
    return error;
  })
};

export default firebaseAuth;