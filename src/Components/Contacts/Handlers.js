import Communications from 'react-native-communications';
import Contacts from 'react-native-contacts';
import {Alert} from 'react-native';

const contactData = {
  displayName: 'Александр Степанюк',
  phoneNumbers: [
    {
      label: 'mobile',
      number: '0730692932',
    },
  ],
  emailAddresses: [
    {
      label: 'home',
      email: 'Akeley1994@gmail.com',
    },
  ],
};

const addToContactHandler = async () => {
  Contacts.openContactForm(contactData, err => {
    if (err) {
      console.warn(err);
    }
  });
};

export const alertPhoneHandler = () => {
  Alert.alert(
    'Телефон',
    '+380 73 069 29 32',
    [
      {text: 'Закрыть', style: 'cancel'},
      {
        text: 'Позвонить',
        onPress: () =>
          Communications.phonecall(contactData.phoneNumbers[0].number, true),
        style: 'default',
      },
      {
        text: 'Сохранить',
        onPress: addToContactHandler,
        style: 'default',
      },
    ],
    {cancelable: true},
  );
};

export const alertEmailHandler = () => {
  Alert.alert(
    'Email',
    'Akeley1994@gmail.com',
    [
      {
        text: 'Написать',
        onPress: () =>
          Communications.email(
            ['Akeley1994@gmail.com'],
            null,
            null,
            null,
            null,
          ),
      },
      {text: 'Отменить', style: 'cancel'},
    ],
    {cancelable: false},
  );
};

export const webHandler = () => {
  Communications.web('https://github.com/AkeleyUA');
};
