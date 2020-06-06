import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, View} from 'react-native';
import {alertPhoneHandler, alertEmailHandler, webHandler} from './Handlers';

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
    color: '#115293',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});

const Contacts = ({theme}) => {
  const styles = theme ? stylesLight : stylesDark;
  return (
    <View style={styles.item}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemHeaderText}>Поставщик</Text>
      </View>
      <View style={styles.itemMain}>
        <Text style={styles.itemMainText}>
          Адрес: ул. Улица, № 0, г. Город, Индекс: 000000
        </Text>
        <Text style={styles.itemMainText}>
          Телефон:&nbsp;
          <Text style={styles.itemMainLink} onPress={alertPhoneHandler}>
            +380 73 069 29 32
          </Text>
        </Text>
        <Text style={styles.itemMainText}>
          Email:&nbsp;
          <Text style={styles.itemMainLink} onPress={alertEmailHandler}>
            Akeley1994@gmail.com
          </Text>
        </Text>
        <Text style={styles.itemMainText}>
          Сайт:&nbsp;
          <Text style={styles.itemMainLink} onPress={webHandler}>
            GitHub/AkeleyUA
          </Text>
        </Text>
      </View>
    </View>
  );
};

Contacts.propTypes = {
  theme: PropTypes.bool.isRequired,
};

export default Contacts;
