import { useEffect, useState } from 'react';
import styles from './Courses.module.scss';

const Courses = () => {
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/simple/price?ids=bitcoin,ethereum,&vs_currencies=usd`)
      .then((res) => res.json())
      .then((json) => setCurrencies(json));
  }, []);

  return (
    <div>
      <div className={styles.blockCours}>
        <p>BTC: {currencies.bitcoin?.usd} $</p>
        <p>ETH: {currencies.ethereum?.usd} $</p>
      </div>
    </div>
  );
};

export default Courses;
