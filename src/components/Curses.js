import React from 'react'

export const Curses = (props) => {

    const myCurses = (
        <div>
          {props.courses.map((course) =>
            <div className='item' key={course.name}>
              <h3>{course.name} @ {course.institution} <span> { course.duration }  {course.date}</span></h3>
              <p>{course.description}</p>
            </div>
          )}
        </div>
      );
    return (
        <div className='title'>
            <i className='fa fa-save'></i>
            <i className='fa fa-brain'></i>
            <h2>Cursos</h2>
            {myCurses}
        </div>
    )
}
