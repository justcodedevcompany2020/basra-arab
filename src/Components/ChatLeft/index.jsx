import './style.css'
import { useState } from 'react'

export const ChatLeft = ({ currentMember, setCurrentMember }) => {
    const [chatMembers, setChatMembers] = useState([
        {
            id: 1,
            image: 'Jessica.png',
            name: 'Jessica Drew',
            lastMessage: {
                from: 'Jessica Drew',
                image: null,
                message: 'Ok, see you later 🎉',
                time: '18:30',
            },
            unreadMessageCount: '2',
            groupChat: false,
        },
        {
            id: 2,
            image: 'David.png',
            name: 'David Moore',
            lastMessage: {
                from: 'me',
                image: null,
                message: `i don't remember anything 😄`,
                time: '18:16',
            },
            unreadMessageCount: '0',
            groupChat: false,
        },
        {
            id: 3,
            image: null,
            name: 'Announcements',
            lastMessage: {
                from: '',
                image: null,
                message: '',
                time: '17:15',
            },
            unreadMessageCount: '0',
            groupChat: true,
        },
        {
            id: 4,
            image: 'officechat.png',
            name: 'Office Chat',
            lastMessage: {
                from: 'Lewis',
                image: null,
                message: `All done mate 😆`,
                time: 'Wed',
            },
            unreadMessageCount: '0',
            groupChat: true,
        },
        {
            id: 5,
            image: 'artClass.png',
            name: 'Art Class',
            lastMessage: {
                from: 'Emily',
                image: 'art.png',
                message: `Editorial`,
                time: 'Tue',
            },
            unreadMessageCount: '0',
            groupChat: true,
        },
    ])

    return (
        <section className='chatLeft'>
            {chatMembers?.length > 0
                ? chatMembers?.map((e, i) => (
                    <div className='eachChatMember' key={i} onClick={() => setCurrentMember(e)} style={currentMember?.id === e?.id ? { background: '#d9d9d9' } : {}}>
                        <div className='eachMemberLeft'>
                            {e?.image
                                ? <img alt='' src={require(`../../assets/images/${e?.image}`)} />
                                : <div className='noImageChat'>{e?.name?.split('')[0]}</div>
                            }
                            <div className='memberName'>
                                <p>{e?.name?.length > 20 ? e?.name?.slice(0, 20) + '...' : e?.name}</p>
                                {e?.groupChat
                                    ? e?.lastMessage?.image
                                        ? <h6>{e?.lastMessage?.from}: <img alt='' src={require(`../../assets/images/${e?.lastMessage?.image}`)} /> <span className='lastMessage'>{e?.lastMessage?.message?.length > 35 ? e?.lastMessage?.message.slice(0, 35) + '...' : e?.lastMessage?.message}</span></h6>
                                        : <h6>{e?.lastMessage?.from ? `${e?.lastMessage?.from}:` : ''} <span className='lastMessage'>{e?.lastMessage?.message ? e?.lastMessage?.message?.length > 25 ? e?.lastMessage?.message.slice(0, 25) + '...' : e?.lastMessage?.message : "Channel Created"}</span></h6>
                                    : e?.lastMessage?.from === e?.name
                                        ? <span className='lastMessage'>{e?.lastMessage?.message?.length > 35 ? e?.lastMessage?.message.slice(0, 35) + '...' : e?.lastMessage?.message}</span>
                                        : <span className='lastMessage'>You: {e?.lastMessage?.message?.length > 35 ? e?.lastMessage?.message.slice(0, 35) + '...' : e?.lastMessage?.message}</span>
                                }
                            </div>
                        </div>
                        <div className='eachMemberRight'>
                            <span>{e?.lastMessage?.time}</span>
                            {e?.unreadMessageCount > 0
                                ? <div className='messageCount'>{e?.unreadMessageCount}</div>
                                : <div />
                            }
                        </div>
                    </div>
                ))
                : <span>No chat members</span>
            }
        </section>
    )
}