import React from 'react'
// import { Link } from 'react-router-dom'
// import MostRecentSmoked from './JournalRoutes/MostRecentSmoked.js'

import './Cards.css'

function Cards ({ user, msgAlert }) {
  return (
    <div className='cards'>
      {/* { user && <MostRecentSmoked user={user} msgAlert={msgAlert} />} */}
      <h1>The support system to help you succeed on your journey.</h1><hr />
      <div className='cards__container'>
        <div className='cards__wrapper'>
          { /* }{ user && <button><Link to={'/journal-create'}>Test button</Link></button> } */}
          { !user && <h2>Sign up and join the movement today!</h2> }
        </div>
      </div>
    </div>
  )
}

export default Cards
