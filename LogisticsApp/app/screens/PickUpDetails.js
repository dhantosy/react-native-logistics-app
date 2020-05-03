import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import { ItemDetailsTopInfo, ItemDetailsMidInfo, ItemDetailsBottomInfo } from '../components/ItemDetails';
import { dataPickUpDetails } from '../data/dataPickUpDetails';
import colors from '../config/colors';

class PickUpDetails extends Component {

  render() {

    return (
      <ScrollView style={{ paddingVertical: 20, backgroundColor: colors.whiteBackground }}>
        <ItemDetailsTopInfo data={dataPickUpDetails} />
        <ItemDetailsMidInfo data={dataPickUpDetails} />
        <ItemDetailsBottomInfo data={dataPickUpDetails} />
      </ScrollView>
    )
  }
}

export default PickUpDetails;
