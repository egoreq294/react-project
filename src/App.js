import React from 'react';
import styles from './App.module.css'
import Header from './components/header/Header'
import CardSection from './components/cardField/CardSection';


function App() {
  return (
    <div className={styles.wrapper}>
      <header id='header'>
        <Header />
      </header>
      <section id='cards'>
        <CardSection />
      </section>
    </div>
  );
}

export default App;
