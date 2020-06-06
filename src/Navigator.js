import React from 'react';
import PropTypes from 'prop-types';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {StyleSheet, Text, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import Logo from './Components/Logo/LogoContainer';
import MenuIcon from './Components/MenuIcon/MenuIconContainer';
import Footer from './Components/Footer/FooterContainer';
import MenuScreen from './Screens/MenuScreen/MenuScreenContainer';
import AuthScreen from './Screens/AuthScreen/AuthScreenContainer';
import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreenContainer';
import SettingsScreen from './Screens/SettingsScreen/SettingsScreenContainer';
import ContactsScreen from './Screens/ContactsScreen/ContactsScreenContainer';
import AboutUsScreen from './Screens/AboutScreen/AboutScreenContainer';
import CloseIcon from './Components/CloseIcon/CloseIconContainer';
import HomeScreen from './Screens/HomeScreen/HomeScreenContainer';
import DataScreen from './Screens/DataScreen/DataScreenContainer';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const stylesDark = StyleSheet.create({
  header: {
    backgroundColor: '#ffb74d',
    elevation: 0,
  },
  menu: {
    marginLeft: 30,
    color: '#000',
    fontWeight: '600',
    fontSize: 24,
  },
});

const stylesLight = StyleSheet.create({
  header: {
    backgroundColor: '#115293',
    elevation: 0,
  },
  menu: {
    marginLeft: 30,
    color: '#FFF',
    fontWeight: '600',
    fontSize: 24,
  },
});

const Navigator = ({theme, token}) => {
  const styles = theme ? stylesLight : stylesDark;
  const isLogged = !!token;
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={theme ? 'light-content' : 'dark-content'}
        backgroundColor={theme ? '#115293' : '#ffb74d'}
      />
      <Stack.Navigator
        headerMode="float"
        animation="spring"
        screenOptions={({navigation, route}) => ({
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: config,
            close: config,
          },
          headerTitle: null,
          headerStyle: styles.header,
          backTitle: null,
          headerLeft: () => (
            <Text style={styles.menu}>{route.params.label}</Text>
          ),
          headerRight: () => <CloseIcon navigation={navigation} />,
        })}>
        {isLogged ? (
          <>
            <Stack.Screen
              name="home"
              component={HomeScreen}
              options={({navigation}) => ({
                headerLeft: () => <Logo />,
                headerRight: () => <MenuIcon navigation={navigation} />,
              })}
            />
            <Stack.Screen
              name="data"
              component={DataScreen}
              options={({navigation, route}) => ({
                headerLeft: () => (
                  <Text style={styles.menu}>{route.params.label}</Text>
                ),
                headerRight: () => <CloseIcon navigation={navigation} />,
              })}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="auth"
              component={AuthScreen}
              options={({navigation}) => ({
                headerLeft: () => <Logo />,
                headerRight: () => <MenuIcon navigation={navigation} />,
              })}
            />
            <Stack.Screen
              name="registration"
              component={RegistrationScreen}
              options={({navigation}) => ({
                headerLeft: () => <Logo />,
                headerRight: () => <MenuIcon navigation={navigation} />,
              })}
            />
          </>
        )}
        <Stack.Screen name="menu" component={MenuScreen} />
        <Stack.Screen name="settings" component={SettingsScreen} />
        <Stack.Screen name="about" component={AboutUsScreen} />
        <Stack.Screen name="contacts" component={ContactsScreen} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  theme: state.settingsState.theme,
  token: state.authState.token,
});

Navigator.propTypes = {
  theme: PropTypes.bool.isRequired,
  token: PropTypes.string,
};

export default connect(
  mapStateToProps,
  null,
)(Navigator);
