import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, View} from 'react-native';

const dependencies = {
  '@react-native-community/masked-view': '^0.1.10',
  '@react-native-community/cli-debugger-ui': '4.7.0',
  '@react-navigation/drawer': '^5.8.1',
  '@react-navigation/native': '^5.5.0',
  '@react-navigation/stack': '^5.4.1',
  'patch-package': '^6.2.2',
  'prop-types': '^15.7.2',
  react: '16.11.0',
  'react-native': '0.62.2',
  'react-native-communications': '^2.2.1',
  'react-native-contacts': '^5.2.0',
  'react-native-elements': '^2.0.1',
  'react-native-gesture-handler': '^1.6.1',
  'react-native-reanimated': '^1.9.0',
  'react-native-safe-area-context': '^0.7.3',
  'react-native-screens': '^2.8.0',
  'react-native-vector-icons': '^6.6.0',
  'react-native-web': '~0.11.7',
  'react-navigation': '^4.3.9',
  'react-navigation-stack': '^2.5.1',
  'react-navigator': '0.0.0-0',
  'react-redux': '^7.2.0',
  redux: '^4.0.5',
  'redux-saga': '^1.1.3',
};

const stylesDark = StyleSheet.create({
  item: {
    margin: 15,
    backgroundColor: '#1c1c1c',
    borderRadius: 4,
    shadowColor: '#FFF',
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
    height: 50,
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
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  itemMainText: {
    color: '#FFF',
    fontSize: 12,
    marginBottom: 10,
  },
  itemMainLink: {
    color: '#ffb74d',
    fontWeight: '500',
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
    marginBottom: 15,
  },
  itemHeader: {
    height: 50,
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
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  itemMainText: {
    fontSize: 12,
    marginBottom: 10,
    color: '#000',
  },
  itemMainLink: {
    color: '#115293',
    fontWeight: '500',
  },
});

const dependenciesToArray = Object.entries(dependencies).map(tech => ({
  name: tech[0],
  v: tech[1],
}));

const Technology = ({theme}) => {
  const styles = theme ? stylesLight : stylesDark;
  return (
    <View style={styles.item}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemHeaderText}>Зависимости</Text>
      </View>
      <View style={styles.itemMain}>
        {dependenciesToArray.map(item => (
          <Text key={item.name} style={styles.itemMainLink}>
            {item.name}
            :&nbsp;
            <Text style={styles.itemMainText}>{item.v}</Text>
          </Text>
        ))}
      </View>
    </View>
  );
};

Technology.propTypes = {
  theme: PropTypes.bool.isRequired,
};

export default Technology;
