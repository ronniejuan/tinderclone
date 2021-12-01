import React, { useState, useEffect } from 'react'
import TinderCard from "react-tinder-card"
import database from "./firebase"
import  './TinderCards.css'



function TinderCards() {
    const [people, setPeople] =useState([
        {
            name: 'steve morse',
            url:'https://m.media-amazon.com/images/I/61tQsTqP+-L.jpg', 
        },
        {
            name: 'steve vai',
            url:'https://www.nme.com/wp-content/uploads/2021/02/GettyImages-1200436023.jpg',
        },
    ])

    // Piece of code wich runs based on a condition

    useEffect (()=>{
        //this is where the code runs...

        //this will run ONCE when the componen loads, and never
        database.collection('people')
        .onSnapshot(snapshot => 
         setPeople(snapshot.docs.map(doc => doc.data())
        ))

            return()=>{
                //this is the cleanup...
               
            }

    },[])

    


    return (
        <div>
            <h1></h1>

            <div className='tinderCards__cardContainer' > 
            
            
            

            {people.map((person) =>(
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up','down']}
                >
                <div 
                style={{ backgroundImage:`url(${person.url})`}}
                className="card">
                    <h3>{person.name}</h3>
                </div>
                </TinderCard>
            ))}

         </div>
        </div>
    )
}

export default TinderCards
