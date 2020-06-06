import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';

const stylesDark = StyleSheet.create({
  footerWrapper: {
    backgroundColor: '#150d00',
    marginTop: 'auto',
    height: 30,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  link: {
    color: '#6b6151',
    fontSize: 12,
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});

const stylesLigth = StyleSheet.create({
  footerWrapper: {
    backgroundColor: '#CECECE',
    marginTop: 'auto',
    height: 30,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  link: {
    color: 'rgba(0, 0, 0, 0.30)',
    fontSize: 12,
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});

const Footer = ({theme}) => {
  const styles = theme ? stylesLigth : stylesDark;

  return (
    <View elevation={3} style={styles.footerWrapper}>
      <Text style={styles.link}>AlexStep</Text>
      <Text style={styles.link}>v1.0.0</Text>
      <Text style={styles.link}>(c) LOGOtip</Text>
    </View>
  );
};

Footer.propTypes = {
  theme: PropTypes.bool.isRequired,
};

export default Footer;
