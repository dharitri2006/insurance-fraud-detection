import {
    Database,
    Search,
    AlertTriangle,
    Type,
    Layers3,
    BarChart3,
    ArrowRight
  } from "lucide-react"
  
  import InfoCard from "../components/InfoCard"
  import SectionHeader from "../components/SectionHeader"
  import StatCard from "../components/StatCard"
  import ProcessStep from "../components/ProcessStep"
  
  function DataProcessing() {
    return (
      <div className="info-page">
  
        {/* Page Header */}
        <SectionHeader
          eyebrow="DATA PROCESSING"
          title="Data Cleaning & Preprocessing"
          description="The steps used to transform the original insurance claims dataset into a clean numerical dataset suitable for machine learning."
        />
  
  
        {/* Processing Statistics */}
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
            icon={<AlertTriangle size={21} />}
            value="0"
            label="Missing Values"
          />
  
          <StatCard
            icon={<BarChart3 size={21} />}
            value="44"
            label="Processed Columns"
          />
  
        </section>
  
  
        {/* Processing Overview */}
        <InfoCard
          icon={<Database size={21} />}
          title="Processing Overview"
          subtitle="Preparing the insurance claims data for model development"
        >
  
          <p className="info-text">
            The original insurance claims dataset contained 12,002 records
            and 29 columns. Before applying machine learning, the data was
            inspected, cleaned and transformed into a numerical representation.
          </p>
  
          <p className="info-text">
            After preprocessing, the dataset contained 11,859 records and
            44 columns, with no missing values and no remaining non-numeric
            columns.
          </p>
  
        </InfoCard>
  
  
        {/* Processing Steps */}
        <InfoCard
          icon={<Layers3 size={21} />}
          title="Preprocessing Steps"
          subtitle="The main stages applied to the original dataset"
        >
  
          <div className="system-flow">
  
            <ProcessStep
              number="01"
              icon={<Search size={20} />}
              label="INSPECTION"
              title="Data Inspection"
              description="The dataset was examined to understand its structure, columns, data types and the information available for model development."
            />
  
            <ProcessStep
              number="02"
              icon={<AlertTriangle size={20} />}
              label="CLEANING"
              title="Missing & Invalid Data Handling"
              description="Missing and invalid data were handled during preprocessing. Invalid claim_date values were identified and removed."
            />
  
            <ProcessStep
              number="03"
              icon={<Type size={20} />}
              label="TRANSFORMATION"
              title="Data Type Correction"
              description="Columns were converted and corrected into appropriate data types so they could be used consistently during model development."
            />
  
            <ProcessStep
              number="04"
              icon={<Layers3 size={20} />}
              label="ENCODING"
              title="Categorical Encoding"
              description="Categorical variables were transformed into numerical representations required by the machine learning model."
            />
  
            <ProcessStep
              number="05"
              icon={<BarChart3 size={20} />}
              label="OUTLIERS"
              title="Outlier Handling"
              description="Outliers were examined and handled as part of the preprocessing process to prepare the dataset for model training."
            />
  
          </div>
  
        </InfoCard>
  
  
        {/* Transformation Flow */}
        <InfoCard
          icon={<ArrowRight size={21} />}
          title="Transformation Flow"
          subtitle="The journey from the original dataset to the processed dataset"
        >
  
          <div className="transformation-flow">
  
            <div className="transformation-box">
  
              <span className="transformation-label">
                STAGE 01
              </span>
  
              <strong>Raw Dataset</strong>
  
              <p>
                12,002 records × 29 columns
              </p>
  
            </div>
  
  
            <div className="transformation-arrow">
              <ArrowRight size={18} />
            </div>
  
  
            <div className="transformation-box">
  
              <span className="transformation-label">
                STAGE 02
              </span>
  
              <strong>Data Cleaning</strong>
  
              <p>
                Missing, invalid and inconsistent data handled.
              </p>
  
            </div>
  
  
            <div className="transformation-arrow">
              <ArrowRight size={18} />
            </div>
  
  
            <div className="transformation-box">
  
              <span className="transformation-label">
                STAGE 03
              </span>
  
              <strong>Feature Preparation</strong>
  
              <p>
                Data types corrected and categorical features encoded.
              </p>
  
            </div>
  
  
            <div className="transformation-arrow">
              <ArrowRight size={18} />
            </div>
  
  
            <div className="transformation-box">
  
              <span className="transformation-label">
                STAGE 04
              </span>
  
              <strong>Processed Dataset</strong>
  
              <p>
                11,859 records × 44 columns
              </p>
  
            </div>
  
          </div>
  
        </InfoCard>
  
  
        {/* Final Dataset State */}
        <InfoCard
          icon={<Database size={21} />}
          title="Final Dataset State"
          subtitle="Result after preprocessing"
        >
  
          <div className="processing-result-grid">
  
            <div className="processing-result-item">
              <span>Records</span>
              <strong>11,859</strong>
            </div>
  
            <div className="processing-result-item">
              <span>Columns</span>
              <strong>44</strong>
            </div>
  
            <div className="processing-result-item">
              <span>Missing Values</span>
              <strong>0</strong>
            </div>
  
            <div className="processing-result-item">
              <span>Non-Numeric Columns</span>
              <strong>0</strong>
            </div>
  
          </div>
  
        </InfoCard>
  
  
        {/* Processing Note */}
        <div className="info-note">
  
          <Database size={18} />
  
          <p>
            The final processed dataset provides a clean numerical
            representation of the insurance claim information and was used
            as the input data for machine learning model development.
          </p>
  
        </div>
  
      </div>
    )
  }
  
  export default DataProcessing


// import {
//     Database,
//     Search,
//     Wrench,
//     Binary,
//     AlertTriangle,
//     CheckCircle2,
//     ArrowDown
//   } from "lucide-react"
  
//   import InfoCard from "../components/InfoCard"
//   import SectionHeader from "../components/SectionHeader"
//   import StatCard from "../components/StatCard"
  
//   function DataProcessing() {
//     return (
//       <div className="info-page">
  
//         {/* Page Header */}
//         <SectionHeader
//           eyebrow="DATA PROCESSING"
//           title="Data Cleaning & Preprocessing"
//           description="The steps used to transform the original insurance claims data into a clean dataset suitable for machine learning."
//         />
  
  
//         {/* Processing Statistics */}
//         <section className="overview-stats">
  
//           <StatCard
//             icon={<Database size={21} />}
//             value="12,002"
//             label="Original Records"
//           />
  
//           <StatCard
//             icon={<Database size={21} />}
//             value="29"
//             label="Original Columns"
//           />
  
//           <StatCard
//             icon={<CheckCircle2 size={21} />}
//             value="0"
//             label="Missing Values"
//           />
  
//           <StatCard
//             icon={<Binary size={21} />}
//             value="44"
//             label="Processed Columns"
//           />
  
//         </section>
  
  
//         {/* Processing Overview */}
//         <InfoCard
//           icon={<Search size={21} />}
//           title="Processing Overview"
//           subtitle="Preparing raw claim data for machine learning"
//         >
  
//           <p className="info-text">
//             Before training the machine learning model, the original insurance
//             claims dataset was inspected and prepared to make it suitable for
//             model development.
//           </p>
  
//           <p className="info-text">
//             The preprocessing stage included data inspection, handling missing
//             and invalid data, correcting data types, encoding categorical
//             variables and handling outliers.
//           </p>
  
//         </InfoCard>
  
  
//         {/* Preprocessing Steps */}
//         <InfoCard
//           icon={<Wrench size={21} />}
//           title="Preprocessing Steps"
//           subtitle="Major data preparation operations performed on the dataset"
//         >
  
//           <div className="processing-list">
  
//             {/* Step 1 */}
//             <div className="processing-step">
  
//               <div className="processing-step-number">
//                 01
//               </div>
  
//               <div className="processing-step-icon">
//                 <Search size={20} />
//               </div>
  
//               <div className="processing-step-content">
  
//                 <h3>Data Inspection</h3>
  
//                 <p>
//                   The dataset was examined to understand its structure,
//                   columns, data types and overall data quality before
//                   preprocessing.
//                 </p>
  
//               </div>
  
//             </div>
  
  
//             {/* Step 2 */}
//             <div className="processing-step">
  
//               <div className="processing-step-number">
//                 02
//               </div>
  
//               <div className="processing-step-icon">
//                 <AlertTriangle size={20} />
//               </div>
  
//               <div className="processing-step-content">
  
//                 <h3>Missing & Invalid Data Handling</h3>
  
//                 <p>
//                   Missing values were handled during data cleaning.
//                   Invalid claim date values were also identified and removed
//                   so that unreliable records would not be used for modelling.
//                 </p>
  
//               </div>
  
//             </div>
  
  
//             {/* Step 3 */}
//             <div className="processing-step">
  
//               <div className="processing-step-number">
//                 03
//               </div>
  
//               <div className="processing-step-icon">
//                 <Wrench size={20} />
//               </div>
  
//               <div className="processing-step-content">
  
//                 <h3>Data Type Correction</h3>
  
//                 <p>
//                   Data types were corrected where necessary so that the
//                   features could be processed consistently during the
//                   machine learning workflow.
//                 </p>
  
//               </div>
  
//             </div>
  
  
//             {/* Step 4 */}
//             <div className="processing-step">
  
//               <div className="processing-step-number">
//                 04
//               </div>
  
//               <div className="processing-step-icon">
//                 <Binary size={20} />
//               </div>
  
//               <div className="processing-step-content">
  
//                 <h3>Categorical Encoding</h3>
  
//                 <p>
//                   Categorical variables were transformed into numerical
//                   representations so that they could be used by the
//                   machine learning algorithms.
//                 </p>
  
//               </div>
  
//             </div>
  
  
//             {/* Step 5 */}
//             <div className="processing-step">
  
//               <div className="processing-step-number">
//                 05
//               </div>
  
//               <div className="processing-step-icon">
//                 <AlertTriangle size={20} />
//               </div>
  
//               <div className="processing-step-content">
  
//                 <h3>Outlier Handling</h3>
  
//                 <p>
//                   Numerical data was examined for outliers and appropriate
//                   handling was performed as part of the preprocessing stage.
//                 </p>
  
//               </div>
  
//             </div>
  
//           </div>
  
//         </InfoCard>
  
  
//         {/* Transformation Flow */}
//         <InfoCard
//           icon={<ArrowDown size={21} />}
//           title="Data Transformation Flow"
//           subtitle="From raw records to model-ready data"
//         >
  
//           <div className="transformation-flow">
  
//             <div className="transformation-box">
  
//               <span className="transformation-label">
//                 INPUT
//               </span>
  
//               <strong>Raw Dataset</strong>
  
//               <p>
//                 12,002 records
//                 <br />
//                 29 columns
//               </p>
  
//             </div>
  
  
//             <div className="transformation-arrow">
//               <ArrowDown size={22} />
//             </div>
  
  
//             <div className="transformation-box">
  
//               <span className="transformation-label">
//                 CLEANING
//               </span>
  
//               <strong>Data Cleaning</strong>
  
//               <p>
//                 Invalid data handled
//                 <br />
//                 Missing values addressed
//               </p>
  
//             </div>
  
  
//             <div className="transformation-arrow">
//               <ArrowDown size={22} />
//             </div>
  
  
//             <div className="transformation-box">
  
//               <span className="transformation-label">
//                 TRANSFORMATION
//               </span>
  
//               <strong>Feature Preparation</strong>
  
//               <p>
//                 Data types corrected
//                 <br />
//                 Categorical data encoded
//               </p>
  
//             </div>
  
  
//             <div className="transformation-arrow">
//               <ArrowDown size={22} />
//             </div>
  
  
//             <div className="transformation-box">
  
//               <span className="transformation-label">
//                 OUTPUT
//               </span>
  
//               <strong>Processed Dataset</strong>
  
//               <p>
//                 11,859 records
//                 <br />
//                 44 columns
//               </p>
  
//             </div>
  
//           </div>
  
//         </InfoCard>
  
  
//         {/* Final Dataset State */}
//         <InfoCard
//           icon={<CheckCircle2 size={21} />}
//           title="Final Dataset State"
//           subtitle="The result after preprocessing"
//         >
  
//           <div className="processing-result-grid">
  
//             <div className="processing-result-item">
//               <span>Rows</span>
//               <strong>11,859</strong>
//             </div>
  
  
//             <div className="processing-result-item">
//               <span>Columns</span>
//               <strong>44</strong>
//             </div>
  
  
//             <div className="processing-result-item">
//               <span>Missing Values</span>
//               <strong>0</strong>
//             </div>
  
  
//             <div className="processing-result-item">
//               <span>Non-Numeric Columns</span>
//               <strong>0</strong>
//             </div>
  
//           </div>
  
//         </InfoCard>
  
  
//         {/* Note */}
//         <div className="info-note">
  
//           <CheckCircle2 size={18} />
  
//           <p>
//             After preprocessing, the dataset was converted into a clean,
//             numerical representation suitable for machine learning model
//             training and evaluation.
//           </p>
  
//         </div>
  
//       </div>
//     )
//   }
  
//   export default DataProcessing