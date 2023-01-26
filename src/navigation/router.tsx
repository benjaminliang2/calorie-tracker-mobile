import {useState, useEffect} from 'react';
import {
  StyleSheet, View, ActivityIndicator,
} from 'react-native';
import {Auth} from 'aws-amplify';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

export default () => {
  const [userToken, setUserToken] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadingSpinner, setLoadingSpinner] = useState(false)

  useEffect(()=>{
    loadApp()
  }, [])
  useEffect(()=>{
    setLoadingSpinner(!userToken && loading)
  },[loading, userToken])

  const loadApp = async () =>{ 
    await Auth.currentAuthenticatedUser()
    .then(user=>{
      console.log(user) 
      signIn(user)
    })
    .catch(()=>{
      console.log("error signing in")
    })
    setLoading(false)
  }

  const signIn = (user) => {
    setUserToken(user.signInUserSession.accessToken.jwtToken)
  }
  
  const signOut = async (user) => {
    await Auth.signOut()
    .catch((err) => {
      console.log(err)
    })
    setUserToken(null)
  }
  let view:any = '';

  if (loadingSpinner) {
    view = (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    );
  } else if (!userToken) {
    view = <AuthNavigator signIn={signIn} loadApp={loadApp}/>;
  } else {
    view = <AppNavigator signOut={signOut} />;
  }
  return(
    <NavigationContainer>
    {view}
    </NavigationContainer>
  )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});