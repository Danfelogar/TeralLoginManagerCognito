import {View, Text} from 'react-native';
import React from 'react';
// import PhoneInput from 'react-native-phone-number-input';
// import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function InputPhone() {
  //   const [value, setValue] = useState('');
  //   const [formattedValue, setFormattedValue] = useState('');
  //   const [valid, setValid] = useState(false);
  //   const [showMessage, setShowMessage] = useState(false);
  //   const phoneInput = useRef<any>(null);
  //   useEffect(() => {
  //     console.log({formattedValue, valid, showMessage});
  //   }, [formattedValue, valid, showMessage]);

  return (
    <View>
      {/* <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="DM"
        layout="first"
        onChangeText={text => {
          setValue(text);
        }}
        onChangeFormattedText={text => {
          setFormattedValue(text);
        }}
        withDarkTheme
        withShadow
        autoFocus
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          const checkValid = phoneInput.current?.isValidNumber(value);
          setShowMessage(true);
          setValid(checkValid ? checkValid : false);
        }}>
        <Text>Check</Text>
      </TouchableOpacity> */}
      <Text style={{color: 'black', fontSize: 20}}>AAAAA</Text>
    </View>
  );
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.lighter,
//   },
//   wrapper: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     marginTop: 20,
//     height: 50,
//     width: 300,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#7CDB8A',
//     shadowColor: 'rgba(0,0,0,0.4)',
//     shadowOffset: {
//       width: 1,
//       height: 5,
//     },
//     shadowOpacity: 0.34,
//     shadowRadius: 6.27,
//     elevation: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 14,
//   },
//   redColor: {
//     backgroundColor: '#F57777',
//   },
//   message: {
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 20,
//     marginBottom: 20,
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//   },
// });
