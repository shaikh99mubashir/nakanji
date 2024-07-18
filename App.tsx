import React, {useEffect, useState, useContext} from 'react';
import {AppState, StyleSheet, Text, View} from 'react-native';
import AppNavigation from './Navigation/appNavigation';
import Timer from './Component/Timer/timer';
import NoteState from './context/noteState';
import NoteContext from './context/noteContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import noteContext from './context/noteContext';
import TutorDetailsState from './context/tutorDetailsState';
import StudentState from './context/studentState';
import FilterState from './context/filterState';
import UpcomingClassState from './context/upcomingClassState';
import IdleTimerManager from 'react-native-idle-timer';
import PaymentState from './context/paymentState';
import NotificationState from './context/notificationState';
import ScheduleState from './context/ScheduleState';
import ReportSubmissionState from './context/reportSubmissionState';
import BannerState from './context/bannerState';
import ScheduleNotificationState from './context/scheduleNotificationState';

function App() {
  useEffect(() => {
    IdleTimerManager.setIdleTimerDisabled(true);

    return () => IdleTimerManager.setIdleTimerDisabled(false);
  }, []);

  const handleAppStateChange = (nextAppState:any) => {
    console.log('App State Changed :', nextAppState);
    // Handle app state change here
  };
  useEffect(() => {
  
    const subscription = AppState.addEventListener('change', handleAppStateChange);
  
    // Cleanup function
    return () => {
      subscription.remove(); // Remove the event listener when component unmounts
    };
  }, []);


  return (
    <View style={styles.container}>
      <UpcomingClassState>
        <BannerState>
          <NoteState>
            <ReportSubmissionState>
              <ScheduleState>
                <NotificationState>
                  <ScheduleNotificationState>
                    <PaymentState>
                      <TutorDetailsState>
                        <StudentState>
                          <FilterState>
                            <AppNavigation />
                            {/* <Timer show="false" /> */}
                          </FilterState>
                        </StudentState>
                      </TutorDetailsState>
                    </PaymentState>
                  </ScheduleNotificationState>
                </NotificationState>
              </ScheduleState>
            </ReportSubmissionState>
          </NoteState>
        </BannerState>
      </UpcomingClassState>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
});

export default App;
  