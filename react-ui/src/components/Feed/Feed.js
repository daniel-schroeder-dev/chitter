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
    data.length = 20;
    data.fill(1, 0);
    data = data.map((_, i) => {
      return {
        id: i,
        avatar: faker.image.avatar(),
        userName: faker.internet.userName(),
        content: faker.lorem.paragraph(),
        handle: faker.hacker.adjective(),
        elapsedTime: Math.floor(Math.random() * 60),
        meta1: Math.floor(Math.random() * 300),
        meta2: Math.floor(Math.random() * 300),
        meta3: Math.floor(Math.random() * 300),
      }  
    });
    return data;
  }

  render() {

    const squawkCards = this.state.userData.map(user => (
      <SquawkCard key={user.id} {...user} />
    ));

    return (
      <section className="feed">
        { squawkCards.length ? squawkCards : null }
      </section>
    );
  }

}

export default Feed;
