import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import PsapCard from './PsapCard';

class SearchPsap extends React.Component {
    render() {

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
                            
                        </form>
                        <div className="psaps-list">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPsap;