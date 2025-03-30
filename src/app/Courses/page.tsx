'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Course } from '@/app/types/types';
import { Header, Footer } from "@/app/components/headerAndfooter/headerfooter"
import { CheckCircle, Search, SlidersHorizontal } from "lucide-react"
import { testCourses } from '../components/test';

const CourseListPage = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col text-black bg-white">
      <Header />
      <main className="flex-1 px-6 py-8">
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
          <h1 className="text-2xl font-bold">Hae kursseja</h1>

          {/* Search + Filters toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 shadow-sm bg-white w-full sm:max-w-md">
              <Search size={20} className="text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Hae kursseja..."
                className="w-full outline-none text-sm bg-white text-black"
              />
            </div>

            <div className="flex gap-2">
              <button
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition"
              >
                <SlidersHorizontal size={16} />
                Suodattimet
              </button>

              <button
                className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Hae
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Tulokset</h2>
            <CourseList courses={testCourses}/>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default CourseListPage;

const CourseList = ({ courses }: { courses: Course[] }) => {
  return (
    <div className="max-h-[500px] overflow-y-auto">
      {courses.map((course) => (
        <CourseEntry key={course.courseID} course={course} />
      ))}
    </div>
  );
};

const CourseEntry = ({ course }: { course: Course }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/Courses/${course.courseCode}`)}
      className="w-full text-left border rounded p-4 bg-white shadow-sm hover:bg-gray-50 cursor-pointer"
    >
      <h3 className="font-semibold">
        {course.courseCode} {course.courseName}
      </h3>
      <p>Katselukerrat: 123</p>
      <p>Arviointeja: 123</p>
    </button>
  );
};