import React, {Component} from 'react';
import { Router, Stack, Scene, Tabs, NavBar } from 'react-native-router-flux';
import { StyleSheet, Text, Image, View, TextInput, Button, TouchableOpacity} from 'react-native';

import Home from '../scene/home';
import TimeLine from '../scene/timeline';
import Story from '../scene/story';
import FriendInfo from '../scene/friend_info';
import Comments from '../scene/comments';
import Share from '../scene/share';

import HomeNavBar from '../components/home_navbar';

const styles = StyleSheet.create({
  tabicon: {
    height: 23,
    resizeMode: 'contain',
  }
})


export default class Routes extends Component {
  constructor(props){
    super(props);
    this.state = {
      tab: 'home'
    }
  }
  render() {
    return (
      <Router>
        <Tabs key="tabbar" hideNavBar showLabel={false}>
          <Stack 
            key="home" hideNavBar 
            icon={()=>{
              if(this.state.tab == 'home'){
                return <Image source={require('../img/nav_home_act.png')} style={styles.tabicon} />
              }else{
                return <Image source={require('../img/nav_home.png')} style={styles.tabicon} />
              }
            }}
          >
            <Scene key="timeline" component={TimeLine}/>
            <Scene key="story" component={Story}/>
            <Scene key="friend_info" component={FriendInfo}/>
            <Scene key="comments" component={Comments}/>
            <Scene key="share" component={Share}/>
          </Stack> 
          <Stack key="tab2" title="tab#2" hideNavBar icon={()=>(<Image source={require('../img/nav_search.png')} style={styles.tabicon} />)}>
            <Scene key="tab2_home" component={Home}/>
          </Stack>
          <Stack key="tab3" title="tab#3" hideNavBar icon={()=>(<Image source={require('../img/nav_add.png')} style={styles.tabicon} />)}>
            <Scene key="tab3_home" component={Home}/>
          </Stack>
          <Stack key="tab4" title="tab#4" hideNavBar icon={()=>(<Image source={require('../img/nav_heart.png')} style={styles.tabicon} />)}>
            <Scene key="tab4_home" component={Home}/>
          </Stack>
          <Stack key="tab5" title="tab#5" hideNavBar icon={()=>(<Image source={require('../img/nav_profile.png')} style={styles.tabicon} />)}>
            <Scene key="tab5_home" component={Home}/>
          </Stack>
        </Tabs>
      </Router>
    );
  }
}