'use client';

import { useParams } from 'next/navigation';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { ReviewCourseInput } from '@/app/components/reviewInput/reviewInput';
import Image from "next/image"
import { Header, Footer } from "@/app/components/headerAndfooter/headerfooter"
import { testCourses, invalidCourse } from "@/app/components/test"
import ReviewWindow from "@/app/pages/review-section"
import RatingPresentation from "@/app/components/courseComponents/RatingPresentation/RatingPresentation"

const CoursePage = () => {
  const { code } = useParams(); // code = 'MS-A0204' for example
  const course = testCourses.find((c) => (c.courseCode == code)) ?? invalidCourse;

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-4 py-6 space-y-4">
        {/* Module Overview */}
        <div className="border rounded-lg bg-[#f3f6ff] p-4 flex flex-col md:flex-row items-start gap-4">
          <Image
            src="/module-image.jpg"
            alt="Module"
            width={140}
            height={140}
            className="rounded object-cover"
          />

          <div className="flex-1 space-y-1">
            <h2 className="text-lg font-semibold">{course.courseName}</h2>
            <p className="text-sm text-gray-700 leading-snug">
              Tämän sivuaineen suorittamalla opiskelijat voivat kehittää matemaattista ajatteluaan ja ongelmanratkaisutaitoja, sekä oppia matematiikan ja tilastotieteen menetelmiä, joista on hyötyä tieteessä, teknologiassa, taiteissa ja kauppatieteissä.
            </p>
            <div className="flex gap-2 pt-2">
              <ReviewCourseInput pageID={course.courseID}/>
            </div>
          </div>
          <div className="text-sm text-right space-y-1 min-w-[160px]">
            <RatingPresentation pageID={course.courseID}/>
          </div>
        </div>
        {/* Comments Section */}
        <div className="border rounded-lg bg-[#f3f6ff] p-4">
            <ReviewWindow pageID={course.courseID} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoursePage;
