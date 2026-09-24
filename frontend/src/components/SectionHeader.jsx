function SectionHeader({ eyebrow, title, description }) {
    return (
      <div className="info-page-header">
  
        <div>
          {eyebrow && (
            <p className="eyebrow">
              {eyebrow}
            </p>
          )}
  
          <h1>{title}</h1>
  
          {description && (
            <p className="info-page-description">
              {description}
            </p>
          )}
        </div>
  
      </div>
    )
  }
  
  export default SectionHeader