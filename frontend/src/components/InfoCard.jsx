import { ReactNode } from "react"

function InfoCard({ icon, title, subtitle, children }) {
  return (
    <section className="info-card">

      <div className="info-card-heading">

        <div className="info-icon">
          {icon}
        </div>

        <div>
          <h2>{title}</h2>

          {subtitle && (
            <p>{subtitle}</p>
          )}
        </div>

      </div>

      {children}

    </section>
  )
}

export default InfoCard