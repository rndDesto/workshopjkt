import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../App.css';
// import User from './User';
import SearchBar from '../components/SearchBar';

class App extends Component {

    state = {
        loading: true,
        search:"",
        API:[]
    }

    onChangeHandler = (e) =>{
        console.log(e.target.value);

    }

    componentDidMount(){
        this.fetchingData();
    }

    fetchingData = () => {
        const link ="https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

        fetch(link)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                API: data
            })
        })
    }

    

  render() {
    let dataBlog = null;

    dataBlog = this.state.API.map( val => {
        return (
            <div key={val.id}>
                <p>{val.title}</p>
            </div>
        )
    })
    return (
      <div>
        <SearchBar cari={this.onChangeHandler.bind(this)} />
        {dataBlog}
      </div>
    )
  }
}



export default App;
