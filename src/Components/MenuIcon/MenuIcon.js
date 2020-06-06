import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

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

const MenuIcon = ({navigation, theme, loading}) => (
  <View style={styles.container}>
    <TouchableNativeFeedback
      disabled={loading}
      background={TouchableNativeFeedback.Ripple(null, true)}
      onPress={() => navigation.navigate('menu', {label: 'Меню'})}>
      <View>
        <Icon color={theme ? '#FFF' : '#000'} size={30} name="menu" />
      </View>
    </TouchableNativeFeedback>
  </View>
);

MenuIcon.propTypes = {
  theme: PropTypes.bool.isRequired,
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default MenuIcon;
