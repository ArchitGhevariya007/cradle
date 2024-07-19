import React from 'react';
import { Text, View } from 'react-native';
import SignUp from '../(auth)/SignUp';

const Profile = () => {
  return (
    <View style={styles.container}>
      <SignUp></SignUp>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Profile;