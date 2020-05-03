import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';

import Actions from './Actions';
import styles from './styles';
import colors from '../../config/colors';

class ListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    }
  }

  handleRowPress = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }

  render() {
    
    return (
      <TouchableHighlight
        underlayColor={colors.rowUnderLay}
        onPress={() => this.handleRowPress()}
      >
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <Image
              source={{ uri: this.props.item.image_url }}
              style={styles.image}
            />
            <View style={styles.infoContainer}>
              <View style={styles.infoDetail}>
                <Text style={styles.quantity}>{this.props.item.quantity} Paket ({this.props.item.weight} KG)</Text>
                <Text style={styles.time}>{this.props.item.pickup_time}</Text>
              </View>
              <View style={styles.infoDetail}>
                <Text style={styles.address}>{this.props.item.address}</Text>
              </View>
            </View>
          </View>
          {
            !this.state.isExpanded ? null : <Actions navigation={this.props.navigation} />
          }
        </View>
      </TouchableHighlight>
    )
  }
}

export default ListItem;
