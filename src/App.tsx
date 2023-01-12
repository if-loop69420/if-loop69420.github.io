import type { Component } from 'solid-js';

import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h1 class="mt-4 text-3xl font-bold underline relative left-4 ">Welcome to my Website!</h1>
        <h2 class="md:w-1/2 md:1/4 xl:1/4 2xl:1/4 mt-4 text-l relative left-4 fold-words">My name is Jeremy 
        and this is my virtual business card</h2>
        <h3 class="mt-4 relative left-4 fold-words">Here are some quick facts about me:</h3>
        <div id="about" class="relative left-12 text-m">
          <ul class="list-disc mt-1/16 fold-words w-1/3">
            <li>I was born 2005 and raised in Austria</li>
            <li>I am currently a student at HTBLuVa Wiener Neustadt</li>
            <li>I worked in Barcelona(Spain) for 6 weeks in 2022 through ERASMUS</li>
            <li>I do robotics with my great team "Anubis" and we partake in Competitions every year</li>
          </ul>
        </div>
        <div id="skills" class="mt-8 w-1/2 fold-words relative text-left place-self-end right-4">
          <h3 class="mt-4 relative left-4 fold-words">Over the years I've been programming I have developed skills in these fields/languages:</h3>
          <ul class="list-disc mt-2 fold-words w-1/2 relative left-12 text-left">
            <li>HTML+CSS</li>
            <li>JavaScript/ TypeScript</li>
            <li>Elixir(Phoenix)</li>
            <li>C/C++</li>
            <li>Rust</li>
            <li>Java</li>
            <li>SQL(Microsoft SQL Server/Postgres)</li>
            <li>Building Fullstack Web-Applications</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default App;
