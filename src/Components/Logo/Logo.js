import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

const stylesDark = StyleSheet.create({
  logotip: {
    marginLeft: 30,
    color: '#000',
    fontWeight: '600',
    fontSize: 24,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});

const stylesLight = StyleSheet.create({
  logotip: {
    marginLeft: 30,
    color: '#FFF',
    fontWeight: '600',
    fontSize: 24,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});

const Logo = ({ theme }) => {
  const styles = theme ? stylesLight : stylesDark;
  return (
    <Text style={styles.logotip}>LOGOtip</Text>
  );
};

Logo.propTypes = {
  theme: PropTypes.bool.isRequired,
};

export default Logo;
