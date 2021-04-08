import React from 'react';

const Social = (props) => {
  const socialNetworks = (
    <ul>
      {props.social.map((socialNetwork) =>
        <li key={socialNetwork.name}>
          <a href={socialNetwork.url} target='_blank' rel="noopener noreferrer">
            <i className={'fab fa-' + socialNetwork.name + ''}></i>
          </a>
        </li>
      )}
    </ul>
  );
  return (
    <div className="social">
      {socialNetworks}
      <a href="mailto:sergio.alv.dev@gmail.com?Subject=Hola!">
        <i className='fa fa-envelope'></i>
      </a>
    </div>
  )
};

export default Social;
