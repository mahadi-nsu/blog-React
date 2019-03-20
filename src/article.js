import React from "react";

class Article extends React.Component {
  state = {
    post: [],
    comments: []
  };

  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
    )
      .then(res => res.json())
      .then(post => {
        this.setState({
          post
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  fetchComments = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${
      this.props.match.params.id
      }/comments`
    )
      .then(res => res.json())
      .then(comments => {
        this.setState({
          comments
        });
      });
  };



  render() {
    // console.log(this.state.post);
    // console.log(this.state.comments);



    return this.state.post ? (


      <div className="container custom-container">
        <h3 className="header">Simple BLog Using JSON Placeholder API</h3>
        <hr />
        <div className="card">
          <div className="card-body">

            <div className="card-title title"><h3 className="">{this.state.post.title}</h3></div>
            <div className="card-text text-body"> <p>{this.state.post.body}</p></div>
            <button onClick={this.fetchComments} className="button-body">Comments </button>
          </div>
        </div>

        <div className="card">
          {this.state.comments ? (
            this.state.comments.map(comment => (
              <p key={comment.id}>
                <div className="card-body">

                  <div className="card-title title comment-title">
                    Name : {comment.name} <br />
                    Email :{comment.email}
                  </div>

                  <div className="card-text text-body comment-body">{comment.body}</div>

                </div>
              </p>
            ))
          ) : (
              <p>No Comments..</p>
            )}
        </div>
      </div>
    ) : (
        <h3>no post</h3>
      );
  }
}

export default Article;
