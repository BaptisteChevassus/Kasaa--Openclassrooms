import './Banner.scss'

function Banner({ image, title, overlayOpacity = 0.6 }) {
  return (
    <div className="banner" style={{ '--banner-overlay-opacity': overlayOpacity }}>
      <img src={image} alt="" />
      {title && <h1>{title}</h1>}
    </div>
  )
}

export default Banner