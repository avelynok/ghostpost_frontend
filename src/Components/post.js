import React from "react";
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react'

class NewPost extends React.Component {
    Post_title = (event) => {
        this.setState({ post_title : event.target.value });
    };  
    Post_type = () => {
        this.setState({ post_type: true });
    };
    Post = (event) => {
        this.setState({ post: event.target.value });
    };

    Newpost = () => {
        fetch("http://localhost:8000/api/posts/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            post_title : this.state.post_title,
            post_type: this.state.post_type,
            post: this.state.post,
        }),
        });
    };

    Submit = (event) => {
        event.preventDefault();
        this.Newpost();
    };

    render() {
        return (
            <React.Fragment>
            <Segment
              style={{
                width: "70%",
                margin: "0 auto",
                backgroundColor: "transparent"
              }}
            >
                
            <Form onSubmit={this.Submit}
            style={{ width: "60%", margin: "20px auto" }}>
                <Form.Field>
                <label>Title</label>
                <input placeholder='Boast or Roast' 
                        value={this.props.post_title}
                        onChange={this.Post_title}
                />
                </Form.Field>
                <Form.Field>
                <label>Post</label>
                <input value={this.props.post}
                        onChange={this.Post} />
                </Form.Field>

                <Form.Field>
                <Checkbox label='Check if Boast'
                            value={this.props.post_type}
                            onChange={this.Post_type}
                />
                </Form.Field>
                <Button type='submit'>Post</Button>
            </Form>
            </Segment>
            </React.Fragment>
        );
    }
    }

export default NewPost;