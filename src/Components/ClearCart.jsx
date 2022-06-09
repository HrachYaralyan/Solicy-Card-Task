import React from 'react'
import style from "./Styles/card.module.scss"

export default  function ClearCart({id ,ClearCart_F}) {
 

  return (
    <button className={style.button} onClick={()=>ClearCart_F(id)}>X</button>
  )
}

