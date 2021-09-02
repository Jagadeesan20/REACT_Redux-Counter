import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/icecream/iceCreamActions'

const IceCreamContainer = (props) => {
    return (
        <div className='topic'>
            <h2 className='heading'>Number Of IceCream-{props.numOfIceCreams}</h2>
            <button className='button' onClick={props.buyIceCream}>Buy Cakes</button>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        numOfIceCreams:state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        buyIceCream:()=>dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)