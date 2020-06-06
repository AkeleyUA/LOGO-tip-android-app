import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {Divider} from 'react-native-elements';
import {getPeriod} from '../../Helpers/getPeriod';

const stylesDark = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: '100%',
  },
  item: {
    margin: 15,
    borderWidth: 2,
    borderColor: '#292929',
    backgroundColor: '#1c1c1c',
    borderRadius: 4,
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
  itemMainPreloader: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: '100%',
  },
  itemMainTextBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemMainText: {
    fontSize: 18,
    color: '#FFF',
  },
  itemMainAction: {
    paddingVertical: 15,
  },
  divider: {
    marginVertical: 15,
  },
  textField: {
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderRadius: 4,
    color: '#FFFFFF',
    backgroundColor: '#3b2a11',
  },
  raisedBtn: {
    height: 55,
    width: '100%',
    marginBottom: 15,
    borderRadius: 4,
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
    minHeight: 100,
  },
  itemMainPreloader: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: '100%',
  },
  divider: {
    marginVertical: 10,
  },
  itemMainTextBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemMainText: {
    fontSize: 18,
  },
  itemMainAction: {
    paddingVertical: 5,
  },
  textField: {
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderRadius: 4,
    backgroundColor: '#cccccc',
    color: '#000000',
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

const DataInfo = ({theme, currentItem, loading}) => {
  const styles = theme ? stylesLight : stylesDark;
  return (
    <View style={styles.item}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemHeaderText}>Использовано ресурсов</Text>
      </View>
      {loading ? (
        <View style={styles.itemMainPreloader}>
          <ActivityIndicator
            size="large"
            color={theme ? '#115293' : '#ffb74d'}
          />
        </View>
      ) : (
        <View style={styles.itemMain}>
          <View style={styles.itemMainTextBlock}>
            <Text style={styles.itemMainText}>Период:</Text>
            <Text style={styles.itemMainText}>
              {currentItem
                ? getPeriod(new Date(currentItem.dateStart))
                : getPeriod(new Date())}
            </Text>
            <Text style={styles.itemMainText}>-</Text>
            <Text style={styles.itemMainText}>
              {currentItem ? getPeriod(new Date(currentItem.dateEnd)) : '--'}
            </Text>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.itemMainTextBlock}>
            <Text style={styles.itemMainText}>Состояние:</Text>
            <TextInput
              editable={false}
              style={styles.textField}
              autoCapitalize="none"
              keyboardAppearance={theme ? 'light' : 'dark'}
              fontSize={22}
              value={
                currentItem ? currentItem.value.toString() : [0].toString()
              }
            />
          </View>
        </View>
      )}
    </View>
  );
};

DataInfo.propTypes = {
  theme: PropTypes.bool.isRequired,
  currentItem: PropTypes.shape({
    _id: PropTypes.string,
    _v: PropTypes.number,
    value: PropTypes.number,
    parent: PropTypes.string,
    dateStart: PropTypes.string,
    dateEnd: PropTypes.string,
  }),
  loading: PropTypes.bool.isRequired,
};

export default DataInfo;
