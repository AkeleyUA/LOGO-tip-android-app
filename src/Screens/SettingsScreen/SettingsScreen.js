import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, Switch, StyleSheet} from 'react-native';

const stylesDark = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#000',
    height: '100%',
  },
  item: {
    height: 100,
    backgroundColor: '#1c1c1c',
    borderRadius: 4,
    shadowColor: '#b58235',
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
    height: '50%',
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
    height: '50%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemMainText: {
    fontSize: 18,
    color: '#FFF',
  },
});

const stylesLight = StyleSheet.create({
  container: {
    padding: 15,
  },
  item: {
    height: 100,
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
    height: '50%',
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
    height: '50%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemMainText: {
    fontSize: 18,
  },
});

const SettingsScreen = ({theme, changeTheme}) => {
  const styles = theme ? stylesLight : stylesDark;

  const toggleSwitchThemeHandler = () => changeTheme(!theme);

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <View style={styles.itemHeader}>
          <Text style={styles.itemHeaderText}>Тема</Text>
        </View>
        <View style={styles.itemMain}>
          <Text style={styles.itemMainText}>
            {theme ? 'Светлая' : 'Тёмная'}
          </Text>
          <Switch onValueChange={toggleSwitchThemeHandler} value={theme} />
        </View>
      </View>
    </View>
  );
};

SettingsScreen.propTypes = {
  theme: PropTypes.bool.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

export default SettingsScreen;
