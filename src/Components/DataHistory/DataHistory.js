import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
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
  dividerHead: {
    marginVertical: 10,
    height: 2,
  },
  textField: {
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderRadius: 4,
    color: '#a3a3a3',
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
  dividerHead: {
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
    backgroundColor: '#cecece',
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

const DataHistory = ({theme, dataItems, loading}) => {
  const styles = theme ? stylesLight : stylesDark;
  return (
    <View style={styles.item}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemHeaderText}>История изменений</Text>
      </View>
      {loading ? (
        <View style={styles.itemMainPreloader}>
          <ActivityIndicator
            size="large"
            color={theme ? '#115293' : '#ffb74d'}
          />
        </View>
      ) : dataItems.length > 0 ? (
        <View style={styles.itemMain}>
          <View style={styles.itemMainTextBlock}>
            <Text style={styles.itemMainText}>Дата</Text>
            <Text style={styles.itemMainText}>Состояние</Text>
          </View>
          <Divider style={styles.dividerHead} />
          {dataItems.map((item, index) => (
            <View key={item._id}>
              <View style={styles.itemMainTextBlock}>
                <Text style={styles.itemMainText}>
                  {getPeriod(new Date(item.dateEnd))}
                </Text>
                <Text style={styles.itemMainText}>{item.value}</Text>
              </View>
              <Divider style={styles.divider} />
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.itemMain}>
          <Text style={styles.itemMainText}>История пуста</Text>
        </View>
      )}
    </View>
  );
};

DataHistory.propTypes = {
  theme: PropTypes.bool.isRequired,
  dataItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default DataHistory;
