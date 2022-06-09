import React, { useContext } from 'react';

import { globalState } from '../App';
import style from './Styles/button.module.scss';

export default function AddToCard() {
  let { arr, setArr } = useContext(globalState);

  let addCart_F = () => {
    let rand = Math.floor(Math.random() * 100);

    let newRand = [...arr, rand];
    setArr(newRand);
  };

  return (
    <button className={style.root} onClick={addCart_F}>
      Add Card
    </button>
  );
}
