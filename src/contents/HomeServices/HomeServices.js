import React, { useEffect, useState } from 'react';

const HomeServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-ridge-45134.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            {
                services.map(servie => <h1>Service</h1>)
            }
        </div>
    );
};

export default HomeServices;