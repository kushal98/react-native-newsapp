import React from 'react'
import { AppRegistry, View, Text, Image, StyleSheet, Alert} from 'react-native'

import AppIntro from 'rn-falcon-app-intro';
import AppIntroSlider from 'react-native-app-intro-slider';

import TabScreen from './TabScreen'

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#59b2ab',
  },
  image: {
    width: 250,
    height: 250,
    marginVertical: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  }
});

const slides = [
  {
    key: 'one',
    title: 'Business News',
    text: '',
    image: require('../assets/bs.png'),
    backgroundColor: '#b84c44',
  },
  {
    key: 'two',
    title: 'Technology News ',
    text: 'Other cool stuff',
    image: require('../assets/tech.png'),
    backgroundColor: '#b6c24e',
  },
  {
    key: 'three',
    title: 'Current Affairs',
    text: '',
    image: require('../assets/cf.png'),
    backgroundColor: '#4ea5c2',
  }
];

class IntroSlider extends React.Component {

  state = {
    showRealApp: false
  }
  _renderItem = ({ item }) => {
    return (
      <View style={[
        styles.slide,
        {
          backgroundColor: item.backgroundColor,
        },
      ]}>
        <Text style={styles.title }>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render() {
    if (this.state.showRealApp) {
      return <TabScreen />;
    } else {
      return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
    }
  }
}


export default IntroSlider;