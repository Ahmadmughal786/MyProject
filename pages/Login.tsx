import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  // Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

const Login = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const submit = () => {
    if (userName === 'Ahmad' && password === '123') {
      // Alert.alert(`Thank You ${userName}`);
      navigation.navigate('Content', {myName: `${userName}`});
    } else {
      Alert.alert(`Username and password is not correct`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}></View>
      <View style={styles.mainContainer}>
        <Text style={styles.mainText}>Welcome Back!</Text>
        <View style={styles.content}>
          <TextInput
            style={styles.mainInput}
            placeholder="Name or Email"
            autoCapitalize="none"
            autoCorrect={false}
            value={userName}
            onChangeText={actualData => setUserName(actualData)}
          />
          <TextInput
            style={styles.mainInput}
            secureTextEntry={true}
            placeholder="Password"
            value={password}
            onChangeText={actualData => setPassword(actualData)}
          />
          <TouchableOpacity onPress={() => Alert.alert('Pressed forgot')}>
            <Text style={styles.forgotPassTxt}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={() => submit()}>
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>
          <Text style={styles.signupTxt}>Already have an account? Sign Up</Text>
        </View>

        {/* For logos */}
        <View></View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
  },
  imgContainer: {
    flex: 0.3,
    // backgroundColor: 'red',
    // marginTop: 'auto',
  },
  mainContainer: {
    backgroundColor: 'white',
    flex: 0.7,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginBottom: 0,
  },
  content: {
    margin: 20,
  },
  mainText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15,
    fontWeight: '700',
    fontFamily: 'arial',
    color: '#000',
  },
  mainInput: {
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 20,
    padding: 15,
    fontFamily: 'regular',
    borderRadius: 50,
    fontSize: 16,
  },
  forgotPassTxt: {
    color: 'grey',
    textAlign: 'right',
    marginRight: 20,
  },
  loginBtn: {
    width: '100%',
    backgroundColor: 'orange',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  signupTxt: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
  },
});
