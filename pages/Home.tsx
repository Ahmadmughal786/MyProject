import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image></Image>
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
  },
  imgContainer: {
    flex: 0.8,
    // backgroundColor: 'red',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: 'orange',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
