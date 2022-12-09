import { View, Text } from 'react-native'
import React from 'react'

const Nav = () => {
  return (
    <View>
      <Text style={styles.NavBar}>Cost Of Living @ Pakistan</Text>
    </View>
  )
}

const styles = {
    NavBar: {
        backgroundColor: '#000',
        color: '#fff',
        fontSize: 20,
        padding: 10,
        textAlign: 'center',
        textTransform: 'uppercase'
    }
}

export default Nav