import React, { useContext } from 'react';
import { globalState } from '../../App';
import Card from '../../Components/Card';

import style from './body.module.scss';

export default function Body() {
  let { arr, ClearCart_F } = useContext(globalState);

  return (
    <div className={style.root}>
      {arr &&
        arr.map((item, index) => {
          return <Card key={index} title={item} id={index} ClearCart_F={ClearCart_F} />;
        })}
    </div>
  );
}
