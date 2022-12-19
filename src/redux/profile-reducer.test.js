
import ProfileReducer, { addPostActionCreator, deletePostAC, setStatusAC } from './profile-reducer';
let state = {
    postData: [
        {
            id: 1,
            post: 'Hey! how are you?',
            likes: 24,
            created: new Date().getTime()
        },
        {
            id: 2,
            post: 'Fine',
            likes: 20,
            created: new Date().getTime()
        },
        {
            id: 3,
            post: 'When  will you  come back?',
            likes: 15,
            created: new Date().getTime()
        },
    ],
    status: ''
}
test('post should be added', () => {
    //initialisation
    let action = addPostActionCreator('new post')

    //action
    let newState = ProfileReducer(state, action)
    //expected
    expect(newState.postData.length).toBe(4)
    expect(newState.postData[3].post).toBe('new post')
});
test('length of postData should decrement after deleting', () => {
    let action = deletePostAC(1)
    let newState = ProfileReducer(state, action)
    expect(newState.postData.length).toBe(2)
})
test('status should update', () => {
    let action = setStatusAC('passed')
    let newState = ProfileReducer(state, action)
    expect(newState.status).toBe('passed')
})
