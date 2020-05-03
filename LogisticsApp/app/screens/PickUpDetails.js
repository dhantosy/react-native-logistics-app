import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import { ItemDetailsTopInfo, ItemDetailsMidInfo, ItemDetailsBottomInfo } from '../components/ItemDetails';
import { dataPickUpDetails } from '../data/dataPickUpDetails';

class PickUpDetails extends Component {

  render() {

    return (
      <ScrollView>
        <ItemDetailsTopInfo data={dataPickUpDetails} />
        <ItemDetailsMidInfo data={dataPickUpDetails} />
        <ItemDetailsBottomInfo data={dataPickUpDetails} />
      </ScrollView>
    )
  }
}

export default PickUpDetails;
