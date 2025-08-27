import React, {useState, useEffect} from 'react';
import { View, Text, Flatlist, Image, TouchableOpacity, ActivityIndicator, StyleSheet} from 'react'

const HomeScreen = ({navigation}) =>{
    const[product, setProduct] = useState(null);
    

    useEffect(() =>{
        async function FetchProducts() {
           try{
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = response.json();
            setProduct(data)
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
        <View style={styles.container}>
            <Image source ={{ uri:product.image }}
                style={styles.image}
            />
            <Text>{product.description}</Text>
        </View>
    )


}

styles = StyleSheet.create({
    container: {padding:25, alignItems:"center"}
})
