import { Avatar } from '@material-ui/core';
import { AccessTime, HelpOutline, Search } from '@material-ui/icons';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components'
import { auth } from './firebase';

function Header() {
    const [user] = useAuthState(auth)
    return (
        <div>
            <HeaderContainer>
                <HeaderLeft>
                    <HeaderAvatar onClick={()=>auth.signOut()} src={user?.photoURL} alt={user?.displayName} />
                    <AccessTime />
                </HeaderLeft>
                <HeaderSearch>
                    <Search/>
                    <input type="text" placeholder="Search the D Team" />
                </HeaderSearch>
                <HeaderRight>
                    <HelpOutline/>
                </HeaderRight>
            </HeaderContainer>
        </div>
    )
}

export default Header

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;
    align-items: center;

    >.MuiSvgIcon-root{
        margin-right: 20px;
        margin-left: auto;
    }
`

const HeaderSearch = styled.div`
    display: flex;
    text-align: center;
    border-radius: 6px;
    background-color: #421f44;
    align-items: center;
    flex: 0.4;
    padding: 0 50px;
    color: grey;
    border: 1px solid grey;

    >input{
        background: transparent;
        color: white;
        min-width: 30vw;
        outline: none;
        border: none;
    }
`



const HeaderContainer  = styled.div`
    display: flex;
    position: fixed;
    color: white;
    width: 100%;
    padding: 10px 0px;
    background-color: var(--slack-color)
`;
const HeaderLeft = styled.div`
    display: flex;
    flex: 0.3;
    align-items: center;
    margin-left: 20px;

    >.MuiSvgIcon-root{
        margin-left: auto;
        marGin-right: 30px;
    }
    `;
const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover{
        opacity: 0.8;
    }
    `;
