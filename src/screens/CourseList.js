import React from 'react';
import {View,Text,FlatList,StyleSheet} from 'react-native';

const CourseList=(props)=>
{
    const courseList=[
        [
            {name:'CSE 4401',key:'1'},
            {name:'CSE 4402',key:'2'},
            {name:'CSE 4403',key:'3'},
            {name:'CSE 4404',key:'4'},
            {name:'CSE 4405',key:'5'},
            {name:'CSE 4406',key:'6'},

        ],
        [
            {name:'CSE 4201',key:'1'},
            {name:'CSE 4202',key:'2'},
            {name:'CSE 4203',key:'3'},
            {name:'CSE 4204',key:'4'},
            {name:'CSE 4205',key:'5'},
            {name:'CSE 4206',key:'6'},

        ],
        [
            {name:'CSE 4501',key:'1'},
            {name:'CSE 4502',key:'2'},
            {name:'CSE 4503',key:'3'},
            {name:'CSE 4504',key:'4'},
            {name:'CSE 4505',key:'5'},
            {name:'CSE 4506',key:'6'},

            
        ]
    ];
    let course=undefined;
    if(props["route"]["params"]=="1st"){
        course=courseList[0];
    }
    else if (props["route"]["params"]=="2nd"){
        course=courseList[1];
    }
    else{
        course=courseList[2];
    }
    return (
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:25,color:'blue'}}>Course List of {props["route"]["params"]} semester:</Text>
            <FlatList
            data={course}
            renderItem={function({item}){
                return <Text style={{fontSize:20,color:'black'}}>{item.key}.  {item.name}</Text>
            }}
            > 
            </FlatList>
        </View>
    );
}
export default CourseList;