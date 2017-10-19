import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const KEY = 'AIzaSyA0rZv0C8s5cDfHy4_LvGteaeTh_qiTPPY';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({key: KEY, term: 'surfboard'}, (videos) => {
      this.setState({videos})
    });
  }

  render() {
    return (
      <SearchBar />
    );
  }
}

export default App;
