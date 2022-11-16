import Header from './header';
import styles from './header.module.css'
const HeaderContainer = (props) => {
    return <div className={styles.header}>
        <Header />
    </div>
}
export default HeaderContainer;