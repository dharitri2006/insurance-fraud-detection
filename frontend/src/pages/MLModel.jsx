import {
    BrainCircuit,
    GitBranch,
    Settings2,
    Database,
    Split,
    TreePine,
    FileDown
  } from "lucide-react"
  
  import InfoCard from "../components/InfoCard"
  import SectionHeader from "../components/SectionHeader"
  import StatCard from "../components/StatCard"
  
  function MLModel() {
    return (
      <div className="info-page">
  
        {/* Page Header */}
        <SectionHeader
          eyebrow="MACHINE LEARNING MODEL"
          title="Random Forest Classifier"
          description="The classification model used to identify patterns associated with fraudulent insurance claims."
        />
  
  
        {/* Model Statistics */}
        <section className="overview-stats">
  
          <StatCard
            icon={<TreePine size={21} />}
            value="100"
            label="Decision Trees"
          />
  
          <StatCard
            icon={<Split size={21} />}
            value="80 / 20"
            label="Train / Test Split"
          />
  
          <StatCard
            icon={<Settings2 size={21} />}
            value="Balanced"
            label="Class Weight"
          />
  
          <StatCard
            icon={<GitBranch size={21} />}
            value="42"
            label="Random State"
          />
  
        </section>
  
  
        {/* Why Random Forest */}
        <InfoCard
          icon={<BrainCircuit size={21} />}
          title="Why Random Forest?"
          subtitle="The selected classification algorithm"
        >
  
          <p className="info-text">
            Random Forest was selected as the main classification algorithm
            for the insurance fraud detection project. It combines multiple
            decision trees to produce a final classification.
          </p>
  
          <p className="info-text">
            Using multiple trees allows the model to consider different
            patterns in the processed insurance claim data instead of relying
            on a single decision tree.
          </p>
  
        </InfoCard>
  
  
        {/* How the Model Works */}
        <InfoCard
          icon={<TreePine size={21} />}
          title="How the Model Works"
          subtitle="From multiple decision trees to a final prediction"
        >
  
          <div className="model-process">
  
            <div className="model-process-item">
  
              <div className="model-process-icon">
                <Database size={20} />
              </div>
  
              <div>
                <strong>Processed Features</strong>
  
                <p>
                  The cleaned and transformed insurance claim features are
                  provided as input to the model.
                </p>
              </div>
  
            </div>
  
  
            <div className="model-process-item">
  
              <div className="model-process-icon">
                <TreePine size={20} />
              </div>
  
              <div>
                <strong>Multiple Decision Trees</strong>
  
                <p>
                  The Random Forest contains 100 decision trees that learn
                  different patterns from the training data.
                </p>
              </div>
  
            </div>
  
  
            <div className="model-process-item">
  
              <div className="model-process-icon">
                <GitBranch size={20} />
              </div>
  
              <div>
                <strong>Combined Decision</strong>
  
                <p>
                  The individual tree predictions are combined to produce
                  the final classification.
                </p>
              </div>
  
            </div>
  
          </div>
  
        </InfoCard>
  
  
        {/* Model Configuration */}
        <InfoCard
          icon={<Settings2 size={21} />}
          title="Model Configuration"
          subtitle="Parameters used during model training"
        >
  
          <div className="model-config-grid">
  
            <div className="model-config-item">
              <span>Algorithm</span>
              <strong>Random Forest Classifier</strong>
            </div>
  
            <div className="model-config-item">
              <span>Number of Estimators</span>
              <strong>100</strong>
            </div>
  
            <div className="model-config-item">
              <span>Class Weight</span>
              <strong>Balanced</strong>
            </div>
  
            <div className="model-config-item">
              <span>Random State</span>
              <strong>42</strong>
            </div>
  
            <div className="model-config-item">
              <span>Training Data</span>
              <strong>80%</strong>
            </div>
  
            <div className="model-config-item">
              <span>Testing Data</span>
              <strong>20%</strong>
            </div>
  
          </div>
  
        </InfoCard>
  
  
        {/* Dataset to Model Pipeline */}
        <InfoCard
          icon={<GitBranch size={21} />}
          title="Dataset to Model Pipeline"
          subtitle="How prepared data reaches the classifier"
        >
  
          <div className="model-pipeline">
  
            <div className="model-pipeline-step">
  
              <span className="pipeline-number">
                01
              </span>
  
              <Database size={20} />
  
              <div>
                <strong>Processed Dataset</strong>
                <p>11,859 records × 44 columns</p>
              </div>
  
            </div>
  
  
            <div className="model-pipeline-arrow">
              →
            </div>
  
  
            <div className="model-pipeline-step">
  
              <span className="pipeline-number">
                02
              </span>
  
              <Split size={20} />
  
              <div>
                <strong>Train / Test Split</strong>
                <p>80% training · 20% testing</p>
              </div>
  
            </div>
  
  
            <div className="model-pipeline-arrow">
              →
            </div>
  
  
            <div className="model-pipeline-step">
  
              <span className="pipeline-number">
                03
              </span>
  
              <BrainCircuit size={20} />
  
              <div>
                <strong>Random Forest</strong>
                <p>100 decision trees</p>
              </div>
  
            </div>
  
  
            <div className="model-pipeline-arrow">
              →
            </div>
  
  
            <div className="model-pipeline-step">
  
              <span className="pipeline-number">
                04
              </span>
  
              <GitBranch size={20} />
  
              <div>
                <strong>Prediction</strong>
                <p>Fraud classification</p>
              </div>
  
            </div>
  
          </div>
  
        </InfoCard>
  
  
        {/* Saved Model */}
        <div className="info-note">
  
          <FileDown size={18} />
  
          <p>
            The trained Random Forest model was saved as
            <strong> random_forest_model.pkl</strong> for use by the
            prediction system.
          </p>
  
        </div>
  
      </div>
    )
  }
  
  export default MLModel