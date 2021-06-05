import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLessSharp, ExpandMoreSharp, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import SideBarOption from './SideBarOption'
import {auth, db} from './firebase'
import {useCollection} from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'

function SideBar() {
    const [channels, loading, error]  =  useCollection(db.collection("rooms"));
    const [user] = useAuthState(auth)
    console.log(channels)
    return (
            <SideBarContainer>
                <SideBarHeader>
                    <SideBarInfo>
                        <h2>DON's Team</h2>
                        <h3>
                            <FiberManualRecord/>
                            {user?.displayName}
                        </h3>
                    
                    </SideBarInfo>
                    <Create/>
                </SideBarHeader>

                <SideBarOption Icon={InsertComment} title="Threads" />
                <SideBarOption Icon={Inbox} title="Mentions & reactions" />
                <SideBarOption Icon={Drafts} title="Saved Items" />
                <SideBarOption Icon={BookmarkBorder} title="Channell browser" />
                <SideBarOption Icon={PeopleAlt} title="People and User Groups" />
                <SideBarOption Icon={Apps} title="Apps" />
                <SideBarOption Icon={FileCopy} title="File Browser" />
                <SideBarOption Icon={ExpandLessSharp} title="Show Less" />
                <hr />
                <SideBarOption Icon={ExpandMoreSharp} title="Channels" addChannelOption />
                <hr />
                <SideBarOption Icon={Add} title="Add Channel" addChannelOption />

                {channels?.docs.map((doc)=>{return(
                    <SideBarOption key={doc.id} id={doc.id}  title={ doc.data().name } />
                )})}
            </SideBarContainer>
    )
}

export default SideBar

const SideBarContainer = styled.div`
    color: white;
    background-color: var(--slack-color);
    margin-top: 60px;
    max-width: 260px;
    flex: 0.3;
    border-top: 1px solid #49274b;
    overflow-y: scroll;

    >hr{
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`;


const SideBarHeader = styled.div`
    display: flex;
    padding: 13px;
    border-bottom: 1px solid #49274b;

    >.MuiSvgIcon-root{
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;


const SideBarInfo  = styled.div`
    flex: 1;
    margin-right: 50px;
    >h2{
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;

    }
    >h3{
        font-size: 13px;
        display: flex;
        font-weight: 400;
        align-items: center;
    }
    >h3 >.MuiSvgIcon-root{
        margin-top: 1px;
        margin-right: 2px;
        color: green;
        font-size: 14px;
    }
`;

