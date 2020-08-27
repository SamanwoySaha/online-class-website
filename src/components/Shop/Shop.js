import React, { useState } from 'react';
import './Shop.css';
import Course from '../../components/Course/Course';
import Cart from '../../components/Cart/Cart';
import courses from '../../fakeData/courseData';

const Shop = () => {
    const [courseList, setCourseList] = useState(courses.slice(0, 15));
    const [myCourses, setMyCourses] = useState([]);

    const handleAddCourse = (newCourse) => {
        const newCourseList = [...myCourses, newCourse];
        setMyCourses(newCourseList);
        console.log(newCourseList);
    }

    return (
        <div className="shop d-flex">
            <div>
            {
                courseList.map( course => <Course 
                    course = {course}  
                    handleAddCourse={handleAddCourse}
                    key={course.shortName}
                    >
                    </Course>)
            }
            </div>
            <Cart myCourses = {myCourses}></Cart>
        </div>
    );
};

export default Shop;