import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

const CloseIcon = ({navigation, theme}) => (
  <View style={styles.container}>
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(null, true)}
      onPress={() => navigation.goBack()}>
      <View>
        <Icon color={theme ? '#FFF' : '#000'} size={30} name="close" />
      </View>
    </TouchableNativeFeedback>
  </View>
);

CloseIcon.propTypes = {
  theme: PropTypes.bool.isRequired,
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default CloseIcon;
