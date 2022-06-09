import React from 'react';

import style from './rsideBar.module.scss';

export default function RsideBar() {
  return (
    <div className={style.root}>
      <p>
        Press the " add card " button to add the new Card . Use the " sort cards " button to sort
        the Cards by the increase . Press an X icon on the top right to delete them.
      </p>
    </div>
  );
}
