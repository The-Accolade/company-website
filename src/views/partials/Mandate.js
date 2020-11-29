import React from 'react';
import Image from '../../components/elements/Image';

const Mandate = () => {
    return (
        <div>
            <h2 className="section-title">Our Mandate</h2>
            <Image
                src={require('./../../assets/pictures/mandate.png')}
                alt="madate"
                height={'100%'}
                className="mandate-image"
            />
        </div>
    )
}

export default Mandate
