import React from 'react';

import style from './App.module.scss';
import Footer from './Pages/Footer';
import Header from './Pages/Header';
import RsideBar from './Pages/RightSideBar';
import Body from './Pages/body';

export const globalState = React.createContext();

function App() {
  let [arr, setArr] = React.useState(JSON.parse(localStorage.getItem('LocalData')) || []);

  React.useEffect(() => {
    localStorage.setItem('LocalData', JSON.stringify(arr));
  }, [arr]); 

  const ClearCart_F = (id) => {
    setArr(arr.filter((_, index) => index !== id));
  };

  return (
    <div className={style.App}>
      <globalState.Provider value={{ arr, setArr, ClearCart_F }}>
        <div className={style.LeftSection}>
          <Header />
          <Body />

          <Footer />
        </div>
      </globalState.Provider>
      <div className={style.RightSection}>
        <RsideBar />
      </div>
    </div>
  );
}

export default App;
