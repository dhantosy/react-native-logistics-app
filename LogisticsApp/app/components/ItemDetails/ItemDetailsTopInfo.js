import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';

import styles from './styles';
import colors from '../../config/colors';

const ItemDetailsTopInfo = (props) => {

  return (
    <View>
      <View style={styles.row}>
        <Image
          source={{ uri: props.data.image_url }}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <View style={styles.infoDetail}>
            <Text style={styles.quantity}>Merchant's Name</Text>
            <Text style={styles.quantity}>{props.data.name_merchant}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ItemDetailsTopInfo;
