import {StyleSheet, TextInput} from 'react-native';

import {Flex} from '../index';
import {Colors, fonts, Metrix, SVGS} from '../../config';

interface SearchFieldProps {
  value: string;
  onChange: (text: string) => void;
  onSubmitEditing?: () => void;
  placeholder: string;
  error?: string;
}

const SearchField: React.FC<SearchFieldProps> = ({
  onChange,
  onSubmitEditing,
  value,
  placeholder = 'Search',
}) => {
  return (
    <Flex style={styles.container}>
      <SVGS.SearchIcon />
      <TextInput
        onChangeText={onChange}
        value={value}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={'#808080'}
        onSubmitEditing={onSubmitEditing}
      />
      <SVGS.FilterIcon />
    </Flex>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Metrix.VerticalSize(56),
    backgroundColor: Colors.white,
    marginTop: Metrix.VerticalSize(32),
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrix.HorizontalSize(16),
    gap: 10,
  },

  input: {
    height: Metrix.VerticalSize(56),
    flex: 1,
    color: '#808080',
    fontSize: 13,
    ...fonts.medium(),
  },
});