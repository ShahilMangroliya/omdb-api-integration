// import { search } from 'imdb-api';
import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, TextInput,Dimensions, View,TouchableOpacity,Image } from 'react-native';
const {width,height} = Dimensions.get('screen')


var srch='batman'
var base;
export default class App extends Component {

    state = {
      data: [],
      isLoading: true,
      // srch:'batman'
    };
  





  componentDidMount() {
    console.log('////////////////////////////////////////////////////////////');
    base='http://www.omdbapi.com/?s='+srch+'&apikey=********'
    fetch(base)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.Search }),console.log(this.state.data)}
        // data => 
      )
      // .then()
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }
  srch=()=>{
    base='http://www.omdbapi.com/?s='+srch+'&apikey=********'
    fetch(base)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.Search }),console.log(this.state.data)}
        // data => 
      )
      // .then()
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
      // console.log(this.json);
      // console.log('sdsd');
      // console.log(this.state.data);
      // console.log('qwe');
  }

  render() {
    const { data, isLoading } = this.state;
    

    return (
      <View style={{ flex: 1, padding: 10,paddingTop:20,backgroundColor:'#000' }}>
        <TextInput style={{backgroundColor:'white',borderRadius:10,width:width-20,marginBottom:20,height:50}}
            placeholder='Enter Keyword'
            // secureTextEntry={true}
            // returnKeyLabel = {"next"}
            // value={this.state.password}
            onChangeText={(text) => srch=text}
            />
            
            <TouchableOpacity onPress={this.srch}>
              <View style={{height: 60,borderRadius: 30,marginBottom:10, width: width-60,backgroundColor:'#97D45F',color:'white',alignSelf:'center',paddingTop:15}}>
                <Text style={{color:'#EAEFDC',fontWeight:'bold',fontSize:17,alignSelf:'center'}}>Search</Text>
              </View>
            </TouchableOpacity>

            
        {/* {isLoading ? <ActivityIndicator/> : ( */}
          <FlatList
          style={{backgroundColor:'black',borderRadius:10,marginRight:-20}}
            data={data}
            horizontal
            keyExtractor={item => item.imdbID}
            renderItem={({ item }) => (


              <View style={{marginRight:20}}>
                <Image source={{uri:item.Poster}} style={{height:1.48*width-70,width:width-20}}/>
                <Text style={{color:'white',fontSize:17,fontWeight:'bold'}}>{item.Title}</Text>
                <Text style={{color:'white',fontSize:17,fontWeight:'bold'}}> {item.Year}</Text>
              </View>
            )}
          />
        {/* )} */}
      </View>
    );
  }
};



