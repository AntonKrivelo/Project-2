import mainImg from '../../images/Main/main.jpg';
import styles from './Main.module.scss';

const Main = () => {
  console.log(mainImg);
  return (
    <div>
      <div className={styles.wrapperMain}>
        <img src={mainImg} alt="main-img" />
      </div>
    </div>
  );
};

export default Main;
