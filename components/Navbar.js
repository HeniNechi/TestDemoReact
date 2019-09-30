import React ,{Component} from 'react'


class Navbar extends Component {
    
    render(){
        return (
        
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
          <a className="navbar-brand" href="https://www.google.com/search?q=movies+cards">
            <i className="fa fa-film fa-3x" ></i>
            <h1>Movie Cards</h1>
            </a>
          </div>
        </div>
      </nav>
    );
}
}
export default Navbar
