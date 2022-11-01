import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <TextInput placeholder="Agregar item a la lista" style={styles.inputItem} />
        <Button title='Agregar' />
      </View>

      <View style={styles.itemsContainter}>
      <TextInput placeholder='Item1' style={styles.item} />
      <TextInput placeholder='Item2' style={styles.item} />
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 30, 
    marginTop: 50 
  },
  itemContainer:
  {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputItem: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1,
    width: 90
  },
  itemsContainter:{
    flexDirection:'column',
    alignItems:'center',
    backgroundColor: 'lightblue',
    
  },
  item:{
    marginTop: 5,
    marginBottom: 10,
    borderBottomWidth: 1,
    

  }

});
