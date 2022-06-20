// Import stylesheets
import './style.css';
import * as React from 'react';
function Hello(){
  return <div></div>
}
// Write TypeScript code!
let myDiv: JSX.Element;
let C1 = (): JSX.Element => <div>test</div>;
let c1 = <C1 />;

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
