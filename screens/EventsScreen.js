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
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
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
  render() {
    const data = [0, 5, 20, 15, 20, 28, 30, 35, 35, 33, 15, 45, 50]
    const activity = {
      actor: {
        data: {
          name: 'Nevada City Events',
          profileImage: 'https://gonevadacounty.com/wp-content/uploads/2016/05/gonevada_logo_grey.png',
        },
      },
      object: 'Victorian Christmas',
      verb: 'post',
      time: new Date(),
    };
    const activity2 = {
      actor: {
        data: {
          name: 'Nevada Union',
          profileImage: 'https://scontent.fsac1-2.fna.fbcdn.net/v/t1.0-9/12920455_1060894290619746_4625128164430748891_n.jpg?_nc_cat=107&_nc_ohc=wCwEalzGhYoAQl5KgnSLbDw6qMf4Y1bnPzbpsk-Vx9o_H9cTI3a9OoS7g&_nc_ht=scontent.fsac1-2.fna&oh=4bf35903c7bb7e92c3b57460d522735a&oe=5E6DBB21',
        },
      },
      object: 'Football Game',
      verb: 'post',
      time: new Date(),
    };
    return (
      <View style={styles.container}>
        <Calendar
          onDayPress={(day) => { console.log('selected day', day) }}
          // Collection of dates that have to be marked. Default = {}
          markedDates={{
            '2012-05-16': { selected: true, marked: true, selectedColor: 'blue' },
            '2012-05-17': { marked: true },
            '2012-05-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
            '2012-05-19': { disabled: true, disableTouchEvent: true }
          }}
        />
        <Activity activity={activity} />
        <Activity activity={activity2} />
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
  },
});