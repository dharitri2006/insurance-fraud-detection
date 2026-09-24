import {
    BarChart3,
    Target,
    Crosshair,
    RotateCcw,
    Activity,
    GitCompare,
    ShieldCheck
  } from "lucide-react"
  
  import InfoCard from "../components/InfoCard"
  import SectionHeader from "../components/SectionHeader"
  import StatCard from "../components/StatCard"
  
  function ModelEvaluation() {
    return (
      <div className="info-page">
  
        {/* Page Header */}
        <SectionHeader
          eyebrow="MODEL EVALUATION"
          title="Model Performance"
          description="Evaluation results of the Random Forest classifier on the insurance fraud detection dataset."
        />
  
  
        {/* Performance Statistics */}
        <section className="overview-stats">
  
          <StatCard
            icon={<Target size={21} />}
            value="77.91%"
            label="Accuracy"
          />
  
          <StatCard
            icon={<Crosshair size={21} />}
            value="92.65%"
            label="Precision"
          />
  
          <StatCard
            icon={<Activity size={21} />}
            value="10.82%"
            label="Recall"
          />
  
          <StatCard
            icon={<BarChart3 size={21} />}
            value="19.38%"
            label="F1 Score"
          />
  
        </section>
  
  
        {/* Evaluation Overview */}
        <InfoCard
          icon={<BarChart3 size={21} />}
          title="Evaluation Overview"
          subtitle="Performance of the trained Random Forest classifier"
        >
  
          <p className="info-text">
            The Random Forest classifier was evaluated using the test portion
            of the dataset. Multiple classification metrics were considered
            to understand how well the model identifies fraudulent and
            non-fraudulent claims.
          </p>
  
          <p className="info-text">
            The model achieved an accuracy of 77.91% and a precision of
            92.65%. Its recall was 10.82%, while the F1-score was 19.38%.
            These metrics provide a more detailed view of model behaviour
            than accuracy alone.
          </p>
  
        </InfoCard>
  
  
        {/* Metric Explanation */}
        <InfoCard
          icon={<Target size={21} />}
          title="Evaluation Metrics"
          subtitle="What each performance metric represents"
        >
  
          <div className="metric-grid">
  
            <div className="metric-item">
  
              <div className="metric-icon">
                <Target size={19} />
              </div>
  
              <div>
                <strong>Accuracy</strong>
  
                <p>
                  Measures the proportion of total predictions that were
                  classified correctly.
                </p>
  
                <span>77.91%</span>
              </div>
  
            </div>
  
  
            <div className="metric-item">
  
              <div className="metric-icon">
                <Crosshair size={19} />
              </div>
  
              <div>
                <strong>Precision</strong>
  
                <p>
                  Measures how many of the claims predicted as fraudulent
                  were actually fraudulent.
                </p>
  
                <span>92.65%</span>
              </div>
  
            </div>
  
  
            <div className="metric-item">
  
              <div className="metric-icon">
                <Activity size={19} />
              </div>
  
              <div>
                <strong>Recall</strong>
  
                <p>
                  Measures how many of the actual fraudulent claims were
                  correctly identified by the model.
                </p>
  
                <span>10.82%</span>
              </div>
  
            </div>
  
  
            <div className="metric-item">
  
              <div className="metric-icon">
                <BarChart3 size={19} />
              </div>
  
              <div>
                <strong>F1 Score</strong>
  
                <p>
                  Combines precision and recall into a single metric and
                  provides a balance between the two.
                </p>
  
                <span>19.38%</span>
              </div>
  
            </div>
  
          </div>
  
        </InfoCard>
  
  
        {/* Performance Interpretation */}
        <InfoCard
          icon={<ShieldCheck size={21} />}
          title="Performance Interpretation"
          subtitle="Understanding the model's precision and recall"
        >
  
          <div className="evaluation-highlight">
  
            <div className="evaluation-highlight-item">
  
              <strong>High Precision</strong>
  
              <p>
                The precision of 92.65% indicates that when the model
                predicts a claim as fraudulent, a high proportion of those
                predictions are correct.
              </p>
  
            </div>
  
  
            <div className="evaluation-highlight-item">
  
              <strong>Low Recall</strong>
  
              <p>
                The recall of 10.82% indicates that the model identifies
                only a relatively small proportion of the fraudulent claims
                present in the test data.
              </p>
  
            </div>
  
          </div>
  
          <p className="info-text">
            This difference between precision and recall is important when
            interpreting the model. Accuracy by itself does not fully
            describe fraud-detection performance, so the other evaluation
            metrics should also be considered.
          </p>
  
        </InfoCard>
  
  
        {/* Additional Evaluation */}
        <InfoCard
          icon={<GitCompare size={21} />}
          title="Additional Evaluation"
          subtitle="Other checks performed during model development"
        >
  
          <div className="evaluation-check-list">
  
            <div className="evaluation-check">
  
              <div className="evaluation-check-icon">
                <Target size={18} />
              </div>
  
              <div>
                <strong>Stratified Train-Test Split</strong>
  
                <p>
                  The dataset was divided into 80% training and 20% testing
                  data using stratification for the target classes.
                </p>
              </div>
  
            </div>
  
  
            <div className="evaluation-check">
  
              <div className="evaluation-check-icon">
                <RotateCcw size={18} />
              </div>
  
              <div>
                <strong>5-Fold Cross-Validation</strong>
  
                <p>
                  Five-fold cross-validation was performed to examine model
                  performance across different portions of the dataset.
                </p>
              </div>
  
            </div>
  
  
            <div className="evaluation-check">
  
              <div className="evaluation-check-icon">
                <GitCompare size={18} />
              </div>
  
              <div>
                <strong>Model Comparison</strong>
  
                <p>
                  Logistic Regression and Decision Tree models were also
                  considered during the model development process.
                </p>
              </div>
  
            </div>
  
  
            <div className="evaluation-check">
  
              <div className="evaluation-check-icon">
                <ShieldCheck size={18} />
              </div>
  
              <div>
                <strong>Overfitting Check</strong>
  
                <p>
                  Training and testing performance were examined to check
                  for differences that could indicate overfitting.
                </p>
              </div>
  
            </div>
  
          </div>
  
        </InfoCard>
  
  
        {/* Evaluation Note */}
        <div className="info-note">
  
          <BarChart3 size={18} />
  
          <p>
            Accuracy should not be considered in isolation. Precision,
            recall and F1-score provide additional information about how
            the classifier behaves when identifying fraudulent claims.
          </p>
  
        </div>
  
      </div>
    )
  }
  
  export default ModelEvaluation