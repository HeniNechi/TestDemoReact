import React, { Component } from "react";
import {
 CardHeader,
  CardSubtitle,
  Button
} from "reactstrap";

class MovieList extends Component {
render(){
    let { id, title, category, likes, dislikes } = this.props.movie;
    return (
      <div className="card my-4">
         <CardHeader>
              <strong>{title}</strong>
            </CardHeader>
        
        <div className="card-body">
          <div className="subs"> <CardSubtitle>{category}</CardSubtitle> </div>
          <div className="pdanger">
          &nbsp;
              <Button onClick={() => this.props.likeMe(id)}>
                {" "}
                👍  {likes}
              </Button>{" "}
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              <Button onClick={() => this.props.dislikeMe(id)}>
                {" "}
                👎  {dislikes}
              </Button>
              </div>
              <div className="danger">
               <Button color="danger" onClick={() => this.props.removeMovie(id)}>
                Delete
              </Button>
              </div>
        </div>
      </div>
     );
  };
 }

export default MovieList;
