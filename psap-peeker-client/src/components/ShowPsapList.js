import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import PsapCard from './PsapCard';



class ShowPsapList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            psaps: []
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

    render() {
        const psaps = this.state.psaps;
        console.log("PrintBook: " + psaps);
        let psapList;
    
        if(!psaps) {
          psapList = "there is no psap record!";
        } else {
          psapList = psaps.map((psap, k) =>
            <PsapCard psap={psap} key={k} />
          );
        }
    
        return (
          <div className="ShowPsapList">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <br />
                  <h2 className="display-4 text-center">Psaps List</h2>
                </div>
    
                <div className="col-md-11">
                  <Link to="/create-psap" className="btn btn-outline-warning float-right">
                    + Add New Psap
                  </Link>
                  <br />
                  <br />
                  <hr />
                </div>
    
              </div>
    
              <div className="list">
                    {psapList}
              </div>
            </div>
          </div>
        );
      }
}



export default ShowPsapList;