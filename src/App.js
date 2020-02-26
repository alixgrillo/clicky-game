import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
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
    shuffledArray: buttons,
    currentScore: 0,
    bestScore: 0,
    win: false
  };

  //arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  handleBtnClick = event => {
    // Get the data-value of the clicked button
    const btnNum = event.target.attributes.getNamedItem("data-value").value;
    console.log(btnNum);
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };

    if(newState.clickedButtons.includes(btnNum)){
      
    } else{
      newState.clickedButtons.push(btnNum);
      newState.currentScore++;
      newState.bestScore = newState.bestScore > newState.currentScore ?
        newState.bestScore : newState.currentScore;
    }; 
  
    this.setState(newState);
    this.shuffleDogs();
  };

  shuffleDogs = () => {
    const newState = { ...this.state };
    newState.shuffledArray = this.state.buttons
      .map((a) => ({sort: Math.random(), value: a}))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
    this.setState(newState);
  };

  componentDidMount() {
    console.log(this.state.shuffledArray);
    this.shuffleDogs();
    console.log(this.state.shuffledArray);
    this.render();
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
      <Wrapper>
        <Navbar
          currentScore={this.state.currentScore}
          topScore={this.state.bestScore}
          win={this.state.win}
        />
        <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Puppy Memory Game</h1>
        <h2>Click an image to get started - don't click the same pup twice!</h2>
      </Hero>
        <Container>
        <Row>
            {this.state.shuffledArray.map(button => (
            <Col size="md-3"> 
            <Card
              id={button.id}
              key={button.id}
              image={button.image}
              data-value={button.id}
              onClick={this.handleBtnClick}
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