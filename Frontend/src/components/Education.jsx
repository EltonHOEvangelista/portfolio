import React, {useState, useEffect} from 'react';
import axios from 'axios';

//Import images
import degreeImg from '../assets/degree-icon-w.png';
import universityImg from '../assets/university-icon-w.png';
import seeDetailImg from '../assets/details_g.png';

//Project images: name must match the project name in the database.
import truckdriverImg from '../assets/projects/p-truck-driver.png';
import handShakeImg from '../assets/projects/p-home-handshake.png';
import automImg from '../assets/projects/p-autom-mp.png';
import bearchefsImg from '../assets/projects/p-bear-chefs.png';
import aiRoadImg from '../assets/projects/p-ai-road.png';
import dailycareImg from '../assets/projects/p-daily-care.png';

const Education = () => {

    // Create an array or object to store the imported images if needed
  const projectImages = {
    'truckdriverImg': truckdriverImg,
    'handShakeImg': handShakeImg,
    'automImg': automImg,
    'bearchefsImg': bearchefsImg,
    'aiRoadImg': aiRoadImg,
    'dailycareImg': dailycareImg,
  };

    //attribute and set method for list of itens
    const [education, setEducation] = useState([]);

    //Fetch data from backend
    const fetchEducation = () => {
        axios.get(`${import.meta.env.VITE_API_URL}/education`)
            .then(response => {
                // Check if the response data is an array
                if (Array.isArray(response.data.educationModels)) {
                    setEducation(response.data.educationModels);
                } else {
                    console.error('Expected an array but received:', response.data);
                }
            })
            .catch(error => console.log('Error fetching data: ', error));
    }

    useEffect(() => {
        fetchEducation();
    }, []);

    //Display empty page.
    if(!education) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className='main-container'>
                <h1>Academic Background</h1>
                <div className="timeline-container">
                    {education.map((milestone, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-item-date">{milestone.Period}</div>
                            <div className="timeline-item-content">
                                <div className='flex-horizontal'>
                                    <img className='flex-horizontal-img'src={degreeImg} alt="degree icon"/>
                                    <p className="timeline-item-title">{milestone.Title}</p>
                                </div>
                                <div className='flex-horizontal'>
                                    <img className='flex-horizontal-img' src={universityImg} alt="university icon"/>
                                    <a href={milestone.InstitutionURL} target='_blank' rel='noopener noreferrer'><p className="timeline-item-title">{milestone.Institution}</p></a>
                                </div>
                                <img className='seeDetailIcon' src={seeDetailImg} alt="detail icon"/>
                                <div className='timeline-item-details'>
                                    {milestone.Description !== "..." && <p className='timeline-item-description'>{milestone.Description}</p>}
                                    <p className='timeline-item-header-text'><span>Skills</span>: {milestone.Skills}</p>
                                    {milestone.KeyProjects.length > 0 &&
                                    <div className="carousel-container">
                                        <p className='timeline-item-body-text'>Academic Projects:</p>
                                        <ul className='carousel'>
                                            {milestone.KeyProjects.map((project, index) => (
                                                <>
                                                    <a href={project.ProjectUrl} target='_blank' rel='noopener noreferrer'><li className='carousel-item' key={index}>
                                                            <div className='carousel-card'>
                                                                <a href={project.ProjectUrl} target='_blank' rel='noopener noreferrer'><img src={projectImages[project.ProjectImg]} alt="project icon" /></a>
                                                            </div>
                                                            <div className='carousel-card-title'>
                                                                <p>{project.Title}</p>
                                                            </div>
                                                            <div className='carousel-card-details'>
                                                                <p><span>Description</span>: {project.Description}</p>
                                                                <p><span>Applied Technologies</span>: {project.Skills}</p>
                                                            </div>
                                                        </li>
                                                    </a>                     
                                                </>
                                            ))}
                                        </ul>
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Education;