import React, {useContext, useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import {Country, CountryCode} from '../../model';
import {ThemeContext} from '../../context';
import {inputGenericStyles} from './stylesCustom';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
  placeHolder: string;
  value: string;
  onChange: (val: string, valCountryCode: string) => void;
}

export default function InputPhone({onChange, placeHolder, value}: Props) {
  //global context
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  //customStyles
  const {
    wrapperPhoneInput,
    flagContent,
    phoneContent,
    phoneCallingCountryCode,
    textPhoneInput,
    phoneInputContent,
  } = inputGenericStyles({colors});
  const ModalCountryProps = {
    withFilter: true,
    excludeCountries: [],
    withFlag: true,
    withCurrencyButton: false,
    withCallingCodeButton: false,
    withCountryNameButton: false,
    withAlphaFilter: false,
    withCallingCode: true,
    withCurrency: false,
    withEmoji: true,
    withModal: true,
    withFlagButton: true,
    disableNativeModal: false,
    allowFontScaling: true,
    preferredCountries: ['CO', 'US'],
  };

  const [countryCode, setCountryCode] = useState<CountryCode | undefined>('CO');
  const [countryCallingCode, setCountryCallingCode] = useState('+57');
  useEffect(() => {
    onChange(value, countryCallingCode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryCallingCode]);

  // const [country, setCountry] = useState<Country | any>({
  //   callingCode: ['57'],
  //   cca2: 'CO',
  //   currency: ['COP'],
  //   flag: 'flag-co',
  //   name: 'Colombia',
  //   region: 'Americas',
  //   subregion: 'South America',
  // });
  const [visible, setVisible] = useState<boolean>(false);
  const onSelect = (valCountry: Country) => {
    setCountryCode(valCountry.cca2);
    // setCountry(valCountry);
    setCountryCallingCode(`+${valCountry.callingCode}`);
  };
  const switchVisible = () => setVisible(!visible);
  return (
    <View style={wrapperPhoneInput}>
      <View style={flagContent}>
        <CountryPicker
          {...{
            ...ModalCountryProps,
            countryCode,

            onSelect,
            modalProps: {
              visible,
            },
            switchVisible: switchVisible,
            onClose: () => setVisible(false),
            onOpen: () => setVisible(true),
          }}
        />
        <AntDesign name="caretdown" color={colors.grayLight4} size={16} />
      </View>
      <View style={phoneContent}>
        <View style={phoneCallingCountryCode}>
          <Text style={textPhoneInput}>{countryCallingCode}</Text>
        </View>
        <TextInput
          style={{
            ...textPhoneInput,
            ...phoneInputContent,
          }}
          keyboardType="phone-pad"
          placeholderTextColor={colors.grayDark1}
          placeholder={placeHolder}
          value={value}
          onChange={event => {
            onChange(event.nativeEvent.text, countryCallingCode);
          }}
        />
      </View>
      {/* {country !== null && (
        <Text style={styles.data}>{JSON.stringify(country, null, 0)}</Text>
      )} */}
    </View>
  );
}
