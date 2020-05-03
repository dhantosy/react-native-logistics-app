import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15
  },
  rowContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 3,
    marginVertical: 5,
    marginHorizontal: 15,
    backgroundColor: '#fff'
  },
  rowButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignItems: 'stretch',
    marginTop: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
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
  buttonGrey: {
    backgroundColor: '#ddd',
    borderRadius: 3,
    paddingHorizontal: 25,
    paddingVertical: 8,
    marginHorizontal: 10,
    fontWeight: '600',
    fontSize: 16
  },
  buttonSecondary: {
    backgroundColor: colors.whiteBackground,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: colors.redText,
    paddingHorizontal: 25,
    paddingVertical: 8,
    marginHorizontal: 10,
    fontWeight: '600',
    fontSize: 16
  },
  buttonPrimary: {
    backgroundColor: colors.redText,
    borderRadius: 3,
    paddingHorizontal: 25,
    paddingVertical: 8,
    marginHorizontal: 10,
    fontWeight: '600',
    fontSize: 16
  }
});
