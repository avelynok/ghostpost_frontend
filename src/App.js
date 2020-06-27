import React from 'react';
import './App.css';
import { Button, Card,Icon} from 'semantic-ui-react'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      posts: [],
    };
  }
  
  handleCreate = event => {
    if (event.key === "Enter") {
      console.log(event.target.value)
      const post = {
        id: Math.floor(Math.random() * 100000000),
        post_title: event.target.value,
        post_type: false
      };
      const newPost = [...this.state.posts];
      newPost.push(post);
      this.setState({ posts: newPost });
    }
  };

  componentDidMount(){
    fetch('http://localhost:8000/api/posts/')
    .then(res => res.json())
    .then(data => this.setState({posts: data}))
  }

  Posts=()=>{
    fetch('http://localhost:8000/api/posts/')
    .then(res => res.json())
    .then(data => this.setState({posts: data}))
 }
  
  Boast = () => {
    fetch('http://127.0.0.1:8000/api/posts/boast/')
    .then(res => res.json())
    .then(data => this.setState({posts: data}))
  }

  Roast = () => {
    fetch('http://127.0.0.1:8000/api/posts/roast/')
    .then(res => res.json())
    .then(data => this.setState({posts: data}))
  }

  Upvote = (id) => {
    let res ={method: "GET"}
    fetch(`http://localhost:8000/api/posts/${id}/upVote/`, res)
    this.Posts()
  }

  Downvote = (id) => {
    let res ={method: "GET"}
    fetch(`http://localhost:8000/api/posts/${id}/downVote/`, res)
    this.Posts()
    window.location.reload()
  }
  
  Totalvote = () => {
    fetch('http://127.0.0.1:8000/api/posts/totalVote/')
    .then(res => res.json())
    .then(data => this.setState({posts: data}))
  }

  render(){
    return (
      <React.Fragment>
      <div>
        <h1>Posts</h1>
        <Button onClick={this.Posts}>Home</Button>
        <Button onClick={this.Boast}> Boasts</Button>
        <Button onClick={this.Roast}> Roasts</Button>
        <Button onClick={this.Totalvote}>Most Popular</Button>
       <p>
          {this.state.posts.map((post) => {
            return (
              <React.Fragment style={{ padding: "8px 14px", textAling:'center'}}>
              <Card style={{ padding: "8px 14px", width:'383px' }}>
              <Card.Content>
                <Card.Header>{post.post_title}</Card.Header>
                <Card.Description style={{ }}>
                <h5>{post.post}</h5>
                </Card.Description>
                <Card.Meta>{post.date}</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                  <Button onClick={()=>this.Upvote(post.id)}
                  size='small'
                  basic color='green'>
                  <Icon name='thumbs up' />
                  {post.upVote}
                  </Button>
                  <Button onClick={()=>this.Downvote(post.id)} 
                  size='small'
                  basic color='red'>
                  <Icon name='thumbs down' />
                  {post.downVote}
                  </Button>
                  <Button 
                  size='small'
                  basic color='blue'>
                  Total: {post.totalVote}
                  </Button>
              </Card.Content>
            </Card>
            </React.Fragment>
            ); 
          })}
      </p>
      </div>
      </React.Fragment>
    );
    }
}

export default App;


