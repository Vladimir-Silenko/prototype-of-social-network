
import Post from './post/Post';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useEffect } from 'react';

const PostContainer = styled.div`
overflow: scroll;
display: grid;
grid-template-rows: 1fr 1fr 1fr 1fr;
grid-gap: 10px;
padding: 10px;  
width:80%;
}
`
const MyPosts = (props) => {
    let posts = useSelector(state => state.profile.postData)
    const dispatch = useDispatch()
    posts = posts.map(p => (
        <Post
            time={p.created}
            id={p.id}
            key={p.id} message={p.post}
            likes={p.likes}
            isLiked={p.isLiked}
            dispatch={dispatch}
        />))
    return <PostContainer>
        {posts}
    </PostContainer>


}
export default MyPosts;