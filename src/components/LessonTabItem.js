import React from 'react'

const LessonTabItem = ({lesson}) =>
    <li className="nav-item">
    <a className="nav-link active" href="#">{lesson}</a>
    </li>

export default LessonTabItem
