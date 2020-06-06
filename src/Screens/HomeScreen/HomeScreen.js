import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  Modal,
  Alert,
  ActivityIndicator,
} from 'react-native';
import DataBlock from '../../Components/DataBlock/DataBlockContainer';
import {FlatList} from 'react-native-gesture-handler';
import AddBlock from '../../Components/AddBlock/AddBlockContainer';

const stylesLight = StyleSheet.create({
  loading: {
    paddingHorizontal: 15,
  },
  modalContentWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  container: {
    height: '100%',
    paddingTop: 15,
  },
  blocksWrapperAction: {
    paddingHorizontal: 15,
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
});

const stylesDark = StyleSheet.create({
  loading: {
    paddingHorizontal: 15,
  },
  modalContentWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  container: {
    height: '100%',
    backgroundColor: '#000000',
    paddingTop: 15,
  },
  blocksWrapperAction: {
    paddingHorizontal: 15,
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
});

const HomeScreen = ({
  theme,
  data,
  getDataRequest,
  message,
  clearMessage,
  loading,
  navigation,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const styles = theme ? stylesLight : stylesDark;

  const modalOpenHandler = () => setModalVisible(true);
  const modalCloseHandler = () => setModalVisible(false);

  const getData = useCallback(getDataRequest);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    if (message) {
      Alert.alert('Инфо', message);
      clearMessage();
    }
  }, [clearMessage, message]);

  return (
    <View style={styles.container}>
      <FlatList
        ListEmptyComponent={
          loading ? (
            <Text style={styles.loading}>Загрузка...</Text>
          ) : (
            <Text style={styles.loading}>Данные отсутствуют</Text>
          )
        }
        data={data}
        keyExtractor={item => `${item._id}`}
        renderItem={({item}) => (
          <DataBlock item={item} navigation={navigation} />
        )}
        ListFooterComponent={
          <View style={styles.blocksWrapperAction}>
            {!loading ? (
              <TouchableNativeFeedback
                disabled={loading}
                onPress={modalOpenHandler}>
                <View style={styles.raisedBtn}>
                  <Text style={styles.raisedBtnText}>Добавить данные</Text>
                </View>
              </TouchableNativeFeedback>
            ) : (
              <View style={styles.raisedBtn}>
                <ActivityIndicator color={theme ? '#FFF' : '#000'} />
              </View>
            )}
          </View>
        }
      />
      <Modal
        visible={modalVisible}
        animationType="fade"
        presentationStyle="overFullScreen"
        statusBarTranslucent>
        <View style={styles.modalContentWrapper}>
          <AddBlock close={modalCloseHandler} />
        </View>
      </Modal>
    </View>
  );
};

HomeScreen.propTypes = {
  theme: PropTypes.bool.isRequired,
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
  getDataRequest: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  message: PropTypes.string,
  clearMessage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default HomeScreen;
