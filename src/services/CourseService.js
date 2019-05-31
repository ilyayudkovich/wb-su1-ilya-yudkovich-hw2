import courses from '../components/courses.json'


const jsonfile = require('jsonfile')
const courseFileName = '../components/courses.json'

// creates a new course instance and add it to the collection of courses
export function createCourse(course) {
    jsonfile.writeFile(courseFileName, course)
        .then(res => {
            console.log('write complete')
        })
        .catch(error => console.error(error))
}

// retrieves all course instances as an array of courses
export function findAllCourses() {
    return courses;
}

// retreives a course isntance that matches the id parameter
export function findCourseById(id) {
    return courses.filter(course => course.id === id);
}

// update the course instance whose id matches the id
// parameter. Updates the instance with values in course parameter
export function updateCourse(id, newCourse) {
    var course = findCourseById(id);
    course.title = newCourse.title;
    course.modules = newCourse.modules;
}


// deletes course instance whose id matches the id parameter
export function deleteCourse(id) {
    var index = courses.findIndex(course => course.id === id)
    courses.splice(index, 1)
}

