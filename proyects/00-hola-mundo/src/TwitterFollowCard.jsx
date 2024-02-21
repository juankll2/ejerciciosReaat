import { useState } from "react"

export function TwitterFollowCard ({ userName, name}){

    //Crear un estado para cambiar el estado del boton visualmente
    const [isFollowing, setIsFollowing] = useState(false)
    // Este es un estado interno para cada componente
    const handleClick = () =>{
        setIsFollowing (!isFollowing)
    }


   //Ternarias
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    console.log(isFollowing)
    const imgSrc = `https://unavatar.io/instagram/${userName}`
    return(
        <article className="tw-followCard ">
            <header className="tw-followCard-header">
                <img 
                className='tw-followCard-avatar'
                alt="Imagen o avatar de perfil" 
                src={imgSrc}/>
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>
                    @{userName}
                </span>
            </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}