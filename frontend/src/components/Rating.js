function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <div className="rating">
      <span>
        <i
          className={
            rating >= 1
              ? 'fas fa-star'
              : rating >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>

      <span>
        <i
          className={
            rating >= 4.9
              ? 'fas fa-star'
              : rating >= 3.7
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>

      <span>
        <i
          className={
            rating >= 6.4
              ? 'fas fa-star'
              : rating >= 5.0
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>

      <span>
        <i
          className={
            rating >= 7.9
              ? 'fas fa-star'
              : rating >= 6.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>

      <span>
        <i
          className={
            rating >= 10
              ? 'fas fa-star'
              : rating >= 8.0
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>{numReviews} reviews</span>
    </div>
  );
}

export default Rating;
