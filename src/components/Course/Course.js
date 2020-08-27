import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faTag } from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    const { name, shortName, category, tag, instructor, duration, lectures, coverImage, price } = props.course;
    const handleAddCourse = props.handleAddCourse;

    return (
        <div className="course d-flex">
            <img className="course-coverImage" src={coverImage} alt={shortName} />
            <div className="course-info">
                <h4 className="mr-3">{name}</h4>
                <h6>{tagChecker(tag)}</h6>
                <h6 className="course-category"><FontAwesomeIcon icon={faTag} />        {category}</h6>
                <p>by {instructor}</p>
                <p className="course-duration">
                    <strong>{duration}</strong> Total Hours - <strong>{lectures}</strong> Lectures
                </p>
                <button className="btn btn-primary enroll-btn" onClick={() => handleAddCourse(props.course)}><FontAwesomeIcon icon={faCartPlus} /> Enroll Now</button>
            </div>
            <h4 className="course-price"> ${price}</h4>
        </div>
    );
};

function tagChecker(tag) {
    const badgeType = tag === 'Best Seller' ? 'warning' 
        : tag === 'Popular' ? 'info'
        : tag === 'New' ? 'primary'
        : null;

    return badgeFixer(badgeType, tag);
}

function badgeFixer(badgeType, tag) {
    const badgeClass = 'badge badge-';

    return ( 
        <span className={`${badgeClass}${badgeType}`}>{tag}</span>
    );
}

export default Course;