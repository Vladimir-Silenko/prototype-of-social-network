import styles from './post.module.css'
let Post = (props) => {
    return <div className={styles.item}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpKwsNRW2KPoo9i4m2rulgxq7XXe9_aiC9w&usqp=CAU' />
        <span>{props.message}</span>
        <span>{props.likes}</span>
    </div>


}
export default Post;