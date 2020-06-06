import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  ActivityIndicator,
} from 'react-native';
import CustomInput from '../../Components/CustomInput/CustomInput';
import {getPeriod} from '../../Helpers/getPeriod';

const stylesDark = StyleSheet.create({
  item: {
    margin: 15,
    backgroundColor: '#000',
    borderRadius: 4,
    borderColor: '#2b2b2b',
    borderWidth: 2,
  },
  itemHeader: {
    padding: 15,
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
    justifyContent: 'space-between',
  },
  itemMainTextBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemMainText: {
    fontSize: 18,
    color: '#FFF',
  },
  itemMainAction: {
    paddingVertical: 5,
  },
  raisedBtn: {
    height: 55,
    width: '100%',
    borderRadius: 4,
    backgroundColor: '#ffb74d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  raisedBtnText: {
    color: '#000',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});

const stylesLight = StyleSheet.create({
  item: {
    margin: 15,
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
  },
  itemHeader: {
    padding: 15,
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
    justifyContent: 'space-between',
  },
  itemMainText: {
    fontSize: 18,
  },
  itemMainAction: {
    paddingVertical: 5,
  },
  raisedBtn: {
    height: 55,
    width: '100%',
    borderRadius: 4,
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
});

const SetDataBlock = ({route, theme, addItemRequest, loading}) => {
  const [value, setValue] = useState('');
  const styles = theme ? stylesLight : stylesDark;

  const changeHandler = text => {
    setValue(text);
  };

  const addItemHandler = () => {
    addItemRequest({value, dataID: route.params.id});
    setValue('');
  };
  return (
    <View style={styles.item}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemHeaderText}>Добавить данные</Text>
      </View>
      <View style={styles.itemMain}>
        <View style={styles.itemMainAction}>
          <View style={styles.itemMainTextBlock}>
            <Text style={styles.itemMainText}>Период: {getPeriod()}</Text>
          </View>
          <CustomInput
            theme={theme}
            value={value}
            onChangeText={changeHandler}
          />
        </View>
        <View style={styles.itemMainAction}>
          {!loading ? (
            <TouchableNativeFeedback
              onPress={addItemHandler}
              disabled={loading}>
              <View style={styles.raisedBtn}>
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

SetDataBlock.propTypes = {
  theme: PropTypes.bool.isRequired,
  addItemRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SetDataBlock;
