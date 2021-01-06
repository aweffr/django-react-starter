import React from 'react';
import styles from './App.module.scss';

function App() {
  return (
    <div>
      <div className={styles.App}>
        <div>
          {process.env.NODE_ENV}
        </div>
        <div>
          Lalala Land
        </div>
      </div>
    </div>
  );
}

export default App;
