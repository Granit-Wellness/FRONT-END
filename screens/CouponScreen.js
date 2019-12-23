import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  ScrollView,
  Text
} from 'react-native';
import { Card } from 'react-native-elements'

export default class CouponScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/mountains.jpeg')} style={{
          width: '100%', height: '40%', display: 'flex', flex: 1, shadowOpacity: 0.75,
          shadowRadius: 5,
          shadowColor: '#F17638',
          shadowOffset: { height: 0, width: 0 },
          borderRadius: 20
        }}>
          <Text>MY POINTS</Text>
          <ScrollView style={styles.couponContainer}>
            <Card containerStyle={styles.cardContainer} image={require('../assets/images/northridgecoupon.png')}></Card>
            <Card containerStyle={styles.cardContainer} image={require('../assets/images/minermoes.png')}></Card>
            <Card containerStyle={styles.cardContainer} image={require('../assets/images/sierratheaters.png')}></Card>
            <Card containerStyle={styles.cardContainer} image={require('../assets/images/49erfunpark.png')}></Card>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  couponContainer: {
    marginTop: 250,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  cardContainer: {
    height: '40%',
    width: 100,
    borderRadius: 10,
  },
});