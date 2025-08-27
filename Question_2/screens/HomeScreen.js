import React, {useState, useEffect} from 'react';
import { View, Text, Flatlist, Image, TouchableOpacity, ActivityIndicator, StyleSheet} from 'react'

const HomeScreen = ({navigation}) =>{
    const[product, setProducts] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(() =>{
        async function FetchProducts() {
           try{
            const response = await fetch("https://fakestoreapi.com/products")
            const data = response.json();
            setProducts(data)
           }catch(err){
            console.log("Error fetching products",err)
           }finally{
            setLoading(false)
           }
           
        }
        FetchProducts()
    },[id]);

    if(!product) return<ActivityIndicator size="large" color="yellow"/>

    return(
        <Flatlist
            data={product}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) =>(
                <TouchableOpacity onPress ={() =>navigation.navigate("Delay", {id:item.id})} >
                    <Text>{item.title}</Text>
                </TouchableOpacity>
            )}
        />
    )


}