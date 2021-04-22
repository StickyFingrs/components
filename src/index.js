import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker'; // used to generate fake images for avatars
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h1>
                    Warning!
                </h1>
                <div>
                    Are you sure about that?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    authorAvatar={faker.image.avatar()}
                    author="Sam"
                    timeAgo="Today at 1856hrs"
                    commentText="Hello!"
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    authorAvatar={faker.image.avatar()}
                    author="Gordon"
                    timeAgo="Today at 2136hrs"
                    commentText="Is it me?"
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    authorAvatar={faker.image.avatar()}
                    author="Mike"
                    timeAgo="Today at 2359hrs"
                    commentText="You're looking for?"
                />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));