import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { signInAction } from '../reducers/authReducer';

const SignupScreen = ({ navigation }) => {

  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const loading = useSelector((state) => state.auth.pending);
  const errorMessage = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

  const onSubmit = (email, password) => {
    dispatch(signInAction(email, password));
    navigation.navigate('mainFlow');
  };

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up to Your Account"
        errorMessage={errorMessage}
        onSubmit={onSubmit}
        submitButtonText="Sign Up"
      />
      <NavLink
        text="Already have an account? Sign in instead"
        routeName="Signin"
      />
    </View>
  );
}

SignupScreen.navigationOptions = () => {
  return { header: null }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});

export default SignupScreen;