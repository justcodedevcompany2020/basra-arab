import './style.css'

export const Profile = () => {
    return (
        <div className='profile'>
            <section className='storiesBlock'>
                <h1>قصص</h1>
                <div className='stories'>
                    <div className='eachStory'>
                        <div className='eachStoryImg'>
                            <img alt='' src={require(`../../assets/images/story.png`)} />
                        </div>
                        <span>مخزون</span>
                    </div>
                    <div className='eachStory'>
                        <div className='eachStoryImg'>
                            <img alt='' src={require(`../../assets/images/story.png`)} />
                        </div>
                        <span>مخزون</span>
                    </div>
                    <div className='eachStory'>
                        <div className='eachStoryImg'>
                            <img alt='' src={require(`../../assets/images/story.png`)} />
                        </div>
                        <span>مخزون</span>
                    </div>
                    <div className='eachStory'>
                        <div className='eachStoryImg'>
                            <img alt='' src={require(`../../assets/images/story.png`)} />
                        </div>
                        <span>مخزون</span>
                    </div>
                    <div className='eachStory'>
                        <div className='eachStoryImg'>
                            <img alt='' src={require(`../../assets/images/story.png`)} />
                        </div>
                        <span>مخزون</span>
                    </div>
                    <div className='eachStory'>
                        <div className='eachStoryImg'>
                            <img alt='' src={require(`../../assets/images/story.png`)} />
                        </div>
                        <span>مخزون</span>
                    </div>
                    <div className='eachStory'>
                        <img alt='' src={require('../../assets/images/add.png')} />
                    </div>
                </div>
            </section>
        </div>
    )
}