import dayjs from "dayjs";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { deletePostAC, postIsLikedAC } from "../../../../redux/profile-reducer";
import { Btn } from "../../../reusable/button";

const PostItem = styled.div`
display: flex;
padding: 10px;
margin-left: 10px;
height: 100px;
width: 550px;
background-color: rgb(229, 229, 229);
border-radius: 10px;
&& img {
    width:100px;
}
`
const PostMain = styled.div`
display:grid;
grid-template-rows:3fr 1fr;
width:100%;
padding:5px;
& span{
    font-size:14px;
}
& p{
    font-weight:500;
}
`
const Like = styled.span`
font-size:30px;
color:${props => props.liked ? 'red' : 'lightgrey'};
:hover{
    cursor:pointer;
}
`
const LikesCount = styled.span`
font-weight:bold;
color:darkblue;
`

let style = { display: 'flex', justifyContent: 'space-between' }


const Post = ({ message, time, likes, dispatch, id, isLiked, }) => {
    const userPhotoUrl = 'https://thumbs.dreamstime.com/b/%D0%BE%D1%87%D0%B5%D0%BD%D1%8C-%D1%81%D0%B5%D1%80%D1%8C%D0%B5%D0%B7%D0%BD%D1%8B%D0%B9-%D0%BC-%D0%B0-%D0%B5%D0%BD%D0%B5%D1%86-39968623.jpg'
    let [liked, setLike] = useState(isLiked)
    let [likesCount, setLikesCount] = useState(likes)
    const profile = useSelector(state => state.profile.profile)
    const likePost = (itemId) => {
        liked ? setLike(false) : setLike(true)
        !liked ? setLikesCount(likesCount + 1) : setLikesCount(likesCount - 1)
        dispatch(postIsLikedAC(liked, itemId, likesCount))

    }

    const deleteMessage = (postId) => {
        dispatch(deletePostAC(postId))
    }
    return <PostItem>
        <img style={{ borderRadius: '10px' }} src={profile ? profile.photos.small : userPhotoUrl} />
        <PostMain>
            <p>{message}</p>
            <span style={style}>
                <div> <Like liked={liked} onClick={() => likePost(id)}>♥</Like><LikesCount> {likesCount}</LikesCount> people liked this</div>
                <span>{dayjs(time).format('D.MMM HH:mm')}</span>
                <Btn id={id} onClick={(e) => deleteMessage(e.target.id)} style={{ margin: '0' }}>Delete</Btn>
            </span>
        </PostMain>
    </PostItem>


}
export default Post;
