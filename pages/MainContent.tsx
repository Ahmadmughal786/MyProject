import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import React from 'react';

const MainContent = ({route, navigation}) => {
  const {myName} = route.params;
  return (
    <View>
      <Button title="Home" onPress={() => navigation.popToTop()} />
      <Text style={styles.mainTxt}> Welcome {myName}</Text>
    </View>
  );
};

export default MainContent;

const styles = StyleSheet.create({
  mainTxt: {
    margin: 20,
    fontSize: 20,
    textAlign: 'center',
  },
});
