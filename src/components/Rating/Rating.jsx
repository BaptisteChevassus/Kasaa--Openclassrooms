import './Rating.scss'

function Rating({ value }) {
  return (
    <div className="rating" aria-label={`${value} étoiles sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`rating__star${i < value ? ' rating__star--filled' : ''}`}>
          ★
        </span>
      ))}
    </div>
  )
}

export default Rating
