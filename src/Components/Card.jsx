import React from 'react';
import ClearCart from './ClearCart';
import style from './Styles/card.module.scss';

export default function Card({ title, id, ClearCart_F }) {
  return (
    <>
      <div className={style.root}>
        <div className={style.butEnd}>
          <ClearCart id={id} ClearCart_F={ClearCart_F} />
        </div>
        <h1>{title}</h1>
      </div>
    </>
  );
}
