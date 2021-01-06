import React, {useEffect} from 'react';
import styles from './App.module.scss';
import moment from "moment";
import axios from "axios";

function App() {

  useEffect(() => {
    axios.defaults.baseURL = '/api';
  }, []);

  return (
    <div>
      <div className={styles.App}>
        <div>
          {process.env.NODE_ENV}
        </div>
        <div>
          {moment().format('YYYY-MM-DD HH:mm:ssZ')}
        </div>
        <div className={styles.goodman}>Lalala Land</div>
        <div className={styles.goodman}>Lalala Land</div>
        <div className={styles.goodman}>Lalala Land</div>
        <div className={styles.goodman}>Lalala Land</div>
        <div className={styles.goodman}>Lalala Land</div>
        <div className={styles.goodman}>Lalala Land</div>
        <div className={styles.goodman}>Lalala Land</div>
      </div>
    </div>
  );
}

export default App;
