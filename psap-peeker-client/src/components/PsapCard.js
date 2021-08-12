import React from 'react';
import '../App.css';
import psapicon from './icons/psap-icon.svg'



const PsapCard = props => {
    const psap = props.psap;

    return(
        <div className="card-container">
            <div className="card-info">
                <img src={psapicon} alt="Emergency Services Siren Icon" />

                <h3 className="card-info__text">
                    {psap.county} County
                </h3>

                <h3 className="card-info__text">
                    State: {psap.state}
                </h3>

                <h3 className="card-info__text">
                    {psap.phone_number}
                </h3>

            </div>
        </div>
    )
}



export default PsapCard;