import React,{useState, useEffect} from 'react';
import {StatusBar, Button, FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
   listStyle: {
      borderWidth: 1,
   },
});

const Home = ({navigation}) => {
  const [myData, setMyData] = useState([]);

    // Ex 1A
    useEffect(() => {
        fetch('https://jsonhost.com/json/25cf22a1f3e27d30331314c1c8de36fe')
            .then((response)=>{
                return response.json();
            })
            .then((myJson)=>{
                setmyData(myJson);
            })
    }, []);

    const renderItem = ({item, index, section}) => {
    return (
    <View style={styles.listStyle}>
    <Text>{item.name}</Text>
    </View>
    );
  };

   return (
    <View>
      <StatusBar/>
	  <Button title='Add Item' onPress={
      ()=>{navigation.navigate("Add",{datastr:JSON.stringify(myData)})}}/>
      <FlatList data={myData} renderItem={renderItem}/>
    </View>
  );
};

export default Home;
