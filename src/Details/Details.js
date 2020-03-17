import React from 'react';
import { Link } from 'react-router-dom';
import MoveList from '../Movies/ArrayList';


class Details extends React.Component {

  constructor() {
    super();
    this.state = {
      welcomeMessage: 'Hello, this will be the details page for each Movie & TV show :)'
    };
  }

  componentDidMount() {
	  const showOrMovieId = props.match.params.showOrMovieId;
	  const matchedShowOrMovie = MoveList()
	  			.find(showOrMovie =>  showOrMovie.id === showOrMovieId  );
  }
  render() {
    return (
      <Link to='/'>
        <h1>{this.state.welcomeMessage}</h1>
      </Link>
    );
  }
}

export default Details; 