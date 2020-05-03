import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 3,
    marginVertical: 5,
    marginHorizontal: 15,
    backgroundColor: '#fff'
  },
  infoContainer: {
    flexDirection: 'column',
    flex: 1
  },
  infoDetail: {
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'stretch',
    marginBottom: 5
  },
  quantity: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '600',
    color: colors.blackText,
    flex: 1,
  },
  time: {
    textAlign: 'right',
    fontSize: 16,
    fontWeight: '600',
    color: colors.redText,
    flex: 1,
  },
  address: {
    fontSize: 13,
    color: colors.subtleText
  },
});
