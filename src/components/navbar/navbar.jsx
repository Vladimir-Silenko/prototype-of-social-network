import { NavLink, useParams } from 'react-router-dom'
import Friendlist from './friendlist/Friendlist'
import classes from './navbar.module.css'
let Navbar = (props) => {
    const params = useParams()
    let userId = params.userId
    if (!userId) { userId = '2' }
    let classNames = require('classnames')
    let classSwitch = navData => navData.isActive ? classNames(classes.item, classes.activeLink) : classes.item
    return <div>
        <nav className={classes.nav}>

            <div ><NavLink to={`profile/` + userId} className={classSwitch} >Profile</NavLink></div>
            <div ><NavLink to="dialogs" className={classSwitch} >Messages</NavLink></div>
            <div ><NavLink to="news" className={classSwitch} >News</NavLink></div>
            <div ><NavLink to="music" className={classSwitch} >Music</NavLink></div>
            <div ><NavLink to="settings" className={classSwitch} >Settings</NavLink></div>
            <div ><NavLink to="Users" className={classSwitch} >Users</NavLink></div>
        </nav>
        <Friendlist friendsData={props.friendsData} />
    </div>
}
export default Navbar