import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>About</li>
          <li>Add Houses</li>
          <li>View Users</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </aside>

      
      <main className="main-content">
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
