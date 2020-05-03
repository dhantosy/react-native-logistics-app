import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';
import colors from '../../config/colors';

const ItemDetailsBottomInfo = (props) => {

  // this template needs to be refactored
  return (
    <View>
      <View style={styles.rowBorder}>
        <View style={styles.infoContainer}>
          <View style={styles.infoDetail}>
            <View style={styles.infoDetailLeft}>
              <IconFontAwesome
                name='phone'
                size={20}
                color={colors.redText}
                style={styles.iconLeft}
              />
              <Text style={styles.infoName}>Phone</Text>
            </View>
            <View style={styles.infoDetailRight}>
              <Text style={styles.infoName}>{props.data.phone}</Text>
              <IconFontAwesome
                name='chevron-right'
                size={20}
                color={colors.redText}
                style={styles.iconLeft}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.rowBorder}>
        <View style={styles.infoContainer}>
          <View style={styles.infoDetail}>
            <IconFontAwesome
              name='box'
              size={20}
              color={colors.redText}
              style={styles.chevron}
            />
            <Text style={styles.infoName}>Package Details</Text>
            <IconFontAwesome
              name='chevron-right'
              size={20}
              color={colors.redText}
              style={styles.chevron}
            />
          </View>
        </View>
      </View>
      <View style={styles.rowBorder}>
        <TouchableOpacity
          style={styles.buttonPrimary}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ItemDetailsBottomInfo;
