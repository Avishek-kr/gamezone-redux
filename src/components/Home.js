import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadGames } from '../actions/gameActions'

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('hello')
    //   dispatch(loadGames());
    }, [])
    
  return (
    <div>Home Boy</div>
  )
}

export default Home