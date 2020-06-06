import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import Registration from '../../Components/Registration/RegistrationContainer';

const stylesDark = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 30,
    backgroundColor: '#000',
    justifyContent: 'flex-start',
  },
});

const stylesLight = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 30,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
  },
});

const RegistrationScreen = ({theme, navigation}) => {
  const styles = theme ? stylesLight : stylesDark;
  return (
    <View style={styles.container}>
      <Registration navigation={navigation} />
    </View>
  );
};

RegistrationScreen.propTypes = {
  theme: PropTypes.bool.isRequired,
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default RegistrationScreen;
