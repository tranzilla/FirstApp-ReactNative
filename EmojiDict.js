import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

//create a Emoji class - defines all the emoji and extends it to Component
class EmojiDict extends Component {
  render() {//Component needs render()
    return (//Return a FlatList
      <FlatList
        contentContainerStyle={styles.container}
        data={[
          { key: '😃', value: '😃 Smiley' },
          { key: '🚀', value: '🚀 Rocket' },
          { key: '⚛️', value: '⚛️ Atom Symbol' }
        ]}
        renderItem={({ item }) => <Text>{item.value}</Text>}
      /> //close FlatList
    ); //close what was return
  }//close the render



}//close the class EmojiDict

//define a constant style
const styles = StyleSheet.create({
  //name this specific style 'container'
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }//end of styles for container

});

export default EmojiDict;
