import React, {useState, useEffect} from 'react';
import axios from 'axios';
import linkedinImg from '../assets/Linkedin.png';
import githubImg from '../assets/GithubWhite.png';

const Footer = () => {

    //attribute and set method for list of itens
    const [about, setAbout] = useState([]);

    //Fetch data from backend
    const fetchAbout = () => {
        axios.get(import.meta.env.VITE_API_URL)
            .then(response => {
                // Check if the response data is an array
                if (Array.isArray(response.data.aboutModels)) {
                    setAbout(response.data.aboutModels);
                } else {
                    console.error('Expected an array but received:', response.data);
                }
            })
            .catch(error => console.log('Error fetching data: ', error));
    }

    useEffect(() => {
        fetchAbout();
    }, []);

    //Display empty page.
    if(!about) {
        return <div>Loading...</div>
    }

    return (
        <div className='footer'>
            <p>© 2024 Elton Evangelista. All rights reserved.</p>
            {
                about.map((item, index) => {
                    return (
                        <div key={index}>
                            <a href={item.LinkedIn} target='_blank' rel='noopener noreferrer'><img className='footerIcon' src={linkedinImg} alt='Linkedin'/></a>
                            <a href={item.GitHub} target='_blank' rel='noopener noreferrer'><img className='footerIcon' src={githubImg} alt='github'/></a>
                        </div>
                    );
                })
            }
        </div>
    );
}
export default Footer;