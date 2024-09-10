import React, {useState, useEffect} from 'react';
import axios from 'axios';

//Import images
import CloudDLImg from '../assets/certificates/cloud-digital-leader.png';
import KotlinEssentialImg from '../assets/certificates/kotlin.png';
import ComputerVisionImg from '../assets/certificates/ComputerVision.png';

const Certificate = () => {

    // Create an array of object to store the imported images
    const certificateImages = {
        'CloudDLImg': CloudDLImg,
        'KotlinEssentialImg': KotlinEssentialImg,
        'ComputerVisionImg': ComputerVisionImg,
    };

    //attribute and set method for list of itens
    const [certificate, setCertificate] = useState([]);

    //Fetch data from backend
    const fetchCertificate = () => {
        axios.get(`${import.meta.env.VITE_API_URL}/certificate`)
            .then(response => {
                // Check if the response data is an array
                if (Array.isArray(response.data.certificateModels)) {
                    setCertificate(response.data.certificateModels);
                } else {
                    console.error('Expected an array but received:', response.data);
                }
            })
            .catch(error => console.log('Error fetching data: ', error));
    }

    useEffect(() => {
        fetchCertificate();
    }, []);

    //Display empty page.
    if(!certificate) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className='main-container'>
                <h1>Industry Certificates</h1>
                <div className="timeline-container">
                    {certificate.map((badge, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-item-content">
                                <div><a className='flex-horizontal' href={badge.IssuerURL} target='_blank' rel='noopener noreferrer'>
                                    <div className='badge-container'>
                                        <img className='badge-container-logo'  src={certificateImages[badge.CertificateImg]} alt="Badge" />
                                    </div>
                                    <div className='flex-vertical'>
                                        <p className="timeline-item-title">{badge.Title}</p>
                                        <p className='timeline-item-header-text'>Issued by {badge.Issuer} in {badge.Period}</p>
                                        <p className='timeline-item-header-text'><span>Skills</span>: {badge.Skills}</p>
                                        <p></p>
                                    </div>  
                                </a></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Certificate;