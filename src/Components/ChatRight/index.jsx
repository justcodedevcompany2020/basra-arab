import './style.css'
import { useState } from 'react'
import { Smile, Send, CheckMarkWhite, CheckMarkBlack } from '../Svg'

export const ChatRight = ({ currentMember }) => {
    const [messages, setMessages] = useState([
        {
            from: 'user',
            message: `OMG 😲 do you remember what you did last night at the work night out?`,
            time: '18:12',
            read: true,
        },
        {
            from: 'me',
            message: `no haha`,
            time: '18:16',
            read: true,
        },
        {
            from: 'me',
            message: `I don't remember anything 😄`,
            time: '18:16',
            read: false,
        },
    ])

    return (
        <div className='chatRight'>
            {Object.keys(currentMember)?.length
                ? <section className='chatRight'>
                    <div className='chatTop' >
                        {currentMember?.image
                            ? <img alt='' src={require(`../../assets/images/${currentMember?.image}`)} />
                            : <div className='noImageChat'>{currentMember?.name?.split('')[0]}</div>
                        }
                        <span>{currentMember?.name}</span>
                    </div>

                    <div className='chatMessages'>
                        {messages?.length > 0
                            ? messages?.map((e, i) => (
                                <div className={e?.from === 'me' ? 'eachMyMessage' : 'eachMessage'} key={i}>
                                    <div className={e?.from === 'me' ? 'myMessage' : 'message'} >
                                        <p>{e?.message}</p>
                                        <div className='messageTime'>
                                            <span>{e?.time}</span>
                                            {e?.from === 'me' && e?.read
                                                ? <CheckMarkWhite />
                                                : e?.from !== 'me' && e?.read
                                                    ? <CheckMarkBlack />
                                                    : ''
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                            : <span className='noChatMember'>No messages</span>
                        }
                    </div>

                    <div className='chatBottom'>
                        <div className='chatBottomBg'>
                            <div><Smile /></div>
                            <textarea
                                placeholder='Message'
                            />
                            <button><Send /></button>
                        </div>
                    </div>
                </section>
                : <span className='noChatMember'>Select a member to chat</span>
            }
        </div >
    )
}