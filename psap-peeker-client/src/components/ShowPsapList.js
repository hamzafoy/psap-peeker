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
          <div className="show-psap-list">
            <div className="show-psap-list-container">
              <div className="row">
                <div className="col-md-12">
                  <br />
                  <h2 className="display-4 text-center psap-list-heading">PSAPS List</h2>
                </div>
    
                <div className="col-md-12">
                  <Link to="/create-psap" className="btn btn-outline-warning float-right">
                    + Add New PSAP
                  </Link>
                  <br />
                  <br />
                  <hr />
                </div>
    
              </div>
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