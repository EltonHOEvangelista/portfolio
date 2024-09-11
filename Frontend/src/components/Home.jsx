import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Home = () => {

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

    //Handle load initial data
    const loadData = () => {

        axios.post(`${import.meta.env.VITE_API_URL}/load`)
        .then(response => {
          console.log('Data loaded: ', response.data);
          fetchAbout();
        })
        .catch(error => {
          console.error('There was an error loadind data!', error);
        });
    };

    //Display empty page.
    if(!about) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className='hero'>
                {
                    about.map((item, index) => {
                        return (
                            <div className='hero-container' key={index}>
                                <h1>{item.Name}</h1>
                                <h2>{item.Title}</h2>
                                <p>{item.Intro}</p>
                                <p>{item.Biography}</p>
                                <p>{item.Goal}</p>
                                <button onClick={() => window.open(item.LinkedIn, '_blank')} >Contact Me</button>
                            </div>
                        );
                    })
                }
            </div>
            {/* <div><button onClick={loadData}>Load Resume</button></div> */}
        </>
    );
}
export default Home;