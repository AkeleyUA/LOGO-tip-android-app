import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  ActivityIndicator,
  TouchableNativeFeedback,
} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import CustomInput from '../CustomInput/CustomInput';

const stylesDark = StyleSheet.create({
  raisedBtn: {
    height: 55,
    width: '100%',
    borderRadius: 4,
    marginVertical: 10,
    backgroundColor: '#ffb74d',
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
    color: '#000',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  preloaderWrapper: {
    backgroundColor: '#ffb74d',
    height: 55,
    borderRadius: 4,
    marginVertical: 10,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 36,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 30,
    shadowColor: '#ffb74d',
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 2,
    },
  },
  bottomActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  link: {
    margin: 10,
    color: '#ffb74d',
  },
});

const stylesLight = StyleSheet.create({
  raisedBtn: {
    height: 55,
    width: '100%',
    borderRadius: 4,
    marginVertical: 10,
    backgroundColor: '#115293',
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
    color: '#FFF',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  preloaderWrapper: {
    backgroundColor: '#115293',
    height: 55,
    borderRadius: 4,
    marginVertical: 10,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 30,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 2,
    },
  },
  bottomActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  link: {
    margin: 10,
    color: '#115293',
  },
});

const AuthForm = ({
  theme,
  loginRequest,
  navigation,
  message,
  clearMessage,
  loading,
  isAuth,
  redirect,
}) => {
  const styles = theme ? stylesLight : stylesDark;
  const [form, setForm] = useState({
    email: 'test1@gmail.com',
    password: '123456',
  });

  const changeEmailHandler = email => {
    setForm(prev => ({...prev, email}));
  };

  const changePasswordHandler = password => {
    setForm(prev => ({...prev, password}));
  };

  const loginHandler = () => {
    loginRequest(form);
  };

  useEffect(() => {
    if (message === 'Network request failed') {
      Alert.alert(
        'Нет досупа к серверу',
        'На данный момент сервер не доступен',
      );
      clearMessage();
    } else if (message) {
      Alert.alert('Инфо', message, [
        {
          text: 'OK',
          onPress: redirect ? () => navigation.navigate('auth') : () => {},
        },
      ]);
      clearMessage();
    }
  }, [clearMessage, message, navigation, redirect]);

  return (
    <>
      <Text style={styles.title}>Личный кабинет</Text>
      <CustomInput
        placeholder="Введите email"
        textContentType="emailAddress"
        keyboardType="email-address"
        theme={theme}
        value={form.email}
        onChangeText={changeEmailHandler}
      />
      <CustomInput
        placeholder="Введите пароль"
        textContentType="password"
        secureTextEntry
        keyboardType="default"
        theme={theme}
        value={form.password}
        onChangeText={changePasswordHandler}
      />
      {!loading ? (
        <TouchableNativeFeedback onPress={loginHandler} disabled={loading}>
          <View style={styles.raisedBtn}>
            <Text style={styles.raisedBtnText}>Войти</Text>
          </View>
        </TouchableNativeFeedback>
      ) : (
        <View style={styles.raisedBtn}>
          <ActivityIndicator color={theme ? '#FFF' : '#000'} />
        </View>
      )}
      <View style={styles.bottomActions}>
        <TouchableHighlight
          underlayColor={
            theme ? 'rgba(17, 82, 147, 0.1)' : 'rgba(255, 183, 77, 0.3)'
          }
          disabled={loading || isAuth}
          onPress={() => {}}>
          <Text style={styles.link}>Забыл пароль?</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={
            theme ? 'rgba(17, 82, 147, 0.1)' : 'rgba(255, 183, 77, 0.3)'
          }
          disabled={loading || isAuth}
          onPress={() => navigation.navigate('registration')}>
          <Text style={styles.link}>Нет учётной записи?</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

AuthForm.propTypes = {
  theme: PropTypes.bool.isRequired,
  loginRequest: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
  message: PropTypes.string,
  clearMessage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
  redirect: PropTypes.bool.isRequired,
};

export default AuthForm;
