import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

const DeleteIcon = ({theme, del, id, ...props}) => {
  const deleteHandler = () => del(id);
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(null, true)}
        onPress={deleteHandler}
        {...props}>
        <View>
          <Icon
            color={theme ? '#FFF' : '#000'}
            size={30}
            name="delete-forever"
          />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

DeleteIcon.propTypes = {
  theme: PropTypes.bool.isRequired,
  del: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default DeleteIcon;
