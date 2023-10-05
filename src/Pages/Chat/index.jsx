import './style.css'
import { useState } from 'react'
import { ChatLeft } from '../../Components/ChatLeft'
import { ChatRight } from '../../Components/ChatRight'

export const Chat = () => {
    const [currentMember, setCurrentMember] = useState({})

    return (
        <div className='chat'>
            <ChatLeft currentMember={currentMember} setCurrentMember={setCurrentMember} />
            <ChatRight currentMember={currentMember} />
        </div>
    )
}