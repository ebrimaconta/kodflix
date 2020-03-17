import React from 'react';
import { Redirect } from 'react-router-dom';
import MoveList from '../Movies/ArrayList';


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
    return <h1>{this.state.showMovie.name}</h1> ;
	}
  }
}

export default Details; 