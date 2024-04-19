import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from "react-icons/fa6";

function Timeline(education) {

  function removeTimezone(dateString) {
    const date = new Date(dateString);

    const localDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));   // Convert date to local time

    return localDate.toISOString().split('T')[0];   // Format the date as YYYY-MM-DD
  }
  return (
    <section id="Timeline" className="py-8 mx-5">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          <span className="text-cyan-600">Timeline</span>
        </h3>
        <p className="text-gray-600 mt-3 text-lg">My Journey</p>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2">
          <div className="education mb-6 md:mb-0 ">
          <div className="text-gray-800 text-xl ml-5">Education</div>
            {
              education.education.map((item, i) => (
                <div key={i} className="mb-6">
                  <VerticalTimeline lineColor="#000">
                    <VerticalTimelineElement className="vertical-timeline-element--education" iconStyle={{ background: "#2d3748"}} icon={<FaGraduationCap className="text-cyan-600"/>} date={`${removeTimezone(item.startDate)} to ${removeTimezone(item.endDate)}`}>
                      <h3>{item.company_name}</h3>
                      <h5>{item.jobTitle}</h5>
                      <p>{item.summary}</p>
                    </VerticalTimelineElement>
                  </VerticalTimeline>
                </div>
              ))
            }
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="experience">
          <div className="text-gray-600 text-xl ml-5">Experience</div>
            {
              education.experience.map((item, i) => (
                <div key={i} className="mb-6">
                  <VerticalTimeline lineColor="#000">
                    <VerticalTimelineElement className="vertical-timeline-element--education" iconStyle={{ background: "#2d3748"}} icon={<FaGraduationCap className="text-cyan-600"/>} date={`${removeTimezone(item.startDate)} to ${removeTimezone(item.endDate)}`}>
                      <h3>{item.company_name}</h3>
                      <h5>{item.jobTitle}</h5>
                      <p>{item.summary}</p>
                    </VerticalTimelineElement>
                  </VerticalTimeline>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline

