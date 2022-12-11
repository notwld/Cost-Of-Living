import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')
  const fetchData = async () => {
    const response = await fetch('http://192.168.1.105:5000/')
      .then(response => response.json())
      .then(data => {
        setData(data)
      })
      .catch(err => console.log(err))

  }
  const filterData = (data,query) => {
    if (query) {
      Object.keys(data).filter((key) => {
        console.log(key)
        return key.includes(query)
      })
    }
      else{
        return data
      }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <View style={{marginBottom:40}}>
      <TextInput style={styles.seachBar} placeholder="Search" onChangeText={(text) => setQuery(text)} />
      <ScrollView style={styles.card}>
      {Object.keys(data).map((key, index) => {
          return (
            <View style={styles.cardItem} key={index}>
              <View style={{flex:1,flexDirection:'column'}}>
                <Text style={{fontSize:16}}>{key}</Text>
                <Text style={{fontWeight:"bold"}}>{data[key]}</Text>
              </View>
            </View>
          )
        }
        )}
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  seachBar:{borderWidth:1,margin:10,padding:7,borderRadius:23},
  card: {
    backgroundColor: '#fff',
    padding: 5,
    margin: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  cardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  }

})