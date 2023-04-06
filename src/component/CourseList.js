import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import CourseItem from "./CourseItem"
import  {clearCard}  from '../control/cardSlice'; 


function CourseList() {
  const dispatch = useDispatch();
  const {cardItems,quantity,total} = useSelector((store)=> store.card);

  return (
    <div>
    {
    quantity  < 0 ? (
        <section className='card'>
          <header>
            <h2>Sepetim</h2>
            <h4>Bomboş</h4>
          </header>
        </section>
    ) : (
            <section className='card'>
              <header>
                <h2>Sepetim</h2>
                <div>
                    {cardItems.map((item)=> {
                        return <CourseItem key={item.id} {...item}/>
                    })}
                </div>
                <footer>
                    <hr />
                    <div>
                        <h4>Toplam Tutar <span>{total} TL</span></h4>
                    </div>
                    <button className='cardClearButton'
                     onClick={()=> dispatch(clearCard())}>Temizle</button>
                </footer>
              </header>
            </section>
    )
}
    </div>
  );
}
export default CourseList
