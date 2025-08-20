import { motion } from 'framer-motion';
import { workExperience } from '../../lib/data';

export default function WorkExperience() {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey building systems that bridge innovation and execution.
          </p>
        </div>

        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {job.position}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {job.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {job.location}
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                  {job.period}
                </span>
              </div>

              {job.description && (
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {job.description}
                </p>
              )}

              <ul className="space-y-2 mb-4">
                {job.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>

              {job.technologies && (
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}