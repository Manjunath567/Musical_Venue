import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">

            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.227145914394!2d77.61243471953287!3d13.04796725667667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae176e29b13739%3A0xe64bb86542642414!2sManayata+Tech+Park%2C+Nagavara%2C+Bengaluru%2C+Karnataka!5e0!3m2!1sen!2sin!4v1552573844373"
                width="100%"
                height="500"
                frameborder="0"
                allowFullScreen
                ></iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;
