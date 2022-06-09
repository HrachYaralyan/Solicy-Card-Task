import React from 'react';
import AddToCard from '../../Components/AddToCard';
import SortCard from '../../Components/SortCard';

import style from './header.module.scss';

export default function Header() {
  return (
    <div className={style.root}>
      <AddToCard />
      <SortCard />
    </div>
  );
}
