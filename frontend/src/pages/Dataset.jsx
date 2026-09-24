import {
    Database,
    FileText,
    Target,
    Layers3,
    Users,
    Car,
    MapPin,
    DollarSign,
    AlertTriangle
  } from "lucide-react"
  
  import InfoCard from "../components/InfoCard"
  import SectionHeader from "../components/SectionHeader"
  import StatCard from "../components/StatCard"
  
  function Dataset() {
    return (
      <div className="info-page">
  
        {/* Page Header */}
        <SectionHeader
          eyebrow="DATASET"
          title="Insurance Claims Dataset"
          description="An overview of the dataset used to develop and evaluate the insurance fraud detection model."
        />
  
  
        {/* Dataset Statistics */}
        <section className="overview-stats">
  
          <StatCard
            icon={<Database size={21} />}
            value="12,002"
            label="Original Records"
          />
  
          <StatCard
            icon={<Layers3 size={21} />}
            value="29"
            label="Original Columns"
          />
  
          <StatCard
            icon={<Target size={21} />}
            value="1"
            label="Target Variable"
          />
  
          <StatCard
            icon={<FileText size={21} />}
            value="11,859"
            label="Records After Cleaning"
          />
  
        </section>
  
  
        {/* Dataset Description */}
        <InfoCard
          icon={<FileText size={21} />}
          title="About the Dataset"
          subtitle="Understanding the data used in the project"
        >
  
          <p className="info-text">
            The dataset contains historical insurance claim information that
            can be used to study patterns associated with fraudulent claims.
            Each record represents an insurance claim and contains information
            from multiple aspects of the claim.
          </p>
  
          <p className="info-text">
            The original dataset contains 12,002 records and 29 columns. The
            target variable used for classification is
            <strong> fraud reported</strong>, which represents whether a claim
            was reported as fraudulent.
          </p>
  
        </InfoCard>
  
  
        {/* Target Variable */}
        <InfoCard
          icon={<Target size={21} />}
          title="Target Variable"
          subtitle="The value the machine learning model predicts"
        >
  
          <div className="target-variable">
  
            <div className="target-main">
  
              <span className="target-code">
                fraud reported
              </span>
  
              <h3>Fraud Reported</h3>
  
              <p>
                This is the classification target used by the machine learning
                model to determine whether an insurance claim is fraudulent.
              </p>
  
            </div>
  
  
            <div className="target-values">
  
              <div className="target-value">
  
                <span className="target-number">
                  0
                </span>
  
                <div>
                  <strong>Not Fraud</strong>
  
                  <p>
                    Claim not reported as fraudulent
                  </p>
                </div>
  
              </div>
  
  
              <div className="target-value">
  
                <span className="target-number">
                  1
                </span>
  
                <div>
                  <strong>Fraud</strong>
  
                  <p>
                    Claim reported as fraudulent
                  </p>
                </div>
  
              </div>
  
            </div>
  
          </div>
  
        </InfoCard>
  
  
        {/* Feature Categories */}
        <InfoCard
          icon={<Layers3 size={21} />}
          title="Feature Categories"
          subtitle="Different types of information contained in the dataset"
        >
  
          <div className="feature-category-grid">
  
            <div className="feature-category">
  
              <div className="category-icon">
                <Users size={18} />
              </div>
  
              <div>
                <h3>Driver Details</h3>
  
                <p>
                  Information such as driver age, gender, marital status,
                  safety rating, income and education.
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
                  Claim number, claim date, claim day, number of previous
                  claims and other claim-related information.
                </p>
              </div>
  
            </div>
  
  
            <div className="feature-category">
  
              <div className="category-icon">
                <AlertTriangle size={18} />
              </div>
  
              <div>
                <h3>Accident Details</h3>
  
                <p>
                  Accident site, witnesses, liability percentage and
                  police report information.
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
                  Vehicle age, category, price and color associated with
                  the insurance claim.
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
                  Total claim, injury claim, policy deductible and annual
                  premium information.
                </p>
              </div>
  
            </div>
  
  
            <div className="feature-category">
  
              <div className="category-icon">
                <MapPin size={18} />
              </div>
  
              <div>
                <h3>Address & Property</h3>
  
                <p>
                  ZIP code, property status and whether the claimant's
                  address was changed.
                </p>
              </div>
  
            </div>
  
          </div>
  
        </InfoCard>
  
  
        {/* Dataset Journey */}
        <InfoCard
          icon={<Database size={21} />}
          title="Dataset Journey"
          subtitle="How the dataset changed during preprocessing"
        >
  
          <div className="dataset-journey">
  
            <div className="journey-item">
  
              <span className="journey-number">
                01
              </span>
  
              <div>
                <strong>Original Dataset</strong>
  
                <p>
                  12,002 records × 29 columns
                </p>
              </div>
  
            </div>
  
  
            <div className="journey-line"></div>
  
  
            <div className="journey-item">
  
              <span className="journey-number">
                02
              </span>
  
              <div>
                <strong>Data Cleaning</strong>
  
                <p>
                  Missing and invalid data were handled and the dataset
                  was transformed for model development.
                </p>
              </div>
  
            </div>
  
  
            <div className="journey-line"></div>
  
  
            <div className="journey-item">
  
              <span className="journey-number">
                03
              </span>
  
              <div>
                <strong>Processed Dataset</strong>
  
                <p>
                  11,859 records × 44 columns after preprocessing.
                </p>
              </div>
  
            </div>
  
          </div>
  
        </InfoCard>
  
  
        {/* Note */}
        <div className="info-note">
  
          <AlertTriangle size={18} />
  
          <p>
            The processed dataset contains transformed features prepared for
            machine learning. The increase from 29 to 44 columns is associated
            with the preprocessing and encoding of the original data.
          </p>
  
        </div>
  
      </div>
    )
  }
  
  export default Dataset