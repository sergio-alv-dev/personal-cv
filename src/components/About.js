import React from 'react';
import PropTypes from 'prop-types';
import Social from './Social';


const About = ({avatar, name, profession, bio, address, social}) => {
  return (
    <div className='bio'>
      <div className='avatar'>
        <img src={avatar} alt={name} />
      </div>
      <div className='title'>
        <h1>{name}</h1>
        <h2>{profession}</h2>

        {/* <h2>
        <i className='fab fa-react'></i>
        <i className='fab fa-node'></i>
        <i className='fab fa-python'></i>
        </h2> */}

      </div>
      <div className='desc'>
        <p>{bio}</p>

      </div>
      <div className='address'>
        <p>{address}</p>
      </div>
      <Social social={social} />
      
      <br/>
      <a href="../assets/SergioAlvarezCV-2021.pdf" download="SergioAlvarezCV-2021.pdf">Descarga Mi CV aquí</a>
      
      
    </div>

  );
};

About.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  address: PropTypes.string,
  social: PropTypes.array
};

export default About;
