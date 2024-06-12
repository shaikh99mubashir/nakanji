import { Image, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AltLogo from '../../SVGs/AltLogo'

const CustomLoader = ({ visible}:any) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.9)',
        paddingHorizontal:20
      }}>
      {/* <Image
        source={require('../../Assets/Images/SIFU.gif')}
        style={{ width: 150, height: 150 }}
      /> */}
      <AltLogo/>
    </View>
  </Modal>
  )
}

export default CustomLoader

const styles = StyleSheet.create({})