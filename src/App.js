import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      posts: []
    };
  }
  componentDidMount(){
    fetch('http://localhost:8000/api/posts/')
    .then(res => res.json())
    .then(data => this.setState({posts: data}))
  }
  render(){
    return (
      <div>
        <h1>Posts</h1>
       <p>
          {this.state.posts.map((post) => {
            return (
              <ul>
                 <h3>
                  {post.post_title}
                </h3>
                <li>
                  Post: {post.post}
                </li>
                <li>
                  UpVote: {post.upVote}
                </li>
                <li>
                  DownVote: {post.downVote}
                </li>
                <li>
                  Date: {post.date}
                </li>
              </ul>
            ); 
          })}
      </p>
      </div>
    );
    }
}

export default App;
