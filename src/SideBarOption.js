import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { enterRoom } from './features/appSlice';
import { db } from './firebase';


function SideBarOption({Icon, title, addChannelOption, id}) {

    const dispatch = useDispatch()
    
    const addChannel = () =>{
        const channelName = prompt("Add the channel name");
        db.collection("rooms").add({
            name: channelName
        })

    }
    const selectChannel = () =>{
        if(id){
            dispatch(enterRoom({
                roomId: id
            }))
        }
    }


    return (
        <SideBarOptionContainer onClick={addChannelOption ? addChannel : selectChannel} >
            {Icon && <Icon fontSize="small" style={{padding: 10}} />}
            {Icon ? (
                <h3>{title}</h3>
            ):(
                <SideBarOptionChannel>
                    <span>
                        #
                    </span>
                    {title}
                </SideBarOptionChannel>
            )}
        </SideBarOptionContainer>
    )
}

export default SideBarOption

const SideBarOptionContainer = styled.div`

    font-size: 12px;
    display: flex;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;

    :hover{
        opacity: 0.9;
        background-color: #340e36;
    }

    >h3{
        font-weight: 500;
    }
    >h3 >span{
        padding: 5px;
    }
`;

const SideBarOptionChannel = styled.h3`
    padding: 10px 0px;
    font-weight: 300;
`