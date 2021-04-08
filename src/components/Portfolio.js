import React from 'react';

export const Portfolio = (props) => {

    const myPortfolio = (
        <div>
            {props.portfolio.map( proyect =>
                <div className='item' key={proyect.name}>
                    <a href={proyect.url}>
                        <i className="fas fa-external-link-alt"></i>
                    </a>
                    <h3> {proyect.name} </h3>
                    
                    <p>{proyect.description}</p>
                </div>
            )}
        </div>
    );

    return (
        <div className='title'>
            <i className="fas fa-folder-open"></i>
            <h2>Portafolio </h2>
            {myPortfolio}
        </div>
    )
}
