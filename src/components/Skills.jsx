import React from 'react';

function Skills({ skills }) {

  return (
    <section id="Skills" className="py-10 relative">
      <div className="mt-8 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-600 mt-3 text-lg">My Knowledge</p>
        <div className="flex item-center justify-center mt-12 gap-10 flex-wrap lg:px-10">
          {
            skills?.map((skill, i) => (
              <div key={i} className="border-4 group border-cyan-600 relative min-w-[10rem] max-w[16rem] p-10 rounded-xl bg-gray-500 text-white" data-aos="zoom-in">
                <div style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.percentage}%, #ddd ${skill.percentage}%)`,
                }} className="w-32 h-32 flex items-center justify-center rounded-full">
                  <div className="text-6xl w-28 h-28 bg-white rounded-full flex items-center justify-center group-hover:text-cyan-600">
                    <img src={skill.image.url} alt={skill.name} className="w-20 h-20" />
                  </div>
                </div>
                <p className="text-xl mt-3">{skill.name}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skills