import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import colors from '../../config/colors';

import ENV from '../../config/env';

const ItemDetailsMaps = (props) => {
  let mapsUrl;

  if (props.data.location) {
    mapsUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.data.location.lat},${props.data.location.lng}&zoom=17&size=600x150&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:red%7Clabel:A%7C${props.data.location.lat},${props.data.location.lng}&key=${ENV.googleApiKey}`;
  }

  return (
    <View style={styles.mapContainer}>
      {props.data.location ? <Image style={styles.mapImage} source={{ uri: mapsUrl }} /> : props.children}
    </View>
  )
}

export default ItemDetailsMaps;
