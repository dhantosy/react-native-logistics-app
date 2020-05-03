import React, { Component } from 'react';
import { Text, FlatList, View, SafeAreaView } from 'react-native';

import { dataPickUpRequest } from '../data/dataPickUpRequest';
import { ListItem } from '../components/ListItem';
import styles from './styles';
import colors from '../config/colors';

class PickUpRequest extends Component {

  handleRowPress = (item) => {
    this.props.navigation.navigate('Details', item);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.whiteBackground }}>
        <View style={{ marginTop: 20, marginBottom: 10, marginHorizontal: 15 }}>
          <Text style={styles.userName}>Halo, Pak Rudy</Text>
          <Text style={styles.titlePage}>Pick Up Request</Text>
        </View>
        <FlatList
          style={{ marginVertical: 10 }}
          data={dataPickUpRequest}
          renderItem={({ item }) => {
            return (
              <ListItem
                item={item}
                onPress={() => this.handleRowPress(item)}
              />
            )
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    )
  }
}

export default PickUpRequest;
