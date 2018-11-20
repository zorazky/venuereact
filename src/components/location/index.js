import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10411.22242662249!2d-123.1204164!3d49.2800806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6f19bb45bb73289c!2sThe+Orpheum!5e0!3m2!1sen!2smx!4v1542712548354" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                title="testeando"
                allowFullScreen
            >
            </iframe>

            <div className="Location_tag">
                <div>Location</div>
            </div>
        </div>
    )
}

export default Location;