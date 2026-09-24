function StatCard({ icon, value, label }) {
    return (
      <div className="overview-stat-card">
  
        <div className="overview-stat-icon">
          {icon}
        </div>
  
        <div>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
  
      </div>
    )
  }
  
  export default StatCard