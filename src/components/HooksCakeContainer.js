import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../redux'

const HooksCakeContainer = () => {
    const numOfCakes=useSelector(state=>state.cake.numOfCakes)
    const dispatch=useDispatch()
    return (
        <div className='topic'>
            <h2 className='heading'>Num Of Cakes-{numOfCakes}</h2>
            <button className='button' onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
