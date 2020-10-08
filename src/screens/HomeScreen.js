import React from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet, Button} from 'react-native';
const HomeScreen=(props)=>{
    return(
        <View>
            <View style={styles.viewStyle}>
                <Image source={require('./../../assets/iut.png')} style= {styles.imageStyle}/>
            </View>
            <View>
                <Text style={{fontSize:28}}>Department of CSE</Text>
                <Text style={{fontSize:25}}>Program: SWE</Text>
                <Text></Text>
                <View style={styles.viewStyle}>
                    <TouchableOpacity onPress={function(){
                        props.navigation.navigate("Profile");
                    }}>
                        <Text style={styles.textStyle}>
                            My profile
                        </Text>
                    </TouchableOpacity>
                </View>

                <Text> </Text>
                
                <Button
                title='Semester wise Course List'
                onPress={function(){
                    props.navigation.navigate("SemesterList");
                }}
                ></Button>
                <Text> </Text>
                <Button 
                title='List of faculty members'
                onPress={
                    function(){
                        props.navigation.navigate("FacultyMemberList");
                    }
                }
                ></Button>
            </View>
        </View>
        
    );
}

const styles=StyleSheet.create(
    {
        viewStyle:{
            justifyContent:'center',
            alignItems:'center',
        },
        textStyle:{
            fontSize:30,
            color:'red',
        },
        imageStyle:{
            height:150,
            width:100,
        },
    }
);

export default HomeScreen;