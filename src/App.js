import React from 'react';
import Header from './components/header/Header'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.wrapper}>
      <header>
        <Header />
      </header>
    </div>
  );
}

export default App;
