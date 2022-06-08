import './NavItem.css'
import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <>
        <a href={`#/${props.url}`}>
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </a>
    </>