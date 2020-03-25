import React from 'react';
import { Link , Redirect } from 'react-router-dom';
import MoveList from '../Movies/ArrayList';
import './Details.css';


class Details extends React.Component {

  constructor() {
    super();
    this.state = {
      showMovie: {}
    };
  }

  componentDidMount() {
	  let showOrMovieId = this.props.match.params.details;
	  let showMovie = MoveList().find(showOrMovie => showOrMovie.id === showOrMovieId  );
	   console.log(showMovie);
	  this.setState({ showMovie })
  }
  
  render() {
  	if( this.state.showMovie === undefined ){
  		return <Redirect to="/not-found" />
  	} else {
    return (
    	<div className="Details"> 
    	<h1>{this.state.showMovie.name}</h1> 
    	<div className="content"> 
    	<div className="item">{this.state.showMovie.details}</div>
    	<img 
    	  src={this.state.showMovie.img}
    	  alt={this.state.showMovie.name}
    	  />
    	</div>
		<Link to="/"> Back to homepage </Link>
	</div>
	)}
  }
}

export default Details; 