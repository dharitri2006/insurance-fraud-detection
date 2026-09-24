import {
    ShieldCheck,
    FileSearch,
    Activity,
    TrendingUp
  } from "lucide-react"
  
  function Dashboard() {
    return (
      <div className="dashboard-page">
  
        {/* Header */}
        <div className="page-header">
          <div>
            <p className="eyebrow">INSURANCE ANALYTICS</p>
            <h1>Fraud Detection Dashboard</h1>
            <p className="page-description">
              Analyze insurance claims and identify potential fraud using
              machine learning.
            </p>
          </div>
  
          <a href="/prediction" className="primary-button">
            <FileSearch size={18} />
            New Prediction
          </a>
        </div>
  
        {/* Statistics */}
        <div className="stats-grid">
  
          <div className="stat-card">
            <div className="stat-icon">
              <FileSearch size={21} />
            </div>
  
            <div>
              <span>Total Predictions</span>
              <strong>—</strong>
            </div>
          </div>
  
          <div className="stat-card">
            <div className="stat-icon">
              <ShieldCheck size={21} />
            </div>
  
            <div>
              <span>Fraud Detected</span>
              <strong>—</strong>
            </div>
          </div>
  
          <div className="stat-card">
            <div className="stat-icon">
              <Activity size={21} />
            </div>
  
            <div>
              <span>Detection Model</span>
              <strong>Active</strong>
            </div>
          </div>
  
          <div className="stat-card">
            <div className="stat-icon">
              <TrendingUp size={21} />
            </div>
  
            <div>
              <span>API Status</span>
              <strong>Online</strong>
            </div>
          </div>
  
        </div>
  
        {/* Welcome Card */}
        <div className="welcome-card">
          <div>
            <span className="card-label">PREDICTION CENTER</span>
  
            <h2>Ready to analyze an insurance claim?</h2>
  
            <p>
              Enter claim, driver, accident, vehicle and financial
              information to generate a fraud prediction.
            </p>
  
            <a href="/prediction" className="secondary-button">
              Start Prediction
            </a>
          </div>
  
          <div className="welcome-icon">
            <ShieldCheck size={70} strokeWidth={1.4} />
          </div>
        </div>
  
      </div>
    )
  }
  
  export default Dashboard