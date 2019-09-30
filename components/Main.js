import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import MovieList from "./MovieList";
import Pagination from "react-js-pagination";
import Filter from './Filter';
import {Provider} from 'react-redux';
import store from './store';
class Main extends Component {  
   constructor(state) {
    super(state);
    this.handleChangeCategory =this.handleChangeCategory.bind(this);
    
      this.state = {
        categories:[],
        activePage: 1,
      movies: [
        {
          id: "1",
          title: "Oceans 8",
          category: "Comedy",
          likes: 4,
          dislikes: 1
        },
        {
          id: "2",
          title: "Midnight Sun",
          category: "Comedy",
          likes: 2,
          dislikes: 0
        },
        {
          id: "3",
          title: "Les indestructibles 2",
          category: "Animation",
          likes: 3,
          dislikes: 1
        },
        {
          id: "4",
          title: "Sans un bruit",
          category: "Thriller",
          likes: 6,
          dislikes: 6
        },
        {
          id: "5",
          title: "Creed II",
          category: "Drame",
          likes: 16,
          dislikes: 2
        },
        {
          id: "6",
          title: "Pulp Fiction",
          category: "Thriller",
          likes: 12333,
          dislikes: 32
        },
        {
          id: "7",
          title: "Seven",
          category: "Thriller",
          likes: 2,
          dislikes: 1
        },
        {
          id: "8",
          title: "Inception",
          category: "Thriller",
          likes: 2,
          dislikes: 1
        },
        {
          id: "9",
          title: "Gone Girl",
          category: "Thriller",
          likes: 22,
          dislikes: 12
        }
      ]
      };
    }
likeMe = id => {
    var index = this.state.movies.findIndex(movie => movie.id === id);
    if (index === -1) {
      // handle error
    } else {
      this.setState({
        movies: [
          ...this.state.movies.slice(0, index),
          Object.assign({}, this.state.movies[index], {
            likes: this.state.movies[index].likes + 1
          }),
          ...this.state.movies.slice(index + 1)
        ]
      });
    }
  };
dislikeMe = id => {
    var index = this.state.movies.findIndex(movie => movie.id === id);
    if (index === -1) {
      // handle error
    } else {
      this.setState({
        movies: [
          ...this.state.movies.slice(0, index),
          Object.assign({}, this.state.movies[index], {
            dislikes: this.state.movies[index].dislikes + 1
          }),
          ...this.state.movies.slice(index + 1)
        ]
      });
    }
  };
removeMovie(id) {
     if((this.state.movies.length === this.state.SelectedCardNumber*this.state.activePage-(this.state.SelectedCardNumber-1)) &&(this.state.activePage !==1))
    {
    this.setState({
  activePage:this.state.activePage-1
});
    }
this.setState({
      movies: this.state.movies.filter(movie => movie.id !== id)
    });
     } 
renderCardNumber(){
    return(
      
      <div className="text-center sticky-bottom fixed-bottom">
      <div className="text-center ">
                       <select data-style="btn-new" className="mdb-select md-form Sticky"  onChange={(e) => {this.setState( {SelectedCardNumber: e.target.value})} } defaultValue="">
        <option value="" disabled >Cards Number</option>
        <option value="4" >4 </option>
        <option value="8">8</option>
        <option value="12">12</option>
      </select> 
      </div>
      </div>
    );
  }
handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
    }
handleChangeCategory(e){
    this.setState({categories: e.target.value});
    this.ListMovies();
  }
ListMovies(){
 if(this.state.categories!=="")
{
  return {filterdCards : this.state.movies.filter(movie=>
    this.state.movie.category.indexOf(this.state.categories)>=0
    )};
}
  
return{filterdCards:this.state.movies}
}
 
 
render() {
  
    for(let i=0;i<this.state.movies.length;i++)
      {
      this.state.categories.push(this.state.movies[i].category)
      }

let indexOfLastTodo = parseInt(this.state.activePage) * parseInt(this.state.SelectedCardNumber);
let indexOfFirstTodo = indexOfLastTodo - this.state.SelectedCardNumber;


if (this.state.movies.length+this.state.SelectedCardNumber<=this.state.SelectedCardNumber &&(this.state.activePage!==1))
{
  this.setState({activePage:this.state.activePage-1});
}


if (typeof this.state.SelectedCardNumber == "undefined")
{
  indexOfFirstTodo=0;
  indexOfLastTodo=12;
  this.setState.activePage=1;
} else
{
  indexOfLastTodo = this.state.activePage * this.state.SelectedCardNumber;
  indexOfFirstTodo = indexOfLastTodo - this.state.SelectedCardNumber;
}
var renderedCards = this.state.movies.slice(indexOfFirstTodo, indexOfLastTodo);
let MovieLists = renderedCards.map(movie => {
      return (
        
          <Col key={movie.id}>
            <MovieList
             
              removeMovie={this.removeMovie.bind(this)}
              movie={movie}
              likeMe={this.likeMe.bind(this)}
              dislikeMe={this.dislikeMe.bind(this)} 
              
            />
          </Col>
         );
    });
    return (
      //<Provider store={store}>
      <Container fluid className="text-center">
       <Filter categories={this.state.categories} handleChangeCategory={this.handleChangeCategory} />
        <Row>{MovieLists}</Row>
        <div className="text-center sticky-bottom fixed-bottom ">
        <Pagination 
          key={this.state.activePage}
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.SelectedCardNumber}
          totalItemsCount={this.state.movies.length}
          pageRangeDisplayed={0}
          onChange={this.handlePageChange.bind(this)}
        />
        </div>
   {this.renderCardNumber()}
</Container>
//</Provider>
      );
      
      
   };
}

export default Main;
