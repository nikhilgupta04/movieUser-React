import React, { Component } from 'react';
import Moviecards from "./Moviecards";


class Dashboard extends Component{
render(){
  
  
  const { usersByMovie, users, movies } = this.props;
  
    const moviecards = Object.keys(movies).map(id => (
      <Moviecards
        key={id}
        users={users}
        usersWhoLikedMovie={usersByMovie[id]}
        movieInfo={movies[id]}
      />
    ));

 return <ul>{moviecards}</ul>
}
}


export default Dashboard;