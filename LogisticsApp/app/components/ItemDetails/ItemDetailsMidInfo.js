import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';

import styles from './styles';
import colors from '../../config/colors';

const ItemDetailsMidInfo = (props) => {

  // this template needs to be refactored
  return (
    <View>
      <View style={styles.row}>
        <View style={styles.infoContainer}>
          <View style={styles.infoDetail}>
            <Text style={styles.quantity}>Owner's Name</Text>
            <Text style={styles.quantity}>{props.data.name_owner}</Text>
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.infoContainer}>
          <View style={styles.infoDetail}>
            <Text style={styles.quantity}>Pickup Time</Text>
            <Text style={styles.quantity}>{props.data.pickup_time}</Text>
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.infoContainer}>
          <View style={styles.infoDetail}>
            <Text style={styles.quantity}>Address</Text>
            <Text style={styles.quantity}>{props.data.address}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ItemDetailsMidInfo;
