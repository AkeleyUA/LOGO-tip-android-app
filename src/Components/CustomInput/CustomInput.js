import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

const CustomInput = ({theme, ...props}) => {
  const [focus, setFocus] = useState(false);
  const styles = StyleSheet.create({
    textField: {
      borderWidth: 1,
      borderColor: theme ? '#575757' : '#ffffff',
      borderRadius: 4,
      paddingHorizontal: 15,
      paddingVertical: 10,
      marginVertical: 5,
      color: theme ? '#575757' : '#ffffff',
    },
    textFieldFocus: {
      borderWidth: 2,
      borderColor: theme ? '#115293' : '#ffb74d',
      borderRadius: 4,
      paddingHorizontal: 15,
      paddingVertical: 10,
      marginVertical: 5,
      color: theme ? '#115293' : '#ffb74d',
    },
  });

  const focusHander = () => {
    setFocus(true);
  };

  const blurHander = () => {
    setFocus(false);
  };

  return (
    <TextInput
      autoCapitalize="none"
      keyboardAppearance={theme ? 'light' : 'dark'}
      placeholderTextColor={theme ? '#b2c5d4' : '#8a8a8a'}
      {...props}
      tintColor={theme ? '#115293' : '#ffb74d'}
      textColor={theme ? '#303030' : '#FFF'}
      baseColor={theme ? 'rgba(0, 0, 0, .38)' : 'rgba(255, 255, 255, .78)'}
      style={focus ? styles.textFieldFocus : styles.textField}
      onFocus={focusHander}
      onBlur={blurHander}
    />
  );
};

export default CustomInput;
