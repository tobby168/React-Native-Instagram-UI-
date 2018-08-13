import React, {Component} from 'react';
import { Router, Stack, Scene, Tabs } from 'react-native-router-flux';
import Home from '../scene/home';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Tabs key="tabbar" hideNavBar>
            <Stack key="tab1" title="tab#1">
              <Scene key="tab1_home" component={Home}/>
            </Stack> 
            <Stack key="tab2" title="tab#2">
              <Scene key="tab2_home" component={Home}/>
            </Stack>
            <Stack key="tab3" title="tab#3">
              <Scene key="tab3_home" component={Home}/>
            </Stack>
            <Stack key="tab4" title="tab#4">
              <Scene key="tab4_home" component={Home}/>
            </Stack>
            <Stack key="tab5" title="tab#5">
              <Scene key="tab5_home" component={Home}/>
            </Stack>
          </Tabs>
        </Stack>
      </Router>
    );
  }
}