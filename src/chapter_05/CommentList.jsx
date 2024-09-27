import React from "react";
import Comment from "./Comment";

const comments = [

    {
        name: "조병철",
        comment: "안녕하시라요"
    },

    {
        name: "김진우",
        comment: "인사하지마라"
    },

    {
        name: "조병철",
        comment: "왜 시비 턺"
    },
    
];

function CommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return(
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;