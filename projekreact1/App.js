import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default function App() {

  return (
    <View style={asdasd.container}>

      <View style={asdasd.containerTitle}>
        <Text style={asdasd.title}>My Tiket.MCR</Text>
        <Image source={require('./src/Assets/Images/iconpesawat.jpg')}
          style={asdasd.logoImage} />
      </View>
    
      {/* Container TextInput */}
      <View style={asdasd.containerInp}>      
        <Text>Daftar dulu yuk</Text>
        <TextInput placeholder='Username' style={asdasd.inp}>
        </TextInput>
        <TextInput placeholder='Password' style={asdasd.inp}>
        </TextInput>

        <Text>Login Jika Sudah Punya Akun</Text>

      </View>
      {/* <TouchableOpacity style={asdasd.loginBtn}>
        <Text style={asdasd.loginTextBtn}>Login</Text>
      </TouchableOpacity> */}
      <View style={asdasd.containerLoginBtn}>
        <TouchableOpacity style={asdasd.loginBtn}>
          <Text style={asdasd.loginTextBtn}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={asdasd.loginBtn}>
          <Text style={asdasd.loginTextBtn}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={asdasd.loginBtn}>
          <Text style={asdasd.loginTextBtn}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const asdasd = StyleSheet.create({
  containerLoginBtn: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  containerTitle: {
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 16,
    fontWeight: 'bold'
  },
  logoImage: {
    width: 300,
    height: 250,
    borderRadius: 16,
    marginTop: 15
  },
  containerInp: {
    marginHorizontal: 24
  },
  inp: {
    backgroundColor: '#F5F5F5',
    marginTop: 6,
    borderRadius: 50,
    paddingHorizontal: 16
  },
  // loginBtn: {
  //   backgroundColor: '#fcff33',
  //   height: 30,
  //   width: 100,
  //   borderRadius: 24,
  //   position: 'absolute',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   bottom: 24,
  //   alignSelf: 'center'
  // },
  loginBtn: {
    backgroundColor: '#fcff33',
    height: 30,
    width: 100,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTextBtn: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
    borderRadius: 16,
  },

})