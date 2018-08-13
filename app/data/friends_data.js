import axios from 'axios';

function get_friendsData(){
  let FriendsData = [];
  axios.get('https://randomuser.me/api/?results=15')
  .then(function (response) {
    for (let i = 0; i < 15; i++) {
      const friend_data = {
        id: response.data.results[i].login.username,
        img_url: response.data.results[i].picture.thumbnail
      }
      FriendsData.push(friend_data);
    }
  });
  return FriendsData;
}

export default get_friendsData;