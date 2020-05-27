import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Block, List } from '../../components';
import { theme } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: theme.sizes.base * 2,
  },
});

const Template = ({ navigation }) => (
  <View style={styles.container}>
    <Block middle>
      <List navigation={navigation} />
    </Block>
  </View>
);

export default Template;
