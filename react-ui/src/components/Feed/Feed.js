import React from 'react';
import faker from 'faker';

import SquawkCard from '../SquawkCard/SquawkCard';

import './Feed.css';

class Feed extends React.Component {

  state = {
    userData: [],
  };

  componentDidMount() {
    this.setState({ userData: this.buildUserData() });
  }

  buildUserData = () => {
    let data = [];
    data.length = 10;
    data.fill(1, 0);
    data = data.map((_, i) => {
      return {
        avatar: faker.image.avatar(),
      }  
    });
    return data;
  }

  render() {

    const squawkCards = this.state.userData.map(user => (
      <SquawkCard key={user.avatar} avatar={user.avatar} />
    ));

    return (
      <section className="feed">
        { squawkCards.length ? squawkCards : null }
      </section>
    );
  }

}

export default Feed;
