import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import Stories from 'react-insta-stories';
import { useEffect, useState } from 'react';
import { SinglStoryAction } from '../../Services/action/action';


export const Story = ({ open, setOpen, activeId, setOpenEditORder, setOpenAddStory }) => {
    const [openMore, setOpenMore] = useState(false)
    const { getSinglStory } = useSelector((st) => st)
    const dispatch = useDispatch()
    const [storyItem, setStoryItem] = useState([])
    useEffect(() => {
        dispatch(SinglStoryAction({ story_id: activeId }))
    }, [])
    useEffect(() => {
        let item = []
        if (getSinglStory?.data) {
            item.push(`https://basrabackend.justcode.am/uploads/${getSinglStory?.data?.photo}`)
        }
        if (getSinglStory?.data?.file?.length) {
            getSinglStory?.data?.file?.map((elm, i) => {
                item.push(`https://basrabackend.justcode.am/uploads/${elm.file}`)
            })

        }
        setStoryItem(item)
    }, [getSinglStory])


    return (
        <div onClick={() => setOpen(false)} className={open ? 'activePopup activeSecondaryPopup' : 'inactive'}>
            <div className='stoyPopup storyseconderyPop'>

                <div onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                }} className='storyDiv'>
                    {storyItem.length > 0 && < Stories
                        stories={storyItem ? storyItem : []}
                        defaultInterval={1500}
                        width={432}
                        height={'100%'}
                        onAllStoriesEnd={() => setOpen(false)}
                    />}
                    <div onClick={() => setOpenMore(true)} className='moreStroyIcon'>
                        <img src={require('../../assets/images/more.png')} />
                    </div>
                    {openMore && <div className='moreItemDiv'>
                        <div className='moreItem'
                            onClick={() => {
                                setOpen(false)
                                setOpenAddStory(true)
                            }}

                        >أضف قصة</div>
                        <div className='moreItem' onClick={() => {
                            setOpen(false)
                            setOpenEditORder(true)
                        }}>تغيير البناء</div>
                    </div>}
                </div>
            </div>
        </div >
    )
}