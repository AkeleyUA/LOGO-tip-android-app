import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, TouchableNativeFeedback} from 'react-native';
import DeleteIcon from '../DeleteIcon/DeleteIcon';

const stylesLight = StyleSheet.create({
  listWrapper: {
    paddingHorizontal: 15,
  },
  itemActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  raisedBtn: {
    marginLeft: 'auto',
    padding: 10,
    borderRadius: 4,
    marginBottom: 15,
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
  item: {
    justifyContent: 'space-around',
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
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#115293',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginBottom: 15,
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
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  itemMainName: {
    color: '#000',
    fontWeight: '600',
    textTransform: 'uppercase',
    fontSize: 26,
    marginBottom: 15,
  },
  itemMainLink: {
    color: '#000',
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 15,
  },
});

const stylesDark = StyleSheet.create({
  listWrapper: {
    paddingHorizontal: 15,
  },
  itemActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  raisedBtn: {
    marginLeft: 'auto',
    padding: 10,
    borderRadius: 4,
    marginBottom: 15,
    backgroundColor: '#ffb74d',
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
    color: '#000',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  item: {
    justifyContent: 'space-around',
    backgroundColor: '#000',
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
    borderWidth: 2,
    borderColor: '#212121',
  },
  itemHeader: {
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffb74d',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginBottom: 15,
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
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  itemMainName: {
    color: '#FFF',
    fontWeight: '600',
    textTransform: 'uppercase',
    fontSize: 26,
    marginBottom: 15,
  },
  itemMainLink: {
    color: '#FFF',
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 15,
  },
});

const DataBlock = ({theme, delDataRequest, item, navigation, loading}) => {
  const styles = theme ? stylesLight : stylesDark;

  const selectHandler = () => {
    navigation.navigate('data', {label: item.personalNumber, id: item._id});
  };
  return (
    <View style={styles.listWrapper}>
      <View style={styles.item}>
        <View style={styles.itemHeader}>
          <Text style={styles.itemHeaderText}>
            П№:&nbsp;{item.personalNumber}
          </Text>
          <DeleteIcon
            theme={theme}
            del={delDataRequest}
            id={item._id}
            disabled={loading}
          />
        </View>
        <View style={styles.itemMain}>
          <Text style={styles.itemMainName}>
            {item.firstName}&nbsp;{item.secondName}
          </Text>
        </View>
        <View style={styles.itemMain}>
          <Text style={styles.itemMainLink}>{item.address}</Text>
        </View>
        <View style={styles.itemActions}>
          <TouchableNativeFeedback disabled={loading} onPress={selectHandler}>
            <View style={styles.raisedBtn}>
              <Text style={styles.raisedBtnText}>Выбрать</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
};

DataBlock.propTypes = {
  theme: PropTypes.bool.isRequired,
  item: PropTypes.object,
  delDataRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default DataBlock;
