import React, {useState, useEffect} from 'react';
import axios from 'axios';

//Import images
import TruckingImg from '../assets/Industry/trucking.png';
import RailImg from '../assets/Industry/rail.png';
import ConstructionMachineryImg from '../assets/Industry/construction.png';
import AutomotiveImg from '../assets/Industry/automotive.png';
import UtilityImg from '../assets/Industry/utility.png';

const Industry = () => {

    // Create an array of object to store the imported images
    const industryImages = {
        'TruckingImg': TruckingImg,
        'RailImg': RailImg,
        'ConstructionMachineryImg': ConstructionMachineryImg,
        'AutomotiveImg': AutomotiveImg,
        'UtilityImg': UtilityImg,
    };

    //attribute and set method for list of itens
    const [industry, setIndustry] = useState([]);

    //Fetch data from backend
    const fetchIndustry = () => {
        axios.get(`${import.meta.env.VITE_API_URL}/industry`)
            .then(response => {
                // Check if the response data is an array
                if (Array.isArray(response.data.industryModels)) {
                    setIndustry(response.data.industryModels);
                } else {
                    console.error('Expected an array but received:', response.data);
                }
            })
            .catch(error => console.log('Error fetching data: ', error));
    }

    useEffect(() => {
        fetchIndustry();
    }, []);

    //Display empty page.
    if(!industry) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className='general-container'>
                <h2>Throughout my career, I have specialized in the application of telematics solutions across various sectors, including:</h2>
                <div className="timeline-container">
                    {industry.map((sector, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-item-content">
                                <div className='flex-horizontal'>
                                    <div className='badge-container'>
                                        <img src={industryImages[sector.IndustryImg]} alt="Badge" />
                                    </div>
                                    <div className='flex-vertical'>
                                        <p className="timeline-item-title">{sector.Title}</p>
                                        <p className='timeline-item-header-text'>{sector.Description}</p>
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
export default Industry;