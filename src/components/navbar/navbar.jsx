import { NavLink } from 'react-router-dom'
import Friendlist from './friendlist/Friendlist'
import classes from './navbar.module.css'
let Navbar = (props) => {
    let classNames = require('classnames')
    let classSwitch = navData => navData.isActive ? classNames(classes.item, classes.activeLink) : classes.item
    return <div>
        <nav className={classes.nav}>

            <div ><NavLink to="profile" className={classSwitch} >Profile</NavLink></div>
            <div ><NavLink to="dialogs" className={classSwitch} >Messages</NavLink></div>
            <div ><NavLink to="news" className={classSwitch} >News</NavLink></div>
            <div ><NavLink to="music" className={classSwitch} >Music</NavLink></div>
            <div ><NavLink to="settings" className={classSwitch} >Settings</NavLink></div>
        </nav>
        <Friendlist friendsData={props.friendsData} />
    </div>
}
export default Navbar