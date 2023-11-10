import './style.css'
import { useEffect, useRef, useState } from 'react'
import { Smile, Send, CheckMarkWhite, CheckMarkBlack } from '../Svg'
import { useDispatch, useSelector } from 'react-redux'
import { GetSinglPageChatRoom, NewMsgAction } from '../../Services/action/action'
import { Loading } from '../Loading'
import EmojiPicker from 'emoji-picker-react'

export const ChatRight = ({ currentMember }) => {
    const { getSinglChat } = useSelector((st) => st)
    const dispatch = useDispatch()
    const [messages, setMessages] = useState([])
    const [msg, setMsg] = useState('')
    const { addMsg } = useSelector((st) => st)
    const containerRef = useRef(null);
    const [page, setPage] = useState(1)
    const [richToButton, setRichToButton] = useState(2)
    const [openEmoji, setOpenEmoji] = useState(false)
    useEffect(() => {
        const scrollableDiv = containerRef.current;
        if (scrollableDiv) {
            scrollableDiv.scrollTop = 861
        }
    }, [addMsg, richToButton]);



    const handleScroll = () => {
        if (containerRef.current) {
            if (containerRef.current.scrollTop <= 100) {
                if (getSinglChat.data.next_page_url) {
                    setPage(page + 1)
                }
            }
        }
    };
    useEffect(() => {
        let item = []
        let data = getSinglChat?.data?.data
        let reversData = []
        if (data?.length) {
            setRichToButton(richToButton + 1)
            reversData = data.reverse()
        }
        reversData && reversData.map((elm, i) => {
            let from = ''
            if (elm.sender_id == 1) {
                from = 'me'
            }
            else {
                from = 'user'
            }
            let date = new Date(elm.created_at);
            let today = new Date()
            let day = date.getDate()
            let mount = date.getMonth()
            let houre = date.getHours()
            let minute = date.getMinutes()
            let Datee = ''
            if (day < 10) {
                day = `0${day}`
            }
            if (mount < 10) {
                mount = `0${mount}`
            }
            if (houre < 10) {
                houre = `0${houre}`
            }
            if (minute < 10) {
                minute = `0${minute}`
            }
            if (date.getDate() == today.getDate()) {
                Datee = `${houre}:${minute}`
            }
            else {
                Datee = `${day}.${mount}`
            }
            item.push({
                from: from,
                message: elm.message,
                read: true,
                time: Datee
            })
        })
        const combinedArray = item.concat(messages);
        setMessages(combinedArray)
    }, [getSinglChat])

    useEffect(() => {
        if (currentMember?.sender_id) {
            dispatch(GetSinglPageChatRoom({ receiver_id: currentMember.sender_id }, page))
        }
    }, [currentMember, page])


    useEffect(() => {
        if (Object.keys(addMsg.data).length) {
            let item = [...messages]
            let elm = addMsg.data
            let date = new Date(elm.created_at);
            let today = new Date()
            let day = date.getDate()
            let mount = date.getMonth()
            let houre = date.getHours()
            let minute = date.getMinutes()
            let Datee = ''
            if (day < 10) {
                day = `0${day}`
            }
            if (mount < 10) {
                mount = `0${mount}`
            }
            if (houre < 10) {
                houre = `0${houre}`
            }
            if (minute < 10) {
                minute = `0${minute}`
            }
            if (date.getDate() == today.getDate()) {
                Datee = `${houre}:${minute}`
            }
            else {
                Datee = `${day}.${mount}`
            }
            let from = ''
            if (elm.receiver_id == 1) {
                from = 'me'
            }
            else {
                from = 'user'
            }
            item.push({
                from: from,
                message: elm.message,
                read: true,
                time: Datee
            })
            setMessages(item)
        }
    }, [addMsg])


    const sendMsg = () => {
        if (msg) {
            setMsg('')
            dispatch(NewMsgAction({ message: msg, receiver_id: currentMember.sender_id }))
        }
    }

    return (
        <div className='chatRight' onClick={() => setOpenEmoji(false)}>
            {Object.keys(currentMember)?.length
                ? <section className='chatRight'>
                    <div className='chatTop' >
                        {currentMember?.sender?.avatar
                            ? <img alt='' src={`https://basrabackend.justcode.am/uploads/${currentMember?.sender?.avatar}`} />
                            : <div className='noImageChat'>{currentMember.sender?.name?.split('')[0]}</div>
                        }
                        <span>{currentMember?.sender?.name}</span>
                    </div>


                    {/* <Loading /> : */}
                    <div onScroll={handleScroll} ref={containerRef} className='chatMessages'>
                        {messages?.length > 0
                            ? messages?.map((e, i) => {
                                return <div className={e?.from == 'me' ? 'eachMyMessage' : 'eachMessage'} key={i}>
                                    <div className={e?.from == 'me' ? 'myMessage' : 'message'} >
                                        <p>{e?.message}</p>
                                        <div className='messageTime'>
                                            <span>{e?.time}</span>
                                            {e?.from == 'me' && e?.read
                                                ? <CheckMarkWhite />
                                                : e?.from !== 'me' && e?.read
                                                    ? <CheckMarkBlack />
                                                    : ''
                                            }
                                        </div>
                                    </div>
                                </div>
                            })
                            : <span className='noChatMember'>No messages</span>
                        }
                    </div>


                    <div className='chatBottom'>
                        <div className='chatBottomBg'
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                            }}
                        >
                            <div onClick={() =>
                                setOpenEmoji(true)}
                            ><Smile /></div>
                            {openEmoji && <div className='emojiPickerDiv'>
                                <EmojiPicker onEmojiClick={(e) => {
                                    setMsg(msg + e.emoji)
                                }} />
                            </div>}
                            <textarea
                                value={msg}
                                placeholder='Message'
                                onChange={(e) => setMsg(e.target.value)}
                            />
                            <button onClick={() => sendMsg()}><Send /></button>
                        </div>
                    </div>
                </section>
                : <span className='noChatMember'>Select a member to chat</span>
            }
        </div >
    )
}