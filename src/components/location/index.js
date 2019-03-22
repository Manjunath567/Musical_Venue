import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">

            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.535393875707!2d76.8284703143526!3d17.337951808793736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc8c7580321fa11%3A0x40c8200b42c42260!2sSharana+Basaveshwara+Temple!5e0!3m2!1sen!2sin!4v1553268526265"
                width="100%"
                title="abc"
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
