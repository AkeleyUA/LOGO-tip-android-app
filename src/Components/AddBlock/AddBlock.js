import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import CustomInput from '../CustomInput/CustomInput';
import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const stylesLight = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'flex-start',
  },
  header: {
    paddingTop: 30,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#115293',
  },
  headerTitle: {
    fontSize: 24,
    color: '#FFF',
    marginBottom: 5,
  },
  containerForIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 5,
  },
  cardContainer: {
    padding: 15,
  },
  raisedBtn: {
    padding: 15,
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
    fontSize: 14,
    textTransform: 'uppercase',
  },
  raisedBtnDisabled: {
    padding: 15,
    borderRadius: 4,
    marginVertical: 10,
    backgroundColor: '#cfcfcf',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const stylesDark = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'flex-start',
    backgroundColor: '#000',
  },
  header: {
    paddingTop: 30,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#ffb74d',
  },
  headerTitle: {
    fontSize: 24,
    color: '#000',
    marginBottom: 5,
  },
  containerForIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 5,
  },
  cardContainer: {
    padding: 15,
  },
  raisedBtn: {
    padding: 15,
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
    fontSize: 14,
    textTransform: 'uppercase',
  },
  raisedBtnDisabled: {
    padding: 15,
    borderRadius: 4,
    marginVertical: 10,
    backgroundColor: '#3b2a11',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AddBlock = ({
  theme,
  close,
  addDataRequest,
  loading,
  field,
  clearFields,
}) => {
  const [personalNumber, setPersonalNumber] = useState('');
  const styles = theme ? stylesLight : stylesDark;
  const status = personalNumber.length === 0;

  const changeTextHandler = text => setPersonalNumber(text);

  const addHandler = () => {
    if (personalNumber.length === 6) {
      addDataRequest(personalNumber);
    } else {
      Alert.alert('Ошибка', 'Некорректный персональный номер, пример: 000123');
    }
  };

  useEffect(() => {
    if (field) {
      setPersonalNumber('');
      clearFields();
    }
  }, [clearFields, field]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Добавление данных</Text>
        <View style={styles.containerForIcon}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple(null, true)}
            onPress={close}>
            <View>
              <Icon color={theme ? '#FFF' : '#000'} size={30} name="close" />
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <CustomInput
          maxLength={6}
          value={personalNumber}
          placeholder="Введите персональный номер (000001 - 001000)"
          textContentType="name"
          keyboardType="number-pad"
          theme={theme}
          onChangeText={changeTextHandler}
        />
        <View style={styles.raisedBtnContainer}>
          {!loading ? (
            <TouchableNativeFeedback disabled={status} onPress={addHandler}>
              <View
                style={status ? styles.raisedBtnDisabled : styles.raisedBtn}>
                <Text style={styles.raisedBtnText}>Сохранить</Text>
              </View>
            </TouchableNativeFeedback>
          ) : (
            <View style={styles.raisedBtn}>
              <ActivityIndicator color={theme ? '#FFF' : '#000'} />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

AddBlock.propTypes = {
  theme: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  addDataRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  field: PropTypes.bool.isRequired,
};

export default AddBlock;
