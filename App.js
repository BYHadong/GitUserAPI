import React, { Component } from 'react';
import DustAPI from './component/DustAPI';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class App extends Component {
  constructor() {
    super();
    this.state = {
      login: [],
    }
  }

  componentDidMount(){
    fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((jsonData) => {
      this.setState({
        login: jsonData.map((data) => { return data.login })
      })
    })
  }
  
  render() {
    
    return (
      <View>
        <DustAPI userData={this.state.login}></DustAPI>
      </View>
    )
  }
}

export default App;
