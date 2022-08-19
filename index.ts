// Import stylesheets
import './style.css';

import SingletonClass from './Practice-components/Singleton-Class/singleton-class';

function DisplaySingletonobjects() {
  const singletonObject1 = SingletonClass.getInstance();
  singletonObject1.selectedData='Abhay Pratap Singh';
  const singletonObject2 = SingletonClass.getInstance();

  console.log(
    'Your created singleton objects:',
    singletonObject1.selectedData
  );
}

DisplaySingletonobjects();
