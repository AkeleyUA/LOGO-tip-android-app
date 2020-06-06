import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import Contacts from '../../Components/Contacts/Contacts';
import Feedback from '../../Components/Feedback/Feedback';

const stylesDark = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#000',
    height: '100%',
  },
});

const stylesLight = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
  },
});

const ContactsScreen = ({theme}) => {
  const styles = theme ? stylesLight : stylesDark;
  return (
    <View style={styles.container}>
      <Contacts theme={theme} />
      <Feedback theme={theme} />
    </View>
  );
};

ContactsScreen.propTypes = {
  theme: PropTypes.bool.isRequired,
};

export default ContactsScreen;
