import React, {ChangeEvent} from "react";
import classNew from './MyPosts.module.css'
import Post from "./Post/Post";
import {PropsForProfileType} from "./MyPostsContainer";

const MyPosts = React.memo((props: PropsForProfileType) => {
    console.log('2222')
    let displayNewPost = props.profilePage.posts.map(t => <Post key={t.id} message={t.post}
                                                                numberOfLikes={t.likesCount}
                                                                profilePage={props.profilePage}/>)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)

    }
    const addPostHandler = () => {
        if (props.profilePage.newPostText.trim()) {
            props.addPost()
        }
    }

    return (
        <div>
            <div className={classNew.postsEditor}>
                <h3>New Post</h3>
                <div>
                    <textarea value={props.profilePage.newPostText} onChange={onChangeHandler}>

                    </textarea>
                    <div>
                        <button onClick={addPostHandler}>Add post</button>
                    </div>
                </div>
            </div>
            <div className={classNew.posts}>
                {displayNewPost}
            </div>
        </div>
    )
})

export default MyPosts;