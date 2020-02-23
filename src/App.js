import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Row from "./components/Row";
import Col from "./components/Col";
import buttons from "./buttons.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    buttons,
    clickedButtons: [],
    currentScore: 0,
    bestScore: 0
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
        <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Puppy Memory Game</h1>
        <h2>Click an image to get started - don't click the same pup twice!</h2>
      </Hero>
        <Container>
        <Row>
            {this.state.buttons.map(button => (
            <Col size="md-3"> 
            <Card
              id={button.id}
              key={button.id}
              image={button.image}
            />
            </Col>
          ))}
        
        </Row>
        </Container>
        
        
        <Footer />
      </Wrapper>
    );
  }
}

export default App;