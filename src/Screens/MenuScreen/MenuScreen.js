import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TouchableNativeFeedback, Text} from 'react-native';
import {CommonActions} from '@react-navigation/native';

const stylesLight = StyleSheet.create({
  listContainer: {
    height: '100%',
    padding: 20,
  },
  raisedBtn: {
    height: 55,
    width: '100%',
    borderRadius: 4,
    marginVertical: 10,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  raisedBtnText: {
    color: '#115293',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});

const stylesDark = StyleSheet.create({
  listContainer: {
    height: '100%',
    padding: 20,
    backgroundColor: '#000',
  },
  raisedBtn: {
    height: 55,
    width: '100%',
    borderRadius: 4,
    marginVertical: 10,
    backgroundColor: '#693e00',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  raisedBtnText: {
    color: '#FFF',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});

const MenuScreen = ({navigation, theme, isLogged, logout}) => {
  const styles = theme ? stylesLight : stylesDark;

  const logoutHandler = () => {
    logout();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        key: null,
        routes: [{name: 'home'}],
      }),
    );
  };

  return (
    <View style={styles.listContainer}>
      <TouchableNativeFeedback
        onPress={() => navigation.navigate('settings', {label: 'Настройки'})}>
        <View style={styles.raisedBtn}>
          <Text style={styles.raisedBtnText}>Настройки</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => navigation.navigate('about', {label: 'Информация'})}>
        <View style={styles.raisedBtn}>
          <Text style={styles.raisedBtnText}>Информация</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => navigation.navigate('contacts', {label: 'Контакты'})}>
        <View style={styles.raisedBtn}>
          <Text style={styles.raisedBtnText}>Контакты</Text>
        </View>
      </TouchableNativeFeedback>
      {isLogged ? (
        <TouchableNativeFeedback onPress={logoutHandler}>
          <View style={styles.raisedBtn}>
            <Text style={styles.raisedBtnText}>Выйти</Text>
          </View>
        </TouchableNativeFeedback>
      ) : null}
    </View>
  );
};

MenuScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
  theme: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default MenuScreen;
