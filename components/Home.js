import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
    const data = [
        {
            "id": 1,
            "name": "Lahore",
        },
        {
            "id": 2,
            "name": "Karachi",
        }
    ]
  return (
    <View>
      {
            data.map((item) => {
                return (
                    <Text key={item.id}>{item.name}</Text>
                )
            })
      }
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})