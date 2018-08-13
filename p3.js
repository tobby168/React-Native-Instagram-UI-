componentWillMount(){
  axios.get('https://randomuser.me/api/?results=25')
  .then(function (response) {
    this.setState({
      items:
        response.data.results.map((x) => ({
          id: x.login.username,
          img_url: x.picture.thumbnail
        }))
     })
  }.bind(this));
}
render() {
  return (
    <ScrollView horizontal style={styles.story}>
      {this.state.items.map(item=><Text>{item.id}</Text>)}
    </ScrollView>
  );
}