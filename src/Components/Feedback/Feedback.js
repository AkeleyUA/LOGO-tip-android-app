import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {alertEmailHandler} from '../Contacts/Handlers';

const stylesDark = StyleSheet.create({
  item: {
    backgroundColor: '#1c1c1c',
    borderRadius: 4,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 15,
  },
  itemHeader: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffb74d',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  itemHeaderText: {
    color: '#000',
    fontSize: 26,
    fontWeight: '600',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  itemMain: {
    padding: 15,
    alignItems: 'flex-start',
  },
  itemMainText: {
    color: '#FFF',
    fontSize: 12,
    marginBottom: 10,
  },
  itemMainLink: {
    color: '#ffb74d',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});

const stylesLight = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 15,
  },
  itemHeader: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#115293',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  itemHeaderText: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: '600',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  itemMain: {
    padding: 15,
    alignItems: 'flex-start',
  },
  itemMainText: {
    fontSize: 12,
    marginBottom: 10,
  },
  itemMainLink: {
    textDecorationLine: 'underline',
    color: '#115293',
    fontWeight: '500',
  },
});

const Feedback = ({theme}) => {
  const styles = theme ? stylesLight : stylesDark;
  return (
    <View style={styles.item}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemHeaderText}>Техническая поддержка</Text>
      </View>
      <View style={styles.itemMain}>
        <Text style={styles.itemMainText}>
          Направьте письмо с темой &#34;Приложение LOGOtip&#34; по адресу&nbsp;
          <Text style={styles.itemMainLink} onPress={alertEmailHandler}>
            Akeley1994@gmail.com
          </Text>
          &nbsp; в теле письма укажите:
        </Text>
        <Text style={styles.itemMainText}>
          <Icon name="primitive-dot" color={theme ? '#115293' : '#ffb74d'} />
          &nbsp;ошибку или скрин ошибки
        </Text>
        <Text style={styles.itemMainText}>
          <Icon name="primitive-dot" color={theme ? '#115293' : '#ffb74d'} />
          &nbsp;email или id
        </Text>
      </View>
    </View>
  );
};

Feedback.propTypes = {
  theme: PropTypes.bool.isRequired,
};

export default Feedback;
