import React, { Component } from 'react';
import { SafeAreaView, View, Text } from 'react-native';

class UserAccount extends Component {

  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
        <Text>User Account Page</Text>
      </SafeAreaView>
    )
  }
}

export default UserAccount;
