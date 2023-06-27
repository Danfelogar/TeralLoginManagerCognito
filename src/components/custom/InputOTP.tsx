import {Text} from 'react-native';
import React, {Dispatch, SetStateAction, useContext} from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {View} from 'react-native';
import {ThemeContext} from '../../context';
import {inputGenericStyles} from './stylesCustom';

interface Props {
  cellCount?: number;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export default function InputOTP({cellCount = 4, value, setValue}: Props) {
  //global context
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  //customStyles
  const {cellContent, focusCell, textCell} = inputGenericStyles({colors});
  //   const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: cellCount});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View style={{width: '100%', justifyContent: 'space-evenly'}}>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={cellCount}
        // rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View key={index} style={[cellContent, isFocused && focusCell]}>
            <Text style={textCell} onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
