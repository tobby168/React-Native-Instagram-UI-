import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  story: {
    width: Dimensions.get('window').width,
    height: 95,
    flexDirection: 'row',
    backgroundColor: 'rgb(252,252,252)',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: 'rgb(230,230,230)'
  },
  id: {
    fontSize: 10,
  },
  storyBtn: {
    marginLeft: 6,
    marginRight: 6,
    marginTop: 6,
    width: 70,
    alignItems: 'center',
  },
  btnImgOuter: {
    width: 65,
    height: 65,
    resizeMode: 'contain',
  },
  btnImg: {
    width: 56,
    height: 56,
    borderRadius: 28,
    position: 'absolute',
    top: 5,
    left: 5,
  },
  btnText: {
    marginTop: 3,
    fontSize: 12,
    fontWeight: '300',
    textAlign: 'center'
  }
});

import get_friendsData from '../data/friends_data';


export default class Story extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }
  componentWillMount(){
    axios.get('https://randomuser.me/api/?results=25')
    .then(function (response) {
      this.setState({
        items:
          response.data.results.map((x) => ({
            id: x.login.username,
            img_url: x.picture.medium,
            read: false
          }))
       })
    }.bind(this));
  }
  handleOnPress(index){
    let items = this.state.items;
    items[index].read = true;
    this.setState({items});
  }
  render() {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false} style={styles.story}>
        {this.state.items.map((item,index)=>
          <TouchableOpacity key={index} onPress={this.handleOnPress.bind(this, index)} style={styles.storyBtn}>
            <View>
              <Image style={styles.btnImgOuter} source={(!item.read)?require('../img/story_btnouter_act.png'):require('../img/story_btnouter_inact.png')}/>
              <Image style={styles.btnImg} source={{uri: item.img_url}}/>
            </View>
            <Text style={styles.btnText}>{(item.id.length>8)?item.id.substring(0,8)+'...':item.id}</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    );
  }
}