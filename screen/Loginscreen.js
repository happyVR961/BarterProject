import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import db from '../Config';
import firebase from 'firebase';

export default class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            Email : "",
            Password : ""
        }
    }

    userSignUp=async(email, password)=>{
firebase.auth().createUserWithEmailAndPassword(email, password)
.then(()=>{
    return alert("User added successfully")
})
.catch(()=>{
    return alert("Error, user hasn't been added")
})

login = async(email, password)=>{
firebase.auth().signInWithEmailAndPassword(email, password)
.then(()=>{
    return alert("Successfully logged in")
})
.catch(()=>{
    return alert("Error, check your email and password again")
})
}
    }
    render(){
        return(
            <View style = {styles.container}>
           <TextInput
           placeholder = "Email"
           style = {styles.input1}
             onChangeText = {(text)=>{
               this.setState({
                   Email : text
               })
             }}
       >
           </TextInput>

           <TextInput 
           placeholder = "Password"
           style = {styles.input1}
           onChangeText = {(text)=>{
              this.setState({
                  Password : text
              })
           }}>
           </TextInput>

           <TouchableOpacity style = {styles.button}
           onPress = {()=>{
               this.login(this.state.Email, this.state.Password)
            } }>
             <Text style = {styles.text1}>Login</Text>
           </TouchableOpacity>

           <TouchableOpacity style = {styles.button}
           onPress = {()=>{
               this.userSignUp(this.state.Email, this.state.Password)
            } }>
             <Text style = {styles.text1}>Sign Up</Text>
           </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      modalContainer: {
          justifyContent : 'center',
          alignItems : 'center'
      },
    button:{
        backgroundColor:"lightpink",
        width:120,
        height:40,
        marginTop:20,
        marginBottom:30,
        textAlign : "center",
        justifyContent : "center",
        borderWidth:3,
        borderRadius:50,
        marginLeft:15
    },
    text1 :{
        fontSize:20,
        fontWeight:"bold"
    },
    input1 : {
        height:40,
        width:150,
        borderWidth:3,
        marginTop:20,
        marginBottom:20,
        textAlign:"center"
       
    }
})