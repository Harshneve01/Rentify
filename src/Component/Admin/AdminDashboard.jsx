import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Dummy admin data (later fetch from backend / auth)
  const admin = {
    name: "Admin User",
    email: "admin@yourstay.com",
    role: "Super Admin",
  };

  const AddHome = () => {
    navigate("/add-home");
  };

  const About = () => {
    navigate("/about");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li onClick={About}>About</li>
          <li onClick={AddHome}>Add Houses</li>
          <li>View Users</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Admin Info */}
        <div className="admin-info">
          <h1>Welcome, {admin.name}</h1>
          <p><strong>Email:</strong> {admin.email}</p>
          <p><strong>Role:</strong> {admin.role}</p>
        </div>

        {/* Dashboard Stats */}
        <div className="main-container">
          <div className="box" id="box1">
            3 : Total Number of Houses
          </div>
          <div className="box" id="box2">
            2 : Booked Houses
          </div>
          <div className="box" id="box3">
            1 : UnBooked Houses
          </div>
        </div>

        {/* Houses Table */}
        <div className="housetb">
          <h2>Houses Table</h2>
          <table>
            <thead>
              <tr>
                <th>House ID</th>
                <th>House Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Harsh Villa</td>
                <td>Booked</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Nikhil Villa</td>
                <td>Available</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Zuber Apartment</td>
                <td>Booked</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
