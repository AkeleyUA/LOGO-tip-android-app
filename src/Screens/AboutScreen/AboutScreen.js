import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AboutApp from '../../Components/AboutApp/AboutAppContainer';
import Technology from '../../Components/Technology/TechnologyContainer';

const data = [
  {
    key: 'first',
    component: <AboutApp />,
  }, {
    key: 'secound',
    component: <Technology />,
  },
];

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

const AboutScreen = ({ theme }) => {
  const styles = theme ? stylesLight : stylesDark;
  return (
    <FlatList
      style={styles.container}
      data={data}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => item.component}
    />
  );
};

AboutScreen.propTypes = {
  theme: PropTypes.bool.isRequired,
};

export default AboutScreen;
