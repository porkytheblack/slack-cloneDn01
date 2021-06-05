import React from 'react';
import Header from './Header'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import SideBar from './SideBar';
import Chat from './Chat';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from './firebase'; 
import Login from './Login';
import Spinner from 'react-spinkit';

function App() {

  const [user, loading] = useAuthState(auth);

  if(loading){
    return(
      <AppLoading>
        <AppLoadingContents>
          <img src="https://cdn.brandfolder.io/5H442O3W/at/pl546j-7le8zk-btwjnu/Slack_RGB.png" alt="" />
          <Spinner
            name="ball-spin-fade-loader"
            color="purple"
            fadeIn="none"
          />
        </AppLoadingContents>
      </AppLoading>
    )
  }

  return (
    <div className="app">
      <Router>
        {!user?(
          <Login/>
        ):(
          <>
          <Header/>
          <AppBody>
            <SideBar/>
            <Switch>
              <Route path="/">
                <Chat/>
              </Route>
            </Switch>
          </AppBody>
          </>
        )}
    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`

const AppLoading = styled.div`
  background-color: #f8f8f8;
    height: 100vh;
    display:  grid;
    place-items: center;
  
`;
const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  >img{
    height: 100px;
    padding:20px;
    margin-bottom: 40px;
  }
`;
