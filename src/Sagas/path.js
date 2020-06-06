const path = 'https://logotip-react-native-app.herokuapp.com';

const login = `${path}/api/auth/login`;
const registration = `${path}/api/auth/registration`;

const addData = `${path}/api/data/add`;
const getData = `${path}/api/data/get`;
const delData = `${path}/api/data/del`;

const addItem = `${path}/api/item/add`;
const getItem = `${path}/api/item/get`;

export default {
  login,
  registration,
  addData,
  getData,
  delData,
  addItem,
  getItem,
};
