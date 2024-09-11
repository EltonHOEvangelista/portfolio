import React, {useState, useEffect} from 'react';
import axios from 'axios';

//Import images
import seeDetailImg from '../assets/details_g.png';
import AutotracImg from '../assets/autotrac.png';
import FCAImg from '../assets/fcagroup.png';
import growthImg from '../assets/growth.png';

const Experience = () => {

    // Create an array of object to store the imported images
    const companyImages = {
        'Professional Development': growthImg,
        'Autotrac Telecommunications': AutotracImg,
        'FCA Fiat Chrysler Automobiles': FCAImg,
    };

    //attribute and set method for list of itens
    const [experience, setExperience] = useState([]);

    //Fetch data from backend
    const fetchExperience = () => {
        axios.get(`${import.meta.env.VITE_API_URL}/experience`)
            .then(response => {
                // Check if the response data is an array
                if (Array.isArray(response.data.experienceModels)) {
                    setExperience(response.data.experienceModels);
                } else {
                    console.error('Expected an array but received:', response.data);
                }
            })
            .catch(error => console.log('Error fetching data: ', error));
    }

    useEffect(() => {
        fetchExperience();
    }, []);

    //Display empty page.
    if(!experience.length) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className='main-container'>
                <h1>Professional Experience</h1>
                <div className="timeline-container">
                    {experience.map((milestone, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-item-date">{milestone.Period}</div>
                            <div className="timeline-item-content">
                                <div><a className='flex-horizontal' href={milestone.Website} target='_blank' rel='noopener noreferrer'>
                                        <img className='flex-horizontal-logo' src={companyImages[milestone.Company]} alt="company logo" />
                                        <p className="timeline-item-title">{milestone.Company}</p>
                                </a></div>
                                <div className='flex-horizontal'>
                                    <p className="timeline-item-header-text">{milestone.Shareholders}</p>
                                </div>
                                <div className='flex-horizontal'>
                                    <p className="timeline-item-header-text">{milestone.Description}</p>
                                </div>
                                <div className='flex-horizontal'>
                                    <p className="timeline-item-header-text">{milestone.Location} {milestone.Size}.</p>
                                </div>
                                <img className='seeDetailIcon' src={seeDetailImg} alt="detail icon"/>
                                <div className='timeline-item-details'>
                                    {milestone.jobPosition && <p className='timeline-item-body-text'>Job Position:</p>}
                                    <div className='timeline-exp-container'>
                                        {milestone.JobPosition.map((position, index) => (
                                            <div className="timeline-item" key={index}>
                                                <div className="timeline-item-date">{position.Period}</div>
                                                <div className="timeline-exp-item-content">
                                                    <div className='flex-horizontal'><p className="timeline-item-title">{position.Title}</p></div>
                                                    <p className='timeline-item-header-text'><span>Skills</span>: {position.Skills}</p>
                                                    <p className='timeline-item-body-text'><span>Duties</span>:</p>
                                                    <ul><div>{position.Duties.map((duty, index) => (
                                                            <li>
                                                                <div className='flex-horizontal'><p className="timeline-item-body-text">{duty}</p></div>
                                                            </li>
                                                            ))}
                                                    </div></ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Experience;