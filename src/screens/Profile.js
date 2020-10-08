import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

function Profile(props) {
    return (
        <View>
            <View style={styles.viewStyle}>
                <Image
                    source={require('./../../assets/arnob.jpg')}
                    style={styles.imageStyle} />
            </View>
            <Text> </Text>
            <Text style={styles.textStyle}>  Azad Al Fayed Arnob</Text>
            <Text style={styles.textStyle}>  SID: 170042075</Text>
            <Text style={styles.textStyle}>  Room no: None </Text>
            <Text style={styles.textStyle}>  Email: alfayedarnob007@gmail.com</Text>
        </View>
    );
}

const styles=StyleSheet.create(
    {
        imageStyle:{
            height:300,
            width:200,
        },
        viewStyle:{
            justifyContent:'center',
            alignItems:'center',
        },
        textStyle:{
            fontSize:22,
            color:'blue',
        },
    }
);
export default Profile;