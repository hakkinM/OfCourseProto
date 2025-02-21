interface CourseProps {
  courseName: string;
  children: React.ReactNode;
}

class Course {
  constructor({ courseName, children }: CourseProps) {}
}
