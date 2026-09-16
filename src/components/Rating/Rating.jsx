import './Rating.scss'

const MAX_RATING = 5

function Rating({ rating }) {
  // Dans le JSON, la note est une chaine ("4") et non un nombre.
  const value = Number(rating)
  const stars = Array.from({ length: MAX_RATING }, (_, index) => index < value)

  return (
    <div className="rating" role="img" aria-label={`Note : ${value} sur ${MAX_RATING}`}>
      {stars.map((isActive, index) => (
        <svg
          key={index}
          className={`rating__star${isActive ? ' rating__star--active' : ''}`}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 1.5l3.1 6.9 7.4.7-5.6 5 1.6 7.4L12 17.7l-6.5 3.8 1.6-7.4-5.6-5 7.4-.7z" />
        </svg>
      ))}
    </div>
  )
}

export default Rating
