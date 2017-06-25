import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MiniTwitter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            tweetBox: '',
            tweets: [
                {id: 1, text:"I think the way we code is about to change", favorites: 0},
                {id: 2, text:"I think the longer the tweet the better. I can test if positioning of icons will break. What if I stretch this out to pretty much 140 characters?"
                        , favorites: 0
                }
                 ],
            display: 'hide',
            boxShow: 'hide',
        };
        //Login Functions
        this.userExcepted = this.userExcepted.bind(this);
        this.userChange = this.userChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        
        //Twitter Functions
        this.textBoxChange = this.textBoxChange.bind(this);
        this.favorited = this.favorited.bind(this);
    }
    userChange (e) {
        this.setState({username: e.target.value});
    }
    
    passwordChange (e) {
        this.setState({password: e.target.value});
    }
    
    textBoxChange (e) {
        this.setState({tweetBox: e.target.value});
    }
    
    ifTrue () {
        this.setState({
                display: 'show',
                username: "",
                password: ""
            });
    }
    
    ifFalse () {
        this.setState({
                username: "Insert @Username",
            });
    }
    userExcepted () {
        let username = this.state.username;
        let password = this.state.password;
        (username && password) ? this.ifTrue() : this.ifFalse();
    }
    
    showBox () {
        this.setState({boxShow: 'show'});
    }
    addTweet () {
        let tweets = this.state.tweets;
        let tweetBox = this.state.tweetBox;
        tweets.push({
            id: Math.floor((Math.random() * 150) + 1),
            text: tweetBox,
            favorites: 0
        });
        
        this.setState({tweetBox: '', tweets: tweets, boxShow:'hide'});
    }
    
    runTweet () {
        let boxShow = this.state.boxShow;
        (boxShow === 'hide') ? this.showBox() : this.addTweet();
    }
    
    favorited (id) {
        let {tweets} = this.state;
        let newTweets = tweets.map( tweet => {
            if(tweet.id === id){
                tweet.favorites = tweet.favorites + 1;
            }
            return tweet;
        });
        this.setState({tweets: newTweets});
        // let favorites = this.state.favorites;
        // this.setState({favorites:favorites + 1});
    }
    render () {
        const display = this.state.display;
        return(
          <div id = 'body'>
            <div id = "heading">
                <h1> Twitter Clone </h1>
                <SignIn user= {this.state.username} password= {this.state.password}
                userExcepted={this.userExcepted} userChange={this.userChange}
                passwordChange={this.passwordChange}/>
            </div>
            <br />
            <button id = "tweet" className= {display} 
            onClick={this.runTweet.bind(this)}> Tweet </button>
            
            <TweetList tweet = {this.state.tweets} display={this.state.display} 
            boxShow={this.state.boxShow}
            tweetBox={this.state.tweetBox} textBoxChange={this.textBoxChange}
            favorited={this.favorited}/>
         </div>
        
        );
    }
}
function SignIn  (props) {
    return(
        <div className = "sign-in">
            <input type= 'text' placeholder = 'username' value={props.user} 
           onChange={props.userChange}/>
            
            <input type= 'password' placeholder = 'password' value={props.password}
           onChange={props.passwordChange}/>
            <button className="login" onClick = {props.userExcepted}> Login </button>
        </div>
    );
}

function TweetList (props) {
    return(
        <div id= 'list' className={props.display} >
            <textarea id='tweetBox' className={props.boxShow} 
            placeholder="Whats on your mind..." value={props.tweetBox} 
            onChange={props.textBoxChange}/>
            <ul>
            {
                props.tweet.map(tweets =>{
                    return(
                        <Tweets key = {tweets.id} tweet= {tweets} 
                        favorited={props.favorited}/>
                    );
                })
            
            }
            </ul>
        </div>
    );
}

function Tweets (props) {
    const {tweet} = props; 
    return(
      <div>
        <i className="fa fa-user" aria-hidden="true"></i>
        <li>{tweet.text}</li>
        <i className="fa fa-star" aria-hidden="true" onClick={() => {props.favorited(tweet.id)}}></i>
        <span>{tweet.favorites}</span>
      </div>
    );
}

ReactDOM.render(
<MiniTwitter />, 
document.getElementById('app')
);