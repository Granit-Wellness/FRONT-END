import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text
} from 'react-native';
import { LineChart, Grid } from 'react-native-svg-charts'
import { Card, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import SafeAreaView from 'react-native-safe-area-view';
import { Activity } from 'expo-activity-feed';
import { Calendar } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';


export default class HomeScreen extends React.Component {
  componentDidMount = () => {
    LocaleConfig.locales['fr'] = {
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthNamesShort: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayNamesShort: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
      today: 'Sunday\'Dec'
    };
    LocaleConfig.defaultLocale = 'fr';
  } 
  render (){
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/mountains.jpeg')} style={{
          width: '100%', height: '15%', display: 'flex', flex: 1, shadowOpacity: 0.75,
          shadowRadius: 5,
          shadowColor: '#F17638',
          shadowOffset: { height: 0, width: 0 },
          borderRadius: 20
        }}>
          <Text style={{
          paddingTop: 50,
           alignSelf: 'center',
           fontWeight: 0,
           fontSize: 50,
           lineHeight: 27
          }}>
            SOS
          </Text>
        </ImageBackground>
        <ScrollView>
          <Avatar>
            
          </Avatar>
        </ScrollView>
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
    flexDirection: 'column'
  },
});
