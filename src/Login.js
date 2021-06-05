import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from './firebase'

function Login() {

    const signIn= e=>{
        e.preventDefault()
        auth.signInWithPopup(provider).catch(e=>{alert(e.message)})
    }
    return (
        <LoginScreenContainer>
            <LoginScreenInnerContainer>
                <img src="https://cdn.brandfolder.io/5H442O3W/at/pl546j-7le8zk-btwjnu/Slack_RGB.png" alt="" />
                <h1>Join the Fam</h1>
                <p>dondev.slack.com</p>
                <Button onClick={signIn} type="submit">
                    Sign In with Google
                </Button>
            </LoginScreenInnerContainer>
        </LoginScreenContainer>
    )
}

export default Login

const LoginScreenContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display:  grid;
    place-items: center;
`;
const LoginScreenInnerContainer = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 100px;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12) 0 1px 2px rgba(0,0,0,0.24);
    >img{
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }
    >button{
        margin-top: 50px;
        text-transform: inherit;
        background-color: green;
        color: white;
        :hover{
            background-color: green;
            color: white;
        }
    }
`;
