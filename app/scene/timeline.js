import React, {Component} from 'react';
import { StyleSheet, Text, Image, View, TextInput, Button, Dimensions, ScrollView, FlatList} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Story from '../components/story';
import axios from 'axios';
import randomParagraph from 'random-paragraph';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  navbar: {
    width: Dimensions.get('window').width,
    paddingTop: 20,
    paddingLeft: 7,
    paddingRight: 7,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(252,252,252)',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: 'rgb(230,230,230)'
  },
  navicon: {
    height: 23,
    resizeMode: 'contain',
  },
  logo: {
    height: 26,
    resizeMode: 'contain',
    top: 2
  },
  timeline: {
    flex: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  timelineContainer: {
    width: Dimensions.get('window').width,
    flex: 7
  },
  story: {
    width: Dimensions.get('window').width,
    height: 90,
    flexDirection: 'row',
    backgroundColor: 'rgb(252,252,252)',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: 'rgb(230,230,230)'
  },
  photoContainer: {
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width-20,
    height: 55,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: 'rgb(230,230,230)'
  },
  titleImg:{
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    backgroundColor: 'rgb(200,200,200)'
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width-16,
    height: 48,
  },
  textContainer: {
    width: Dimensions.get('window').width-26,
    marginBottom: 10
  },
  commentImg:{
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default class Routes extends Component {
  constructor(){
    super();
    this.state = {
      items: []
    }
  }
  componentWillMount(){
    axios.get('https://randomuser.me/api/?results=15')
    .then(function (response) {
      this.setState({
        items:
          response.data.results.map((x) => ({
            id: x.login.username,
            img_url: x.picture.medium
          }))
       })
    }.bind(this));
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Image source={require('../img/photo_icon.png')} style={styles.navicon} />
          <Image source={require('../img/logo.png')} style={styles.logo} />
          <Image source={require('../img/share_icon.png')} style={styles.navicon} />
        </View>
        <View style={styles.timeline}>
          <ScrollView style={styles.timelineContainer}>
            <Story/>
            {this.state.items.map((item,index)=>
              <View style={styles.photoContainer}>
                <View style={styles.titleContainer}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={styles.titleImg} source={{uri: item.img_url}}/>
                    <Text style={{marginLeft: 10, fontWeight: '500'}}>{item.id}</Text>
                  </View>
                  <Image style={{height: 3, resizeMode: 'contain'}} source={require('../img/photo_title_more.png')}/>
                </View>
                <Image style={styles.image} source={{uri: 'https://picsum.photos/300/300/?image='+Math.floor(Math.random() * 601)}}/>
                <View style={styles.btnContainer}>
                  <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', left: -6}}>
                    <Image style={{height: 22, resizeMode: 'contain', marginRight: -8}} source={require('../img/photo_btn_heart.png')}/>
                    <Image style={{height: 22, resizeMode: 'contain', marginRight: -8}} source={require('../img/photo_btn_comment.png')}/>
                    <Image style={{height: 22, resizeMode: 'contain', marginRight: -8}} source={require('../img/photo_btn_share.png')}/>
                  </View>
                  <Image style={{height: 22, resizeMode: 'contain'}} source={require('../img/photo_btn_save.png')}/>
                </View>
                <View style={styles.textContainer}>
                  <Text>
                    <Text style={{fontWeight: '500'}}>{this.state.items[Math.floor(Math.random() * 15)].id}</Text>
                    和
                    <Text style={{fontWeight: '500'}}>其他{Math.floor(Math.random() * 100)}人</Text>
                    都說讚
                  </Text>
                  <Text style={{fontWeight: '500', marginTop: 8}}>{item.id}</Text>
                  <Text>{randomParagraph({ sentences: 2 })}<Text style={{color: 'gray',fontWeight: '400'}}>..更多</Text></Text>
                  <Text style={{color: 'gray',fontWeight: '400',marginTop: 8}}>查看全部{Math.floor(Math.random() * 100)}則留言</Text>
                  <Text style={{marginTop: 8}}>
                    <Text style={{fontWeight: '500',marginRight: 4}}>{this.state.items[Math.floor(Math.random() * 15)].id}</Text>
                    {randomParagraph({ sentences: 1 })}
                  </Text>
                </View>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
      
    );
  }
}