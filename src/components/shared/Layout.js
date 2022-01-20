import styles from './Layout.module.css';
import Header from './Header';
import Menu from './Menu';
import { useState } from 'react';

function Layout({children, activeMenu}) {
    const [click, setClick] = useState(true);


    function onClickMenu() {
        setClick(click => !click );
        console.log(click);
    }
    return (
        <div className={styles.container}>
            <Header onClickMenu={onClickMenu}></Header>
            <div className={styles.layout}>
                {click ? <Menu activeMenu={activeMenu}></Menu> : <div></div> } 
            <div className={styles.contents}>{children}</div>
            </div>
        </div>
    );
}

export default Layout;