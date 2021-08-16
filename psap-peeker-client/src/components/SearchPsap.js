import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import PsapCard from './PsapCard';

class SearchPsap extends React.Component {
    constructor() {
        super();
        this.state = {
            county: '',
            searchResult: []
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const data = {
            county: this.state.county
        }

        axios.get('http://localhost:8082/search-psap')
            .then(res => {
                this.setState({
                    searchResult: res.data
                })
                .catch(err => {
                    console.log(`Error with SearchPsap`)
                })
            })
    }

    render() {
        const searchResult = this.state.searchResult;
        let resultToRender;

        if(!searchResult) {
            searchResult = `Unable to match your search to a PSAP in the records`;
        } else {
            resultToRender = <PsapCard psap={searchResult} />
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
                    <Link to="/" className="btn btn-outline-warning float-left">
                        &#187; Show PSAP List
                    </Link>
                    <Link to="/create-psap" className="btn btn-outline-warning float-right">
                        + Add New PSAP
                    </Link>
                    <br />
                    <br />
                    <hr />
                    </div>
        
                </div>
                    <div className="psaps-container">
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type='text'
                                    placeholder='Enter the county whose PSAP you wish to find here. . .'
                                    name='county'
                                    className='form-control'
                                    value={this.state.county}
                                    onChange={this.onChange}
                                />
                                <input
                                    type="submit"
                                    className="btn btn-outline-warning btn-block mt-4"
                                />
                            </div>
                        </form>
                        <div className="psaps-list">
                            {resultToRender}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPsap;