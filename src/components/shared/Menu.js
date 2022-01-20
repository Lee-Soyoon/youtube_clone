import styles from './Menu.module.css';
import { Link } from 'react-router-dom';
import { TiHome } from 'react-icons/ti';
import { FaRegCompass } from 'react-icons/fa';
import { MdSubscriptions } from 'react-icons/md';
import { MdMapsHomeWork } from 'react-icons/md';


function Menu({activeMenu}) {
    console.log("활성화된 메뉴 ",activeMenu);
    return (
        <div className={styles.menu}>
                <Link to="/" className={activeMenu === 'home' ? styles.focused:styles.link}>
                    <TiHome className={styles.icon}></TiHome>홈
                </Link>
                <Link to="/explore" className={activeMenu === 'explore' ? styles.focused:styles.link}>
                    <FaRegCompass className={styles.icon}></FaRegCompass>탐색
                </Link>
                <Link to="/subscription" className={activeMenu === 'subscription' ? styles.focused:styles.link}>
                    <MdSubscriptions className={styles.icon}> </MdSubscriptions>구독
                </Link>
                <Link to="/homework" className={activeMenu === 'homework' ? styles.focused:styles.link}>
                    <MdMapsHomeWork className={styles.icon}></MdMapsHomeWork> 과제
                </Link>
        </div>
    );
}

export default Menu;

