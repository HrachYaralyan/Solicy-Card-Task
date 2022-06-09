import React, { useContext } from 'react';

import { globalState } from '../App';
import style from './Styles/button.module.scss';

export default function SortCard() {
  let { arr, setArr } = useContext(globalState);

  const SortCard_F = () => {
    let newArr = [...arr];
    newArr.sort(function (a, b) {
      return a - b;
    });

    setArr(newArr);
  };

  return (
    <button className={style.root} onClick={SortCard_F}>
      Sort Cards
    </button>
  );
}
