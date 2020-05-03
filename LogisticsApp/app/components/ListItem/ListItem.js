import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import colors from '../../config/colors';

const ListItem = ({ item = {}, onPress }) => {

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.rowUnderLay}
    >
      <View style={styles.row}>
        <Image
          source={{ uri: item.image_url}}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <View style={styles.infoDetail}>
            <Text style={styles.quantity}>{item.quantity} Paket ({item.weight} KG)</Text>
            <Text style={styles.time}>{item.pickup_time}</Text>
          </View>
          <View style={styles.infoDetail}>
            <Text style={styles.address}>{item.address}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default ListItem;
