const Dashboard = ({ user }) => {
  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <p>This is the dashboard</p>
    </main>
  );
};

export default Dashboard;
