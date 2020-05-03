import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import colors from '../../config/colors';

class Actions extends Component {

  constructor(props) {
    super(props);
  }

  onPressDetail = (props) => {
    this.props.navigation.navigate('PickUpDetails', props);
  }

  onPressReject = () => {
    return;
  }

  onPressAccept = () => {
    return;
  }

  render() {

    return (
      <SafeAreaView>
        <View style={styles.rowButton}>
          <TouchableOpacity
            onPress={() => this.onPressDetail()}
            style={styles.buttonGrey}
          >
            <Text>Detail</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onPressReject()}
            style={styles.buttonSecondary}
          >
            <Text style={{ color: colors.redText }}>Reject</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onPressAccept()}
            style={styles.buttonPrimary}
          >
            <Text style={{ color: colors.whiteBackground }}>Accept</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

export default Actions;
