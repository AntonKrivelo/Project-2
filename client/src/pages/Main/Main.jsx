import Courses from '../../components/Courses/Courses';
import mainImg from '../../images/Main/main2.jpg';

import styles from './Main.module.scss';

const Main = () => {
  return (
    <div>
      <div className={styles.wrapperMain}>
        <img src={mainImg} alt="main-img" />
      </div>
      <Courses />
    </div>
  );
};

export default Main;
