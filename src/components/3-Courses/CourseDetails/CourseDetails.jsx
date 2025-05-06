// import { useNavigate, useParams } from 'react-router-dom';
// import { myProjects } from '../myCourses'; 
// import './CourseDetails.css'; 

// export default function CourseDetails() {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const course = myProjects.find(c => c.id === id);

//   if (!course) {
//     return <div className="course-details">Course not found.</div>;
//   }

//   return (
//     <div className="course-details">
//       <img src={course.imgPath} alt={course.CourseName} className="course-image" />
//       <h1 className="course-title">{course.CourseName}</h1>
//       <p className="course-summary">{course.Details}</p>
//       <div className="course-content">
//         {course.content || "Full content coming soon..."}
//       </div>

//       <button 
//         className="back-button" 
//         onClick={() => navigate(-1)}
//       >
//         ← Back
//       </button>
//     </div>
//   );
// }
