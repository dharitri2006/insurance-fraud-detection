import { useState } from "react"
import {
  FileSearch,
  User,
  MapPin,
  Car,
  DollarSign,
  AlertTriangle,
  Send
} from "lucide-react"

function Prediction() {
  const [formData, setFormData] = useState({
    claim_number: "",
    age_of_driver: "",
    gender: "",
    marital_status: "",
    safety_rating: "",
    annual_income: "",
    high_education: "",
    address_change: "",
    property_status: "",
    zip_code: "",
    claim_date: "",
    claim_day_of_week: "",
    accident_site: "",
    past_num_of_claims: "",
    witness_present: "",
    liab_prct: "",
    channel: "",
    police_report: "",
    age_of_vehicle: "",
    vehicle_category: "",
    vehicle_price: "",
    vehicle_color: "",
    total_claim: "",
    injury_claim: "",
    policy_deductible: "",
    annual_premium: "",
    days_open: "",
    form_defects: ""
  })

  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handlePredict = async (e) => {
    e.preventDefault()

    setLoading(true)
    setResult("")

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,

          claim_number: Number(formData.claim_number),
          age_of_driver: Number(formData.age_of_driver),
          safety_rating: Number(formData.safety_rating),
          annual_income: Number(formData.annual_income),
          high_education: Number(formData.high_education),
          address_change: Number(formData.address_change),
          zip_code: Number(formData.zip_code),
          past_num_of_claims: Number(formData.past_num_of_claims),
          liab_prct: Number(formData.liab_prct),
          police_report: Number(formData.police_report),
          age_of_vehicle: Number(formData.age_of_vehicle),
          vehicle_price: Number(formData.vehicle_price),
          total_claim: Number(formData.total_claim),
          injury_claim: Number(formData.injury_claim),
          policy_deductible: Number(formData.policy_deductible),
          annual_premium: Number(formData.annual_premium),
          days_open: Number(formData.days_open),
          form_defects: Number(formData.form_defects)
        })
      })

      if (!response.ok) {
        throw new Error("Prediction request failed")
      }

      const data = await response.json()

      setResult(data.prediction)
    } catch (error) {
      console.error(error)
      setResult("Error connecting to the prediction server")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="prediction-page">

      {/* Page Header */}
      <div className="page-header">
        <div>
          <p className="eyebrow">CLAIM ANALYSIS</p>

          <h1>New Fraud Prediction</h1>

          <p className="page-description">
            Enter the insurance claim details below to analyze the
            claim using the machine learning model.
          </p>
        </div>
      </div>

      <form onSubmit={handlePredict}>

        {/* =========================
            CLAIM INFORMATION
        ========================= */}

        <div className="form-card">
          <div className="form-section-header">
            <div className="form-section-icon">
              <FileSearch size={20} />
            </div>

            <div>
              <h2>Claim Information</h2>
              <p>Basic information about the insurance claim.</p>
            </div>
          </div>

          <div className="form-grid">

            <div className="form-field">
              <label>Claim Number</label>
              <input
                name="claim_number"
                type="number"
                placeholder="Enter claim number"
                value={formData.claim_number}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label>Claim Date</label>
              <input
                name="claim_date"
                type="date"
                value={formData.claim_date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label>Claim Day</label>
              <select
                name="claim_day_of_week"
                value={formData.claim_day_of_week}
                onChange={handleChange}
                required
              >
                <option value="">Select day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </div>

            <div className="form-field">
              <label>Days Open</label>
              <input
                name="days_open"
                type="number"
                placeholder="Enter days"
                value={formData.days_open}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label>Form Defects</label>
              <input
                name="form_defects"
                type="number"
                placeholder="Enter defects"
                value={formData.form_defects}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label>Claim Channel</label>
              <select
                name="channel"
                value={formData.channel}
                onChange={handleChange}
                required
              >
                <option value="">Select channel</option>
                <option value="Phone">Phone</option>
                <option value="Online">Online</option>
                <option value="Broker">Broker</option>
              </select>
            </div>

          </div>
        </div>

        {/* =========================
            DRIVER INFORMATION
        ========================= */}

        <div className="form-card">
          <div className="form-section-header">
            <div className="form-section-icon">
              <User size={20} />
            </div>

            <div>
              <h2>Driver Information</h2>
              <p>Personal and safety information of the driver.</p>
            </div>
          </div>

          <div className="form-grid">

            <div className="form-field">
              <label>Age of Driver</label>
              <input
                name="age_of_driver"
                type="number"
                placeholder="Enter age"
                value={formData.age_of_driver}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>

            <div className="form-field">
              <label>Marital Status</label>
              <select
                name="marital_status"
                value={formData.marital_status}
                onChange={handleChange}
                required
              >
                <option value="">Select status</option>
                <option value="1">Married</option>
                <option value="0">Single</option>
              </select>
            </div>

            <div className="form-field">
              <label>Safety Rating</label>
              <input
                name="safety_rating"
                type="number"
                placeholder="Enter safety rating"
                value={formData.safety_rating}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label>Annual Income</label>
              <input
                name="annual_income"
                type="number"
                placeholder="Enter annual income"
                value={formData.annual_income}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label>Higher Education</label>
              <select
                name="high_education"
                value={formData.high_education}
                onChange={handleChange}
                required
              >
                <option value="">Select option</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>

          </div>
        </div>

        {/* =========================
            ADDRESS & PROPERTY
        ========================= */}

        <div className="form-card">
          <div className="form-section-header">
            <div className="form-section-icon">
              <MapPin size={20} />
            </div>

            <div>
              <h2>Address & Property</h2>
              <p>Residential and property-related information.</p>
            </div>
          </div>

          <div className="form-grid">

            <div className="form-field">
              <label>Address Changed</label>
              <select
                name="address_change"
                value={formData.address_change}
                onChange={handleChange}
                required
              >
                <option value="">Select option</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>

            <div className="form-field">
              <label>Property Status</label>
              <select
                name="property_status"
                value={formData.property_status}
                onChange={handleChange}
                required
              >
                <option value="">Select status</option>
                <option value="Own">Own</option>
                <option value="Rent">Rent</option>
              </select>
            </div>

            <div className="form-field">
              <label>ZIP Code</label>
              <input
                name="zip_code"
                type="number"
                placeholder="Enter ZIP code"
                value={formData.zip_code}
                onChange={handleChange}
                required
              />
            </div>

          </div>
        </div>

        {/* =========================
            ACCIDENT INFORMATION
        ========================= */}

        <div className="form-card">
          <div className="form-section-header">
            <div className="form-section-icon">
              <AlertTriangle size={20} />
            </div>

            <div>
              <h2>Accident Information</h2>
              <p>Details regarding the accident and claim circumstances.</p>
            </div>
          </div>

          <div className="form-grid">

            <div className="form-field">
              <label>Accident Site</label>
              <select
                name="accident_site"
                value={formData.accident_site}
                onChange={handleChange}
                required
              >
                <option value="">Select site</option>
                <option value="Highway">Highway</option>
                <option value="Local">Local</option>
                <option value="Parking Lot">Parking Lot</option>
              </select>
            </div>

            <div className="form-field">
              <label>Past Number of Claims</label>
              <input
                name="past_num_of_claims"
                type="number"
                placeholder="Enter number of claims"
                value={formData.past_num_of_claims}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label>Witness Present</label>
              <select
                name="witness_present"
                value={formData.witness_present}
                onChange={handleChange}
                required
              >
                <option value="">Select option</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>

            <div className="form-field">
              <label>Liability Percentage</label>
              <input
                name="liab_prct"
                type="number"
                placeholder="Enter percentage"
                value={formData.liab_prct}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label>Police Report</label>
              <select
                name="police_report"
                value={formData.police_report}
                onChange={handleChange}
                required
              >
                <option value="">Select option</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>

          </div>
        </div>

        {/* =========================
            VEHICLE INFORMATION
        ========================= */}

        <div className="form-card">
          <div className="form-section-header">
            <div className="form-section-icon">
              <Car size={20} />
            </div>

            <div>
              <h2>Vehicle Information</h2>
              <p>Details about the vehicle involved in the claim.</p>
            </div>
          </div>

          <div className="form-grid">

            <div className="form-field">
              <label>Age of Vehicle</label>
              <input
                name="age_of_vehicle"
                type="number"
                placeholder="Enter vehicle age"
                value={formData.age_of_vehicle}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label>Vehicle Category</label>
              <select
                name="vehicle_category"
                value={formData.vehicle_category}
                onChange={handleChange}
                required
              >
                <option value="">Select category</option>
                <option value="Large">Large</option>
                <option value="Medium">Medium</option>
                <option value="Compact">Compact</option>
              </select>
            </div>

            <div className="form-field">
              <label>Vehicle Price</label>
              <input
                name="vehicle_price"
                type="number"
                placeholder="Enter vehicle price"
                value={formData.vehicle_price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label>Vehicle Color</label>
              <select
                name="vehicle_color"
                value={formData.vehicle_color}
                onChange={handleChange}
                required
              >
                <option value="">Select color</option>
                <option value="silver">Silver</option>
                <option value="black">Black</option>
                <option value="gray">Gray</option>
                <option value="red">Red</option>
                <option value="white">White</option>
                <option value="blue">Blue</option>
                <option value="other">Other</option>
              </select>
            </div>

          </div>
        </div>

        {/* =========================
            CLAIM AMOUNT
        ========================= */}

        <div className="form-card">
          <div className="form-section-header">
            <div className="form-section-icon">
              <DollarSign size={20} />
            </div>

            <div>
              <h2>Claim & Financial Information</h2>
              <p>Financial details associated with the insurance claim.</p>
            </div>
          </div>

          <div className="form-grid">

            <div className="form-field">
              <label>Total Claim</label>
              <input
                name="total_claim"
                type="number"
                placeholder="Enter total claim"
                value={formData.total_claim}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label>Injury Claim</label>
              <input
                name="injury_claim"
                type="number"
                placeholder="Enter injury claim"
                value={formData.injury_claim}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label>Policy Deductible</label>
              <input
                name="policy_deductible"
                type="number"
                placeholder="Enter deductible"
                value={formData.policy_deductible}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label>Annual Premium</label>
              <input
                name="annual_premium"
                type="number"
                placeholder="Enter annual premium"
                value={formData.annual_premium}
                onChange={handleChange}
                required
              />
            </div>

          </div>
        </div>

        {/* =========================
            PREDICT BUTTON
        ========================= */}

        <div className="prediction-action">
          <div>
            <h3>Ready to analyze this claim?</h3>

            <p>
              Review the information above and generate the fraud
              prediction using the trained model.
            </p>
          </div>

          <button
            type="submit"
            className="predict-button"
            disabled={loading}
          >
            <Send size={18} />

            {loading ? "Analyzing..." : "Predict Fraud Risk"}
          </button>
        </div>

      </form>

      {/* =========================
          RESULT
      ========================= */}

      {result && (
        <div className="result-card">

          <div className="result-icon">
            <AlertTriangle size={25} />
          </div>

          <div>
            <span className="result-label">
              PREDICTION RESULT
            </span>

            <h2>{result}</h2>

            <p>
              The machine learning model has completed the analysis
              of the submitted claim.
            </p>
          </div>

        </div>
      )}

    </div>
  )
}

export default Prediction