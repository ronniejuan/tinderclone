import React ,{ useState }from 'react'
import './ChatScreen.css'
import Avatar from "@material-ui/core/Avatar"


function ChatScreen() {

    const [messages, setMessages] = useState([
        {
            name:"Joseph",
            image:"",
            message:"Waths up",
        },
        {
            name:"Joseph",
            image:"",
            message:"How is it going",
        },
        {
            name:"Joseph",
            image:"",
            message:"Waths up",
        }
    ])

    return (
        <div className="chatScreen" >
            <p>YOU MATCHED WITH JOSEPH 10/11/2021</p>
            {messages.map((message)=> (
                <div className="chatScreen__message">
                    <Avatar
                    className="chatScreen__image"
                    alt={message.name}
                    src={message.image}
                    />
                    <p className="chatScreen__text" >{message.message}</p>
                    </div>
            ))}
        </div>
    )
}

export default ChatScreen
