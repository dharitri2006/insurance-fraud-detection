import {
    ShieldCheck,
    Database,
    BrainCircuit,
    Server,
    Users,
    Car,
    FileText,
    DollarSign,
    MapPin,
    Workflow
  } from "lucide-react"
  
  import InfoCard from "../components/InfoCard"
  import SectionHeader from "../components/SectionHeader"
  import StatCard from "../components/StatCard"
  
  function ProjectOverview() {
    return (
      <div className="info-page">
  
        {/* Page Header */}
        <SectionHeader
          eyebrow="PROJECT OVERVIEW"
          title="Insurance Fraud Detection"
          description="An overview of the machine learning project, its purpose, data and prediction workflow."
        />
  
  
        {/* Project Statistics */}
        <section className="overview-stats">
  
          <StatCard
            icon={<Database size={21} />}
            value="12,002"
            label="Original Records"
          />
  
          <StatCard
            icon={<BrainCircuit size={21} />}
            value="Random Forest"
            label="ML Algorithm"
          />
  
          <StatCard
            icon={<Server size={21} />}
            value="API"
            label="Prediction Service"
          />
  
          <StatCard
            icon={<ShieldCheck size={21} />}
            value="Fraud / Not Fraud"
            label="Prediction Output"
          />
  
        </section>
  
  
        {/* Project Objective */}
        <InfoCard
          icon={<ShieldCheck size={21} />}
          title="Project Objective"
          subtitle="Identifying potentially fraudulent insurance claims"
        >
  
          <p className="info-text">
            The objective of this project is to develop a machine learning
            based system that can classify insurance claims according to
            whether fraud has been reported.
          </p>
  
          <p className="info-text">
            The system combines a processed insurance claims dataset, a
            trained Random Forest classification model and a prediction API
            with a React-based frontend interface.
          </p>
  
        </InfoCard>
  
  
        {/* System Overview */}
        <InfoCard
          icon={<Workflow size={21} />}
          title="System Overview"
          subtitle="The major components of the project"
        >
  
          <div className="technology-grid">
  
            <div className="technology-item">
              <Database size={20} />
  
              <div>
                <strong>Dataset</strong>
  
                <span>
                  Historical insurance claim information used for
                  model development.
                </span>
              </div>
            </div>
  
  
            <div className="technology-item">
              <BrainCircuit size={20} />
  
              <div>
                <strong>Machine Learning</strong>
  
                <span>
                  Random Forest Classifier used to classify claims.
                </span>
              </div>
            </div>
  
  
            <div className="technology-item">
              <Server size={20} />
  
              <div>
                <strong>Prediction API</strong>
  
                <span>
                  Receives claim information and returns the model prediction.
                </span>
              </div>
            </div>
  
  
            <div className="technology-item">
              <ShieldCheck size={20} />
  
              <div>
                <strong>React Frontend</strong>
  
                <span>
                  User interface for entering claim information and
                  viewing predictions.
                </span>
              </div>
            </div>
  
          </div>
  
        </InfoCard>
  
  
        {/* Feature Categories */}
        <InfoCard
          icon={<FileText size={21} />}
          title="Information Used for Prediction"
          subtitle="Major categories of insurance claim features"
        >
  
          <div className="feature-category-grid">
  
            <div className="feature-category">
  
              <div className="category-icon">
                <Users size={18} />
              </div>
  
              <div>
                <h3>Driver Details</h3>
  
                <p>
                  Driver age, gender, marital status, safety rating,
                  annual income and education information.
                </p>
              </div>
  
            </div>
  
  
            <div className="feature-category">
  
              <div className="category-icon">
                <FileText size={18} />
              </div>
  
              <div>
                <h3>Claim Details</h3>
  
                <p>
                  Claim number, claim date, claim day and previous
                  claim information.
                </p>
              </div>
  
            </div>
  
  
            <div className="feature-category">
  
              <div className="category-icon">
                <Car size={18} />
              </div>
  
              <div>
                <h3>Vehicle Details</h3>
  
                <p>
                  Vehicle age, category, price and color associated
                  with the claim.
                </p>
              </div>
  
            </div>
  
  
            <div className="feature-category">
  
              <div className="category-icon">
                <MapPin size={18} />
              </div>
  
              <div>
                <h3>Accident & Location</h3>
  
                <p>
                  Accident site, ZIP code, property status and
                  address-change information.
                </p>
              </div>
  
            </div>
  
  
            <div className="feature-category">
  
              <div className="category-icon">
                <DollarSign size={18} />
              </div>
  
              <div>
                <h3>Financial Details</h3>
  
                <p>
                  Total claim, injury claim, policy deductible and
                  annual premium information.
                </p>
              </div>
  
            </div>
  
  
            <div className="feature-category">
  
              <div className="category-icon">
                <ShieldCheck size={18} />
              </div>
  
              <div>
                <h3>Fraud Target</h3>
  
                <p>
                  The target variable used for classification is
                  <strong> fraud reported</strong>.
                </p>
              </div>
  
            </div>
  
          </div>
  
        </InfoCard>
  
  
        {/* Project Workflow */}
        <InfoCard
          icon={<Workflow size={21} />}
          title="Project Workflow"
          subtitle="From raw data to an interactive prediction system"
        >
  
          <div className="workflow">
  
            <div className="workflow-step">
  
              <div className="workflow-number">
                01
              </div>
  
              <div className="workflow-content">
                <h3>Dataset</h3>
  
                <p>
                  Historical insurance claim data was collected and
                  examined.
                </p>
              </div>
  
            </div>
  
  
            <div className="workflow-arrow">
              →
            </div>
  
  
            <div className="workflow-step">
  
              <div className="workflow-number">
                02
              </div>
  
              <div className="workflow-content">
                <h3>Preprocessing</h3>
  
                <p>
                  Data was cleaned, transformed and prepared for
                  machine learning.
                </p>
              </div>
  
            </div>
  
  
            <div className="workflow-arrow">
              →
            </div>
  
  
            <div className="workflow-step">
  
              <div className="workflow-number">
                03
              </div>
  
              <div className="workflow-content">
                <h3>Model Training</h3>
  
                <p>
                  A Random Forest Classifier was trained using the
                  processed data.
                </p>
              </div>
  
            </div>
  
  
            <div className="workflow-arrow">
              →
            </div>
  
  
            <div className="workflow-step">
  
              <div className="workflow-number">
                04
              </div>
  
              <div className="workflow-content">
                <h3>Prediction</h3>
  
                <p>
                  The trained model is used by the prediction API
                  to classify new claims.
                </p>
              </div>
  
            </div>
  
          </div>
  
        </InfoCard>
  
  
        {/* Final Callout */}
        <div className="overview-callout">
  
          <div className="callout-icon">
            <ShieldCheck size={22} />
          </div>
  
          <div>
            <strong>FraudGuard</strong>
  
            <p>
              A machine learning powered insurance claim classification
              system designed to provide a clear interface for submitting
              claims and viewing model predictions.
            </p>
          </div>
  
        </div>
  
      </div>
    )
  }
  
  export default ProjectOverview