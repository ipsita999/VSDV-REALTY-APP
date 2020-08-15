import React from 'react'
import '../Styles/Team.css'


const Team = () => {

    return (
        <div className="team-container" id="team">
            <div className="team-container2" id="team">
            <h2 className = "team-title"> The Team</h2>
            <h3 className = "abt-team"> At VSDV Realty we understand that each client has different needs. During our initial consultation our agents will listen to your needs and devise a plan made just for you.</h3>
            <h2 className = "member-title2">Partners </h2>
            <h3 className = "abt-team2"> Onyx Realty : Development Partners</h3>
            </div>
         
            <div className="member-container">
            <h2 className = "member-title">Meet The Members </h2>
            <div className="member-container2">
            <div className="member1">
                <h4 className="member-name">Suneetha <br></br>Khambaladinne</h4>
                <p1>
                    Suneetha is an experienced Real Estate professional specializing in commercial and residential real estate. She can help guide you through every step of the home buying and selling journey. Suneetha lives in Princeton and enjoys cooking in her free time.
                </p1>
            </div>
            <div className="member1">
                <h4 className="member-name">Nishitha <br></br>Khambaladinne</h4>
                <p1>
                Nishitha is a real estate professional specializing in commercial real estate in New Jersey, Pennsylvania and New York. Her background in economics enables her to provide clients with thorough analysis and find their dream property.
                </p1>
            </div>
            </div>
            {/* <h2 className = "member-title">Meet The Partners </h2>
            <div className="member2">
                <h4 className="member-name">Onyx Realty </h4>
                <p1>
                Development Partners 
                </p1>
            </div> */}
            </div>
            
        
            

           

        </div>
    );

}
export default Team