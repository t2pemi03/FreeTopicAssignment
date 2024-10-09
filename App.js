import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Button, StyleSheet, Text, View, Image } from 'react-native';
import FoodData from './hooks/FoodData';
import {useState} from 'react'

export default function App() {

const{FoodType, FoodIMG, error, getFoodData, loading} = FoodData()
const [disabled, setDisabled] = useState(false)

const handlePress = () => {
  setDisabled(true)
  getFoodData()

    setTimeout(() => {
      setDisabled(false)
    }, 2000)
}

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Generate Foods</Text>
      <StatusBar style="auto" />
      {loading && <ActivityIndicator size = "large" color= "#00ff00" />}
      {error && <Text style = {styles.error}>{error}</Text>}
      {FoodType && <Text>{FoodType}</Text>}
      {FoodIMG && (
        <Image source={{uri: FoodIMG}}style={styles.foodImages} />
      )}
      <Button title = "Next food" onPress = {handlePress} disabled = {disabled} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 26,
    marginBottom: 20
  }, 
  foodImages: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10
  }
});
