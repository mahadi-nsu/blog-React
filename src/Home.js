import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//css
import './App.css';

class Home extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts => {
        this.setState({
          posts
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const posts = this.state.posts;

    return (
      <Fragment>
        <div className="container custom-container">
          <h3 className="header">Simple BLog Using JSON Placeholder API</h3>
          <hr />

          <div className="card">

            {posts ? (
              posts.map(post => (
                <p key={post.id}>
                  <div className="card-header"><h1>User {post.userId}</h1></div>
                  <div className="card-body">
                    <Link to={`/${post.id}`}>

                      <div className="card-title title">{post.title} </div>

                    </Link>
                    <div className="card-text text-body"><p>{post.body}</p> </div>
                    <Link to={`/${post.id}`}>
                      <button className="button-body">See details</button>
                    </Link>
                  </div>
                </p>
              ))
            ) : (
                <p>Loading ...</p>
              )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
