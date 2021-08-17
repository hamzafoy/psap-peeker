import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import PsapCard from './PsapCard';
import e from 'cors';



class ShowPsapList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            psaps: [],
            search: '',
            searchedPsaps: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8082/')
            .then(res => {
                this.setState({
                    psaps: res.data
                })
            })
            .catch(err => {
                console.log(`Error in ShowPsapList`)
            })
    }

    onChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    onSubmit = e => {
      e.preventDefault();
      this.setState({
        searchedPsaps: this.state.search
      })
    }

    render() {
        const psaps = this.state.psaps;
        //console.log(psaps);
        const filteredPsaps = this.state.searchedPsaps;
        //console.log(filteredPsaps);
        //let psapsFiltered = psaps.filter(psap => psap.county != 'Oldham')
        let psapList;
    
        if(filteredPsaps.length === 0) {
          if(!psaps) {
            psapList = "There are no PSAP records!";
          } else {
            psapList = psaps.map((psap, k) =>
              <PsapCard psap={psap} key={k} />
            );
          }
        } else {
          let psapsFiltered = psaps.filter(psap => psap.county == filteredPsaps)
          psapList = psapsFiltered.map((psap, k) =>
            <PsapCard psap={psap} key={k} onRender={console.log(psap)} />
          );
        }
    
        return (
          <div className="show-psap-list">
            <div className="show-psap-list-container">
              <div className="row">
                <div className="col-md-12">
                  <br />
                  <h2 className="display-4 text-center psap-list-heading">PSAPS List</h2>
                </div>
    
                <div className="col-md-12">
                  <Link to="/search-psap" className="btn btn-outline-warning float-left">
                    &#x1F50E;&#xFE0E; Search for PSAP
                  </Link>
                  <Link to="/create-psap" className="btn btn-outline-warning float-right">
                    + Add New PSAP
                  </Link>
                  <br />
                  <br />
                  <hr />
                </div>
    
              </div>
              <form noValidate onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type='text'
                                    placeholder='Enter the county whose PSAP you wish to find here. . .'
                                    name='search'
                                    className='form-control'
                                    value={this.state.search}
                                    onChange={this.onChange}
                                />
                                <input
                                    type="submit"
                                    className="btn btn-outline-warning btn-block mt-4"
                                />
                            </div>
                        </form>
                <div className="psaps-container">
                    <div className="psaps-list">
                        {psapList}
                    </div>
                </div>
            </div>
          </div>
        );
      }
}



export default ShowPsapList;