import React from 'react'
import {Bookmark} from 'lucide-react'


const Card = ({logo,company,posted,role,tag1,tag2,wage,location}) => {
    
    return(
        <>
        <div className="card">
            <div className="box">
                <div className="top">
                    <div className="img"><img src={logo} alt=" logo" /></div>
                    <button id="bookmark">Save<Bookmark size={16} stroke-width={1}/></button>
                </div>
                <div className="center">
                    <div className="company">
                        <h3>{company}</h3>
                        <p>{posted} </p>
                    </div>
                    <div className="role">{role}</div>
                    <div className="tags">
                        <p>{tag1}</p>
                        <p>{tag2}</p>
                    </div>
                </div>
                <dev className="bottom">
                    <div className="left">
                        <div className="wage">{wage}</div>
                        <div className="location">{location}</div>
                    </div>
                    <button >Apply Now</button>
                </dev>
            </div>
        </div>
        </>
        )
        
        
}

export default Card
