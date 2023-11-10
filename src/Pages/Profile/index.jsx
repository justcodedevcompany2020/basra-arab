import { useDispatch, useSelector } from 'react-redux'
import { DeleteStoryTeamAction, GetBrandAction, GetCategory, GetPlatforms, GetSliderAction, GetStoryTeamAction } from '../../Services/action/action'
import { AddTeam } from '../AddTeam'
import './style.css'
import { useEffect, useState } from 'react'
import { Loading } from '../../Components/Loading'
import { EditOrder } from '../EditOrder'
import { AddBanner } from '../AddBanner'

import Stories from 'react-insta-stories';
import { Story } from '../../Components/Story'
import { AddStory } from '../AddStory'
import { AddCategory } from '../AddCategory'
import { AddBrends } from '../AddBrends'

export const Profile = () => {
    const [selectedBanner, setSelectedBanner] = useState(2)
    const [stories, setStories] = useState([])
    const [openEditORder, setOpenEditORder] = useState(false)
    const [activeId, setActiveId] = useState()
    const [openAddBanner, setOpenAddBanner] = useState(false)
    const [banerType, setBanerType] = useState('first')
    const { getSlider } = useSelector((st) => st)
    const { getPlatfors } = useSelector((st) => st)
    const { getCategory } = useSelector((st) => st)
    const { getBrand } = useSelector((st) => st)

    const [headerImages, setHeaderImages] = useState([])
    const [secondImages, setSecondImages] = useState([])
    const [brands, setBrands] = useState([])
    const [categories, setCategories] = useState([])

    const [openStory, setOpenStory] = useState(false)
    const [openAddStory, setOpenAddStory] = useState(false)
    const [openAddCategory, setOpenAddCategory] = useState(false)
    const [openCreateBrend, setOpenCreateBrend] = useState(false)

    const [openTeam, setOpenTeam] = useState(false)
    const { getStoryTeam } = useSelector((st) => st)
    const [brnadPage, setBrandPage] = useState(1)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetStoryTeamAction())
    }, [])

    useEffect(() => {
        if (getStoryTeam.data) {
            setStories(getStoryTeam?.data)
            setHeaderImages(getStoryTeam.lastSlider)
        }
    }, [getStoryTeam])

    useEffect(() => {
        dispatch(GetSliderAction("first", selectedBanner))
        dispatch(GetSliderAction("last", selectedBanner))
        dispatch(GetPlatforms())
        dispatch(GetCategory(selectedBanner))
        dispatch(GetBrandAction(1, selectedBanner))

    }, [selectedBanner])



    useEffect(() => {
        setSecondImages(getSlider.data)
        setHeaderImages(getSlider.lastSlider)
    }, [getSlider])


    useEffect(() => {
        setCategories(getCategory.data.data)
    }, [getCategory])

    useEffect(() => {
        setBrands(getBrand?.data?.data?.data)
    }, [getBrand])


    useEffect(() => {
        if (openStory) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
    }, [openStory])
    return (
        <div className='profile'>
            <AddTeam
                open={openTeam}
                setOpen={setOpenTeam}
            />
            {openEditORder && <EditOrder
                open={openEditORder}
                setOpen={setOpenEditORder}
                id={activeId}
            />}
            {openAddBanner &&
                <AddBanner
                    open={openAddBanner}
                    setOpen={setOpenAddBanner}
                    type={banerType}
                    platformid={selectedBanner}
                />
            }
            {openAddStory &&
                <AddStory
                    open={openAddStory}
                    setOpen={setOpenAddStory}
                    type={activeId}
                />
            }
            {openStory &&
                <Story
                    activeId={activeId}
                    open={openStory}
                    setOpen={(setOpenStory)}
                    setOpenEditORder={setOpenEditORder}
                    setOpenAddStory={setOpenAddStory}
                />
            }
            {openAddCategory &&
                <AddCategory
                    open={openAddCategory}
                    setOpen={setOpenAddCategory}
                    platformId={selectedBanner}
                />
            }
            {openCreateBrend &&
                <AddBrends
                    open={openCreateBrend}
                    setOpen={setOpenCreateBrend}
                    setBrendsPage={(e) => setBrandPage(e)}
                    platformId={selectedBanner}
                />
            }
            <section className='storiesBlock'>
                <h1>قصص</h1>
                {!getStoryTeam.deletLoading ? <div className='stories'>
                    {stories?.length > 0 && stories?.map((e, i) => (
                        <div onClick={() => {
                            setActiveId(e.id)
                            setOpenStory(true)
                        }} className='eachStory' key={i}>
                            <div className='eachStoryImg'>
                                <img alt='' src={`https://basrabackend.justcode.am/uploads/${e.photo}`} />
                            </div>
                            <span>{e?.name}</span>
                            <div className='deletStoryTeam' onClick={() => dispatch(DeleteStoryTeamAction({ story_id: e.id }))}>
                                x
                            </div>
                        </div>
                    ))}
                    <div className='eachStory'>
                        <img onClick={() => setOpenTeam(true)} alt='' src={require('../../assets/images/add.png')} />
                    </div>
                </div> :
                    <Loading />
                }

            </section>

            <section className='banners'>
                <h1>لافتات</h1>
                <div className='bannerButtons'>
                    <button className={selectedBanner === 2 ? 'selectedBanner' : 'banner'} onClick={() => setSelectedBanner(2)}>طلب</button>
                    <button className={selectedBanner === 1 ? 'selectedBanner' : 'banner'} onClick={() => setSelectedBanner(1)}>موقع إلكتروني</button>
                </div>
            </section>

            <section className='siteHeaderBlock'>
                <h1>رأس الموقع</h1>
                <div className='siteHeader'>
                    {secondImages?.length > 0 && secondImages?.map((e, i) => {
                        if (e.type == 'mp4') {
                            return <video width="300" height="200" controls>
                                <source src={`https://basrabackend.justcode.am/uploads/${e?.file}`} type="video/mp4" />
                            </video>
                        }
                        return <img alt='' src={`https://basrabackend.justcode.am/uploads/${e?.file}`} key={i} />
                    })}
                    <div onClick={() => {
                        setOpenAddBanner(true)
                        setBanerType('first')
                    }} className='siteHeader' style={{ width: '140px' }}>
                        <img alt='' src={require('../../assets/images/add.png')} className='addHeader' />
                    </div>
                </div>
            </section>
            <section className='siteHeaderBlock'>
                <h1>الكتلة الثانية</h1>

                <div className='siteHeader'>
                    {headerImages?.length > 0 && headerImages?.map((e, i) => {
                        if (e.type == 'mp4') {
                            return <video width="300" height="200" controls>
                                <source src={`https://basrabackend.justcode.am/uploads/${e?.file}`} type="video/mp4" />
                            </video>
                        }
                        return <img alt='' src={`https://basrabackend.justcode.am/uploads/${e?.file}`} key={i} />
                    })}
                    <div onClick={() => {
                        setOpenAddBanner(true)
                        setBanerType('last')
                    }} className='siteHeader' style={{ width: '140px' }}>
                        <img alt='' src={require('../../assets/images/add.png')} className='addHeader' />
                    </div>
                </div>
            </section>

            <section className='siteHeaderBlock'>
                <h1>العلامات التجارية</h1>
                <div className='siteHeader'>
                    {brands?.length > 0 && brands?.map((e, i) => (
                        <img alt='' src={`https://basrabackend.justcode.am/uploads/${e?.photo}`} key={i} />
                    ))}
                    <div onClick={() => setOpenCreateBrend(true)} className='siteHeader' style={{ width: '140px' }}>
                        <img alt='' src={require('../../assets/images/add.png')} className='addHeader' />
                    </div>
                </div>
            </section>




            <section className='siteHeaderBlock'>
                <h1>فئات</h1>
                <div className='siteHeader'>
                    {categories?.length > 0 && categories?.map((e, i) => {
                        return <img alt='' src={`https://basrabackend.justcode.am/uploads/${e?.photo}`} key={i} />
                    })}
                    <div onClick={() => setOpenAddCategory(true)} className='siteHeader' style={{ width: '140px' }}>
                        <img alt='' src={require('../../assets/images/add.png')} className='addHeader' />
                    </div>
                </div>
            </section>
        </div>
    )
}