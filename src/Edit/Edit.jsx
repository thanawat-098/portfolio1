// import PropTypes from "prop-types";
// import "./Edit.css"; 

// function Edit({ user, setEditUser, fetchUsers }) {
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditUser({ ...user, [name]: value });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         `http://localhost:3002/updateuser/${user.id}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(user),
//         }
//       );
//       if (response.ok) {
//         fetchUsers();
//         setEditUser(null);
//       } else {
//         console.error("Error saving data");
//       }
//     } catch (error) {
//       console.error("Error saving data:", error);
//     }
//   };

//   const handleClosePopup = () => {
//     setEditUser(null);
//   };

//   return (
//     <div className="popup">
//       <div className="popup-inner">
//         <h2>Edit User</h2>
//         <form className="edit-form" onSubmit={handleFormSubmit}>
//           <div className="form-group">
//             <div className="input-container">
//               <h5>Full Name:</h5>
//               <input
//                 className="input"
//                 type="text"
//                 name="fullName"
//                 value={user.fullName}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="input-container">
//               <h5>Nickname:</h5>
//               <input
//                 className="input"
//                 type="text"
//                 name="nickName"
//                 value={user.nickName}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="input-container">
//               <h5>Birth Date:</h5>
//               <input
//                 className="input"
//                 type="date"
//                 name="birthDate"
//                 value={user.birthDate}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="input-container">
//               <h5>Gender:</h5>
//               <select
//                 value={user.gender}
//                 onChange={handleInputChange}
//                 className="input"
//                 name="gender"
//               >
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//               </select>
//             </div>
//             <div className="input-container">
//               <h5>Age:</h5>
//               <input
//                 className="input"
//                 type="text"
//                 name="age"
//                 value={user.age}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>

//           <div className="button-container">
//             <button className="save-button" type="submit">
//               Save
//             </button>
//             <button className="cancel-button" type="button" onClick={handleClosePopup}>
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// Edit.propTypes = {
//   user: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     fullName: PropTypes.string.isRequired,
//     nickName: PropTypes.string.isRequired,
//     birthDate: PropTypes.string.isRequired,
//     gender: PropTypes.string.isRequired,
//     age: PropTypes.number.isRequired,
//   }).isRequired,
//   setEditUser: PropTypes.func.isRequired,
//   fetchUsers: PropTypes.func.isRequired,
// };

// export default Edit;
