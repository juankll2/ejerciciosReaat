import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){

    const juank = {isFollowing: true, userName: "Juankll", name:"Juan Carlos LAzo"}
    //Solo cuando el objeto es muy grande 
    //Por lo general es mala practica
        //Enviando muchas veces informacion que no es necesaria
        //Puede hacer que el componente por temas de optimizacion se renderice sin necesidad
        //puede ser mas complejo entender que informacion le esta llegando al componente
        
    // const format = (userName) => `@${userName}` 

    // const formattedUserName = <span>@{userName} </span>
    return(
    <section className='App'>
        <TwitterFollowCard 
           {...juank}/>
        <TwitterFollowCard 
            // formatUserName={fromat} 
            // isFollowing={false} 
            userName={"eli_lopez0193"} 
            name={"ELisa Lopez Toledo"}/>
        <TwitterFollowCard 
            // formatUserName={format} 
            // isFollowing //No es necesario poner true  
            userName={"CarlitosP"} 
            name={"Carlos Patricio Pelaez"}/>
      </section>
    )
}

