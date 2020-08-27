import React from 'react';
import unsplash from '../api/unsplash';
import Container from '@material-ui/core/Container';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './App.css';

class App extends React.Component {
  state = {images:[]};
   onSearchSubmit = async(term) => {
    const response = await unsplash.get('/search/photos',{params:{query: term,per_page:16}});
    this.setState({images:response.data.results});
  }

  render(){
   return (
      <Container>
        <h1>Image Lookup</h1>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}></ImageList>
      </Container>
    );
  }
}

export default App;
