import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card"


import buttons from "./buttons.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    buttons
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const buttons = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ buttons });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
      <Wrapper>
        <Navbar />
        <Hero />
        <Title>Friends List</Title>
        {this.state.buttons.map(button => (
          <Card
            id={button.id}
            key={button.id}
            image={button.image}
          />
        ))}
        <Footer />
      </Wrapper>
    );
  }
}

export default App;