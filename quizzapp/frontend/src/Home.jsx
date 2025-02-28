import React from 'react'
import backimg from './3.jpg'

function Home(){
    return (
        <div className="w-screen h-screen bg-custom-bg bg-cover bg-center">
        
        <img src={backimg} alt='background'className="w-full h-full object-cover"></img>
        <h1>Welcome home</h1>
        </div>
        
    )
}
export default Home