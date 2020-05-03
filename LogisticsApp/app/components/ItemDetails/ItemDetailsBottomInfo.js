import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';
import colors from '../../config/colors';

const ItemDetailsBottomInfo = (props) => {

  // this template needs to be refactored
  return (
    <View>
      <View style={styles.row}>
        <View style={styles.infoContainer}>
          <View style={styles.infoDetail}>
            <IconFontAwesome
              name='phone'
              size={20}
              color={colors.subtleText}
              style={styles.chevron}
            />
            <Text style={styles.quantity}>{props.data.phone}</Text>
            <IconFontAwesome
              name='chevron-right'
              size={20}
              color={colors.subtleText}
              style={styles.chevron}
            />
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.infoContainer}>
          <View style={styles.infoDetail}>
            <IconFontAwesome
              name='box'
              size={20}
              color={colors.subtleText}
              style={styles.chevron}
            />
            <IconFontAwesome
              name='chevron-right'
              size={20}
              color={colors.subtleText}
              style={styles.chevron}
            />
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.buttonGrey}
        >
          <Text>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ItemDetailsBottomInfo;
