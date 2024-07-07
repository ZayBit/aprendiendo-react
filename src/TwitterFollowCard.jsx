import { useState } from 'react';

export function TwitterFollowCard({name,username,initialIsFollowing}){

    const [isFollowing,setFollowing] = useState(initialIsFollowing)
    // let [count,setCount] = useState(0)

    const handleClick = ()=>{
        setFollowing(!isFollowing)
    }

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = 
    isFollowing ? 'tw-followCard--button-following' 
    : '';

    return (
        <article className='tw-followCard'>
            <header>
                <img className='tw-followCard-avatar' alt="El avatar de midudev" src={`https://unavatar.io/${username}`} />
                <div className='tw-followCard-info'>
                    <strong>{ name }</strong>
                    <span className='tw-followCard-infoUsername'>@{ username }</span>
                </div>
            </header>
            <aside>
                <button onClick={ ()=>{handleClick()} } className={`tw-followCard-button ${buttonClassName}`}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>

        </article>
    )
}