import React, {useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, ScrollView, Alert} from 'react-native';
import DataInfo from '../../Components/DataInfo/DataInfoContainer';
import SetDataBlock from '../../Components/SetDataBlock/SetDataBlockContainer';
import DataHistory from '../../Components/DataHistory/DataHistoryContainer';

const stylesDark = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: '100%',
  },
});

const stylesLight = StyleSheet.create({
  container: {
    height: '100%',
  },
});

const DataScreen = ({
  theme,
  route,
  getItemRequest,
  getItemSuccess,
  clearMessage,
  message,
}) => {
  const styles = theme ? stylesLight : stylesDark;

  const getItems = useCallback(() => {
    getItemRequest(route.params.id);
  }, [getItemRequest, route.params.id]);

  useEffect(() => {
    getItems();
    return () => getItemSuccess([]);
  }, [getItemSuccess, getItems]);

  useEffect(() => {
    if (message) {
      Alert.alert('Инфо', message);
      clearMessage();
    }
  });

  return (
    <ScrollView style={styles.container}>
      <DataInfo />
      <SetDataBlock route={route} />
      <DataHistory />
    </ScrollView>
  );
};

DataScreen.propTypes = {
  theme: PropTypes.bool.isRequired,
  getItemRequest: PropTypes.func.isRequired,
  getItemSuccess: PropTypes.func.isRequired,
  clearMessage: PropTypes.func.isRequired,
  message: PropTypes.string,
};

export default DataScreen;
