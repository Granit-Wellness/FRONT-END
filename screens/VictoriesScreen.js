import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image
} from 'react-native';
import { LineChart, Grid } from 'react-native-svg-charts'
import { Card } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import SafeAreaView from 'react-native-safe-area-view';
import { StreamApp, FlatFeed, Activity, LikeButton } from 'expo-activity-feed';


export default class HomeScreen extends React.Component {
  render() {
    const data = [0, 5, 20, 15, 20, 28, 30, 35, 35, 33, 15, 45, 50]
    const CustomActivity = (props) => {
      return (
        <Activity
          {...props}
          Footer={
            <LikeButton {...props} />
          }
        />
      );
    };
    return (
      <View style={styles.container}>
        <View>
          <ImageBackground source={require('../assets/images/mountains.jpeg')}>
            <LineChart
              style={{ height: 200 }}
              data={data}
              svg={{ stroke: 'rgb(134, 65, 244)', strokeWidth: '5' }}
              contentInset={{ top: 20, bottom: 20 }}
            >
              <Grid />
            </LineChart>
          </ImageBackground>
        </View>
        <StreamApp
          apiKey="5rqsbgqvqphs"
          appId="40273"
          token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMzQ2NjkxZjAtMzQwYi00YTE2LThiZjgtMTU3M2I3ZTQxMjE0In0.iIi_X8qwC19vRIgvdjh8nk23a4aMXakIL7j6o7G9anE">
          <FlatFeed Activity={CustomActivity} />
        </StreamApp>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  topScreenImage: {
    width: '100%',
    height: 250,
    padding: 0,
    shadowOpacity: .75,
    shadowRadius: 30,
    shadowColor: '#F17638',
    shadowOffset: { height: 0, width: 0 },
    zIndex: 100,
    position: 'relative'
  }
});