import React from 'react';
import { Text, View } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text>About Page</Text>
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

export default About;