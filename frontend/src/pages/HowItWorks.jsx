import {
    Workflow,
    FileInput,
    Database,
    Wrench,
    BrainCircuit,
    Server,
    Send,
    ShieldCheck,
    ArrowDown,
    CheckCircle2,
    Layers3
  } from "lucide-react"
  
  import InfoCard from "../components/InfoCard"
  import SectionHeader from "../components/SectionHeader"
  import StatCard from "../components/StatCard"
  import ProcessStep from "../components/ProcessStep"
  
  function HowItWorks() {
    return (
      <div className="info-page">
  
        {/* Page Header */}
        <SectionHeader
          eyebrow="SYSTEM WORKFLOW"
          title="How It Works"
          description="The complete flow from insurance claim input to the final fraud classification."
        />
  
  
        {/* System Statistics */}
        <section className="overview-stats">
  
          <StatCard
            icon={<FileInput size={21} />}
            value="28"
            label="Claim Inputs"
          />
  
          <StatCard
            icon={<Layers3 size={21} />}
            value="44"
            label="Processed Features"
          />
  
          <StatCard
            icon={<BrainCircuit size={21} />}
            value="100"
            label="Decision Trees"
          />
  
          <StatCard
            icon={<Server size={21} />}
            value="1"
            label="Prediction API"
          />
  
        </section>
  
  
        {/* Complete Workflow */}
        <InfoCard
          icon={<Workflow size={21} />}
          title="Complete Prediction Workflow"
          subtitle="How a claim moves through the FraudGuard system"
        >
  
          <div className="system-flow">
  
            <ProcessStep
              number="01"
              icon={<FileInput size={20} />}
              label="INPUT"
              title="Insurance Claim"
              description="The user enters the required insurance claim information through the React frontend."
            />
  
            <ProcessStep
              number="02"
              icon={<Send size={20} />}
              label="REQUEST"
              title="Prediction Request"
              description="The frontend sends the claim information to the existing prediction API."
            />
  
            <ProcessStep
              number="03"
              icon={<Wrench size={20} />}
              label="PREPROCESSING"
              title="Feature Preparation"
              description="The submitted claim data is prepared in the format expected by the trained machine learning model."
            />
  
            <ProcessStep
              number="04"
              icon={<BrainCircuit size={20} />}
              label="MODEL"
              title="Random Forest Classification"
              description="The trained Random Forest classifier processes the prepared features using its 100 decision trees."
            />
  
            <ProcessStep
              number="05"
              icon={<ShieldCheck size={20} />}
              label="OUTPUT"
              title="Fraud Classification"
              description="The model returns a classification indicating whether the claim is predicted as fraudulent or not fraudulent."
            />
  
            <ProcessStep
              number="06"
              icon={<CheckCircle2 size={20} />}
              label="RESULT"
              title="Prediction Displayed"
              description="The prediction response is returned to the React frontend and displayed to the user."
            />
  
          </div>
  
        </InfoCard>
  
  
        {/* Architecture */}
        <InfoCard
          icon={<Server size={21} />}
          title="System Architecture"
          subtitle="The main technologies working together"
        >
  
          <div className="feature-category-grid">
  
            <div className="feature-category">
  
              <div className="category-icon">
                <FileInput size={18} />
              </div>
  
              <div>
                <h3>React Frontend</h3>
  
                <p>
                  Provides the user interface for entering insurance claim
                  information and viewing prediction results.
                </p>
              </div>
  
            </div>
  
  
            <div className="feature-category">
  
              <div className="category-icon">
                <Server size={18} />
              </div>
  
              <div>
                <h3>Prediction API</h3>
  
                <p>
                  Receives the submitted claim information and connects the
                  frontend with the trained machine learning model.
                </p>
              </div>
  
            </div>
  
  
            <div className="feature-category">
  
              <div className="category-icon">
                <BrainCircuit size={18} />
              </div>
  
              <div>
                <h3>Machine Learning Model</h3>
  
                <p>
                  Uses the trained Random Forest classifier to generate the
                  fraud classification.
                </p>
              </div>
  
            </div>
  
  
            <div className="feature-category">
  
              <div className="category-icon">
                <Database size={18} />
              </div>
  
              <div>
                <h3>Processed Dataset</h3>
  
                <p>
                  Provides the cleaned and transformed feature representation
                  used during model development.
                </p>
              </div>
  
            </div>
  
          </div>
  
        </InfoCard>
  
  
        {/* Prediction Lifecycle */}
        <InfoCard
          icon={<Workflow size={21} />}
          title="Prediction Lifecycle"
          subtitle="From user input to final result"
        >
  
          <div className="dataset-journey">
  
            <div className="journey-item">
  
              <span className="journey-number">
                01
              </span>
  
              <div>
                <strong>Enter Claim</strong>
  
                <p>
                  User provides insurance claim details.
                </p>
              </div>
  
            </div>
  
  
            <div className="journey-line"></div>
  
  
            <div className="journey-item">
  
              <span className="journey-number">
                02
              </span>
  
              <div>
                <strong>Send Request</strong>
  
                <p>
                  React sends the data to the prediction API.
                </p>
              </div>
  
            </div>
  
  
            <div className="journey-line"></div>
  
  
            <div className="journey-item">
  
              <span className="journey-number">
                03
              </span>
  
              <div>
                <strong>Run Model</strong>
  
                <p>
                  Random Forest processes the claim features.
                </p>
              </div>
  
            </div>
  
  
            <div className="journey-line"></div>
  
  
            <div className="journey-item">
  
              <span className="journey-number">
                04
              </span>
  
              <div>
                <strong>View Result</strong>
  
                <p>
                  Fraud or not-fraud prediction is displayed.
                </p>
              </div>
  
            </div>
  
          </div>
  
        </InfoCard>
  
  
        {/* Final Note */}
        <div className="info-note">
  
          <CheckCircle2 size={18} />
  
          <p>
            The system connects the React frontend with the existing
            prediction API and trained Random Forest model to provide an
            end-to-end insurance claim fraud prediction workflow.
          </p>
  
        </div>
  
      </div>
    )
  }
  
  export default HowItWorks