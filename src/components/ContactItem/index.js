import './index.css'

const ContactItem = props => {
  const {contactDetails, starClicked} = props
  const {name, mobileNo, isFavorite, id} = contactDetails

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'

  const onClickedStar = () => {
    starClicked(id)
  }

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{name}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell mobile-no-column">
        <p className="mobile-no-value">{mobileNo}</p>
        <button
          type="button"
          className="favorite-icon-container"
          onClick={onClickedStar}
        >
          <img src={starImgUrl} className="favorite-icon" alt="star" />
        </button>
      </div>
    </li>
  )
}

export default ContactItem
