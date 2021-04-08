import React from 'react';

const Certificates = (props) => {
  const myCertificates = (
    <div>
      {props.certificates.map((cert) =>
        <div className='item' key={cert.name}>
          <h3>{cert.name} @ 
            <a 
              href={cert.link} 
              target="_blank"
              rel="noopener noreferrer"
            >
              { cert.institution }
              </a> 
              <span> { cert.duration } {cert.date}</span>
          </h3>
          <p>{cert.description}</p>
        </div>
      )}
    </div>
  );
  
  return (
    <div className='title'>
      <i className='fa fa-trophy'></i>
      <h2>Certificados</h2>
      {myCertificates}
    </div>
  )
};

export default Certificates;
