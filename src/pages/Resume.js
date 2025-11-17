import React from 'react';
import '../components/Resume.css';

const skillSections = [
  {
    title: 'PROGRAMMING LANGUAGES',
    skills: ['Java', 'C/C++', 'Python', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'FRONTEND DEVELOPMENT',
    skills: ['React', 'Angular', 'Next.js', 'jQuery / AJAX / JSON'],
  },
  {
    title: 'BACKEND & API DEVELOPMENT',
    skills: ['Spring Boot', 'Node.js', 'Flask'],
  },
  {
    title: 'MACHINE LEARNING / AI',
    skills: ['PyTorch', 'TensorFlow', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'OpenCV', 'NLP'],
  },
  {
    title: 'DATA ENGINEERING & DATABASES',
    skills: ['PostgreSQL', 'Oracle DB', 'MySQL', 'MS SQL Server', 'MongoDB', 'Apache Kafka', 'Spark ETL'],
  },
  {
    title: 'CLOUD / DEVOPS & DEPLOYMENT',
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Linux/Unix', 'Jenkins', 'GitHub Actions'],
  },
  {
    title: 'TESTING & QA',
    skills: ['JUnit', 'Jest', 'Mockito', 'Postman', 'cURL'],
  },
  {
    title: 'TOOLS & METHODOLOGIES',
    skills: ['Agile (Scrum / Kanban)', 'JIRA', 'VS Code', 'IntelliJ', 'Eclipse', 'Jupyter / Colab / Anaconda'],
  },
];

const Resume = () => {
  return (
    <>
      <section className="resume-container" id="resume">
        <div className="resume-section">
          <h3>EDUCATION</h3>
          <div className="item">
            <div>
              <strong>University of Florida, Gainesville</strong>
              <p>Master of Science - Computer and Information Science</p>
              <p>CGPA: 3.66/4.0</p>
            </div>
            <span>08/2023 – 05/2025</span>
          </div>
          <div className="item">
            <div>
              <strong>Vellore Institute of Technology, Vellore</strong>
              <p>Bachelor of Technology - Electronics and Communication Engineering</p>
              <p>CGPA: 8.33/10.0</p>
            </div>
            <span>07/2019 – 05/2023</span>
          </div>
        </div>

        <div className="resume-section">
          <h3>EXPERIENCE</h3>
          <div className="item">
            <div>
              <strong>Software Engineer</strong>
              <p>Intersect Healthcare Systems Inc.</p>
              <p>
                - Developed 20+ reusable Angular components with TypeScript and SCSS for a doctor-facing healthcare portal, delivering key features
                such as patient details, appointment scheduling, reminders, and secure messaging, which improved provider efficiency by 25% and
                streamlined day-to-day clinical workflows.
              </p>
              <p>
                - Improved portal performance by refactoring legacy JavaScript code and applying lazy loading with modular code splitting, which
                reduced the initial page load time by 30%.
              </p>
              <p>
                - Integrated FHIR R4/R5 APIs with Angular services and RxJS observables to handle asynchronous HTTP requests,
                enabling secure, real-time patient data exchange. This reduced integration issues by 35% and cut average response times
                by 20%, ensuring compliance with interoperability standards.
              </p>
              <p>
                - Developed and maintained unit and integration test suites using Karma and Jest, achieving 80% code coverage. Combined this
                with Jenkins CI/CD pipelines to automate builds and deployments, reducing bugs by 25% and deployment time by 40%.
              </p>
              <p>
                - Participated in a major database restructure project, where I redesigned query patterns, indexes, and stored procedures. This
                reduced SQL query execution time by 10% and improved data retrieval performance by 20%.
              </p>
              <p>
                - Designed and implemented state management patterns using NgRx to handle patient records more efficiently. This reduced
                unnecessary component re-renders by 15% and improved the overall responsiveness of the healthcare portal.
              </p>
            </div>
            <span>05/2025 – Present</span>
          </div>

          <div className="item">
            <div>
              <strong>Software Developer</strong>
              <p>TEA Lab, University of Florida</p>
              <p>
                - Developed a 3D flight visualization tool using React, Flask, and Three.js, allowing researchers to upload datasets and interactively
                view drone trajectories in 3D. This replaced manual graph plotting workflows and reduced analysis time by 60%.
              </p>
              <p>
                - Utilized AWS Batch to automate the scheduling of drone model training jobs. Instead of starting jobs manually, Batch handled job
                queuing, scaling across nodes, and resource allocation, which allowed experiments to run continuously without developer intervention,
                reducing manual effort by 60%.
              </p>
              <p>
                - Accelerated model training by 70% by training on AWS EC2 instances, equipped with NVIDIA A100 GPUs. Used multi-GPU parallelism
                with CUDA and PyTorch Lightning’s distributed training features to split large drone trajectory datasets across GPUs, which significantly
                reduced training time while maintaining accuracy.
              </p>
              <p>
                - Improved monitoring and debugging efficiency by 35% by integrating CloudWatch Logs into the preprocessing pipeline, centralizing log
                ingestion and alerting for each stage of the data workflow.
              </p>
            </div>
            <span>05/2024 – 08/2024</span>
          </div>

          <div className="item">
            <div>
              <strong>Software Engineer Intern</strong>
              <p>Quantiphi, India</p>
              <p>
                - Built a multilingual real-time video translation platform with React, WebRTC, and TensorFlow to stream, transcribe, translate, and
                render subtitles across four languages, reducing manual translation time by 50%.
              </p>
              <p>
                - Designed a modular microservice structure with Flask, GPU-accelerated TensorFlow inference, and RabbitMQ message queues,
                enabling independent scaling of transcription, translation, and rendering services.
              </p>
              <p>
                - Set up live monitoring with Prometheus + Grafana to track GPU/CPU usage, queue depth, and stream latency, reducing troubleshooting
                time by 40%.
              </p>
            </div>
            <span>01/2023 – 05/2023</span>
          </div>

          <div className="item">
            <div>
              <strong>Software Engineer Intern</strong>
              <p>Incture, India</p>
              <p>
                - Designed Kafka-driven Spring Boot microservices that processed telemetry feeds from 50k+ IoT sensors. Implemented retry + DLQ
                semantics with Kafka Streams and Schema Registry to keep daily ingestion failure rates under 1%.
              </p>
              <p>
                - Built REST APIs (customer portals) with Java, Spring Data JPA, and PostgreSQL to automate service tickets, reducing ticket resolution
                time by 45%.
              </p>
              <p>
                - Added Elastic APM tracing and Grafana metrics to the CI/CD stack, creating early-warning dashboards that cut MTTR by 35%.
              </p>
            </div>
            <span>01/2022 – 07/2022</span>
          </div>
        </div>

        <div className="resume-section">
          <h3>SKILLS & CONTACT</h3>
          <p className="contact-email">sujan.imp123@gmail.com</p>
          <div className="skills-grid">
            {skillSections.map(section => (
              <div className="skill-card" key={section.title}>
                <p className="skill-card-title">{section.title}</p>
                <div className="skill-pill-group">
                  {section.skills.map(skill => (
                    <span className="skill-pill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
