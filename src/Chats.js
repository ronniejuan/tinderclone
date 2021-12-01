import React from 'react'
import './chats.css'
import Chat from './Chat.js'

function Chats() {
    return (
        <div className="chats">

            <Chat 
            name="Joseph"
            message="Hey man!"
            timestamp="40 seconds ago"
            profilePic="..."
            />
               <Chat 
            name="Abdul"
            message="Wath r u Doing?"
            timestamp="2 days ago"
            profilePic="..."
            />
               <Chat 
            name="Ronnie"
            message="Lets do smt"
            timestamp="1hr  ago"
            profilePic="..."
            />
               <Chat 
            name="Joel"
            message="I can Help u Guys"
            timestamp="1 min ago"
            profilePic="..."
            />
            
        </div>
    )
}

export default Chats
