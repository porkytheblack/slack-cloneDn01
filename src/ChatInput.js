import React, {useState } from 'react'
import styled from 'styled-components'
import { auth, db } from './firebase'
import firebase from 'firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function ChatInput({channelName, channelId, chatRef}) {
    const [Input, setInput] = useState("")
    const [user] = useAuthState(auth)
    const sendMessage = (e)=>{
        e.preventDefault()
        if(!channelId){
            return false;
        }
        db.collection("rooms").doc(channelId).collection("messages").add({
            message: Input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user?.displayName,
            userImage: user?.photoURL
        })
        setInput("")
        chatRef?.current?.scrollIntoView({
            behavior: "smooth"
        })
    }
    return (
        <ChatInputContainer>
            <form>
                <input value={Input} onChange={e=>setInput(e.target.value)} type="text" placeholder={`Message #${channelName}`} />
                <button type="submit" hidden onClick={sendMessage}>SEND </button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius: 20px;
    >form{
        position: relative;
        display: flex;
        justify-content: center;

        
    }
    >form >input{
            position: fixed;
            bottom: 30px;
            width: 60%;
            border: 1px solid gray;
            border-radius: 3px;
            padding: 20px;
            outline: none;
        }
`
