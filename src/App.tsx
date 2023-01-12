import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h1 class="mt-4 text-3xl font-bold underline relative left-4 ">Welcome to my Website!</h1>
        <h2 class="w-1/4 mt-4 text-l fold-words relative left-4">My name is Jeremy 
        and this is my virtual business card</h2>
      </header>
    </div>
  );
};

export default App;
