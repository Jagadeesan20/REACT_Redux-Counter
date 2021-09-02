import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

const CakeContainer = (props) => {
    return (
        <div className='topic'>
            <h2 className='heading'>Number Of Cakes-{props.numOfCakes}</h2>
            <button className='button' onClick={props.buyCake}>Buy Cakes</button>
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
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
