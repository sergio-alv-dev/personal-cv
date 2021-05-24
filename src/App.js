import React from 'react';

import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import { Curses } from './components/Curses';
import { Portfolio } from './components/Portfolio';

import { sergio } from './person';

const { avatar, name, profession, bio, address, social, experience, education, certificates, courses, portfolio, cv } = sergio;

export const App = () => {
  return (

    <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={avatar}
              name={name}
              profession={profession}
              bio={bio}
              address={address}
              social={social} 
              cv= {cv}
            />

          </div>

          <div className='content-wrapper'>

              <div className='content'>
                <Experience experience={ experience } />
                <Education education={ education } />
                <Certificates certificates={ certificates } />
                <Curses courses = { courses }/>
                
                <Portfolio portfolio={ portfolio } />

              </div>
          </div>

        </div>
      </header>
  )
}
