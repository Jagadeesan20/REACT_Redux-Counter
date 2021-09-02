import React,{useState} from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

const NewCakeContainer = (props) => {
    const[number,setNumber]=useState(1)
    return (
        <div className='topic'>
            <h2 className='heading'>Number Of Cakes-{props.numOfCakes}</h2>
            <input className='input'type='text' value={number} onChange={e=>setNumber(e.target.value)}></input>
            <button className='button' onClick={()=>props.buyCake(number)}>Buy{number}Cakes</button>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        numOfCakes:state.cake.numOfCakes
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        buyCake:(number)=>dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)
