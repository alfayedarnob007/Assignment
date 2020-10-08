import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './src/Screens/HomeScreen';
import Profile from './src/Screens/Profile';
import SemesterList from './src/Screens/SemesterList';
import CourseList from './src/Screens/CourseList';
import FacultyMemberList from './src/Screens/FacultyMemeberList';


const stack=createStackNavigator();
function App(){
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={HomeScreen}></stack.Screen>
        <stack.Screen name="Profile" component={Profile}></stack.Screen>
        <stack.Screen name="SemesterList" component={SemesterList}></stack.Screen>
        <stack.Screen name="CourseList" component={CourseList}></stack.Screen>
        <stack.Screen name="FacultyMemberList" component ={FacultyMemberList}></stack.Screen>
      </stack.Navigator>
  </NavigationContainer>
  );
}
export default App;