import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';



//const port = process.env.PORT || 'http://localhost:8082/';



class CreatePsap extends React.Component {
    constructor() {
        super();
        this.state = {
            county: '',
            state: '',
            phone_number: ''
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();
        const data = {
            county: this.state.county,
            state: this.state.state,
            phone_number: this.state.phone_number
        }

        axios.post('https://shrouded-brushlands-00969.herokuapp.com/', data)
        .then(res => {
            this.setState({
                county: '',
                state: '',
                phone_number: ''
            })
            this.props.history.push('/')
        })
        .catch(err => {
            console.log(`Error in CreatePsap!`)
        })
    }

    render() {
        return(
            <div className="CreatePsap">
                <div className="create-psap-container">
                    <div className="row">
                        <div className="col-mid-8 m-auto">
                            <br />
                            <Link to="/" className="btn btn-outline-warning float-left">
                                &#187; Show PSAP List
                            </Link>
                        </div>
                        <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add PSAP</h1>
              <p className="lead text-center">
                  Create new PSAP
              </p>

              <form noValidate onSubmit={this.onSubmit}>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Enter the name of the county here. . .'
                    name='county'
                    className='form-control'
                    value={this.state.county}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Enter the state which the county belongs to here. . .'
                    name='state'
                    className='form-control'
                    value={this.state.state}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder='Enter the entire PSAP number without any spaces or symbols here. . .'
                    name='phone_number'
                    className='form-control'
                    value={this.state.phone_number}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default CreatePsap;