import classNew from "./Post.module.css";
import React from "react";

type PostTypes = {
    message: string
    numberOfLikes: number
}

function Post(props: PostTypes) {
    return (
        <div className={classNew.item}>
            <img
                src="data:image/jpeg;base64,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"
                alt="ava"/>
            {props.message}
            <div>
                <span>Likes: {props.numberOfLikes}</span>
            </div>
        </div>
    )
}

export default Post;