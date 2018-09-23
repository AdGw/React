import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let Tweet = () =>(
    <div className = "tweet">
    
        <Avatar/>
        <div className = "content">
            <Name/>
            <Time/>
            <Message/>
            <div className = "buttons">
                <ReplyButton/>
                <RetweetButton/>
                <LikeButton/>
                <MoreOptionsButton/>
            </div>
        </div>
        Tweet
    </div>
);


let Avatar = () =>(
    <img src = "https://www.gravatar.com/avatar/nothing" className = "avatar" alt = "avatar"/>
);


let Message = () =>(
    <div className = "message">
        This is less than 140 character long
    </div>
);


let Name = ()=>(
    <span className = "name-with-handle">
        <span className = "name">Your Name</span>
        <span className = "handle">@youthandle</span>
    </span>
);

const Time =()=>(
    <span className = "time">3h ago</span>
);
const ReplyButton =()=>(
    <i className = "fa fa-reply reply-button"/>
);
const RetweetButton =()=>(
    <i className = "fa fa-retweet retweet-button"/>
);
const LikeButton =()=>(
    <i className = "fa fa-heart like-button"/>
);
const MoreOptionsButton =()=>(
    <i className = "fa fa-ellapsis-h more-options-button"/>
);

ReactDOM.render(<Tweet />, document.getElementById('root'));
