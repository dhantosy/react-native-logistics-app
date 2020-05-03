import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15
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
    backgroundColor: colors.whiteBackground,
    paddingHorizontal: 25
  },
  rowBorder: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.whiteBackground,
    paddingHorizontal: 25,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    paddingVertical: 15
  },
  infoContainer: {
    flexDirection: 'column',
    flex: 1,
    marginBottom: 5
  },
  infoDetail: {
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'stretch',
    marginBottom: 5
  },
  infoDetailLeft: {
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'stretch',
  },
  infoDetailRight: {
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'stretch',
    textAlign: 'right'
  },
  infoName: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '700',
    color: colors.blackText,
    flex: 1,
    marginLeft: 15
  },
  address: {
    fontSize: 13,
    color: colors.subtleText
  },
  buttonPrimary: {
    backgroundColor: colors.redText,
    borderRadius: 3,
    paddingHorizontal: 25,
    paddingVertical: 12,
    fontWeight: '700',
    fontSize: 16,
    flex: 1,
    alignSelf: 'stretch',
    textAlign: 'center'
  },
  buttonText: {
    color: colors.whiteBackground,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700'
  },
  labelTitle: {
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
  },
  labelInfo: {
    fontSize: 14,
    fontWeight: '700',
    flex: 1,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '300'
  },
  textRight: {
    textAlign: 'right',
    fontSize: 14,
    color: colors.blackText,
    flex: 1,
  },
  mapContainer: {
    width: 300,
    height: 150,
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20
  },
  mapImage: {
    width: 375,
    height: 150,
    flex: 1
  }
});
