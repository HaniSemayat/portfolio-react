import './SectionDivider.css'

function SectionDivider() {
  return (
    <div
      className="section-divider"
      aria-hidden="true"
    >
      <span className="section-divider-line"></span>

      <span className="section-divider-diamond">
        <span></span>
      </span>

      <span className="section-divider-line"></span>
    </div>
  )
}

export default SectionDivider