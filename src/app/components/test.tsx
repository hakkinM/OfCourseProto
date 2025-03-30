import { Module, Course } from "../types/types";

export const testModules: Module[] = [
  {
    moduleID: 123,
    moduleName: 'Matematiikka',
    description: "yes",
  }
];

export const invalidModule: Module = {
  moduleID: -1,
  moduleName: 'Invalid',
  description: 'Invalid',
};


export const testCourses: Course[] = [
  {
    courseID: 124,
    courseCode: 'MS-A0204',
    courseName: 'Differentiaali- ja integraalilaskenta 2',
    description: "yes",
  }
];

export const invalidCourse: Course = {
  courseID: -1,
  courseCode: 'Invalid',
  courseName: 'Invalid',
  description: "Invalid",
};