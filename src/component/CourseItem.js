import React from 'react'
import { BsChevronUp,BsChevronDown } from "react-icons/bs"
import {useDispatch} from 'react-redux';
import { removeItem ,increase,downrease } from '../control/cardSlice';


function CourseItem({id, title, price, img, quantity}) {
    const dispatch = useDispatch();
  return (
    <div className='carditem'>
       <img src={img} alt=""/>
       <div className='cardinfo'> 
            <h4>{title}</h4>
            <h4>{price} TL</h4>
            <div>
           <button className='cardquantitybutton'onClick={()=>{dispatch(increase(id))}}><BsChevronUp/></button>
           <p className='quantity'>{quantity}</p>
           <button className='cardquantitybutton' onClick={()=> {dispatch(downrease(id))}}><BsChevronDown/></button>
           </div>
           <button className='quantityclearbutton' onClick={()=>{dispatch(removeItem(id))}}>Sil</button>
        </div>

    </div>
  )
}

export default CourseItem;
