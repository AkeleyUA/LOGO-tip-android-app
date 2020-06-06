import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
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

const Registration = ({
  theme,
  navigation,
  registrationRequest,
  loading,
  isAuth,
}) => {
  const styles = theme ? stylesLight : stylesDark;
  const [form, setForm] = useState({
    email: 'test1@gmail.com',
    password: '123456',
    repeatPassword: '123456',
  });

  const changeEmailHandler = email => {
    setForm(prev => ({...prev, email}));
  };

  const changePasswordHandler = password => {
    setForm(prev => ({...prev, password}));
  };

  const changeRepeatHandler = password => {
    setForm(prev => ({...prev, repeatPassword: password}));
  };

  const RegisterHandler = () => {
    if (form.password === form.repeatPassword) {
      registrationRequest({email: form.email, password: form.password});
    }
  };

  return (
    <>
      <Text style={styles.title}>Регистрация</Text>
      <CustomInput
        theme={theme}
        label="Введите email"
        textContentType="emailAddress"
        keyboardType="email-address"
        value={form.email}
        onChangeText={changeEmailHandler}
      />
      <CustomInput
        theme={theme}
        label="Введите пароль"
        textContentType="password"
        secureTextEntry
        keyboardType="default"
        value={form.password}
        onChangeText={changePasswordHandler}
      />
      <CustomInput
        theme={theme}
        label="Повторите пароль"
        textContentType="password"
        secureTextEntry
        keyboardType="default"
        value={form.repeatPassword}
        onChangeText={changeRepeatHandler}
      />
      <TouchableNativeFeedback onPress={RegisterHandler} disabled={loading}>
        <View style={styles.raisedBtn}>
          <Text style={styles.raisedBtnText}>Создать</Text>
        </View>
      </TouchableNativeFeedback>
      <View style={styles.bottomActions}>
        <TouchableHighlight
          underlayColor={
            theme ? 'rgba(17, 82, 147, 0.1)' : 'rgba(255, 183, 77, 0.3)'
          }
          disabled={loading || isAuth}
          onPress={() => navigation.navigate('auth')}>
          <Text style={styles.link}>Уже зарегестрированы?</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

Registration.propTypes = {
  theme: PropTypes.bool.isRequired,
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
  registrationRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

export default Registration;
