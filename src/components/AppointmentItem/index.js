import './index.css'

const AppointmentItem = props => {
  const {appmtDetails, onFavourite, onStarred} = props
  const {id, title, date, isFavourite, isStarred} = appmtDetails

  const onClickFvtBtn = () => {
    onFavourite(id)
  }

  const onClickSrtBtn = () => {
    onStarred(id)
  }
  const favouritBtn = isFavourite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  return (
    <li>
      <div className="list">
        <div>
          <p>{title}</p>
          <p>{date}</p>
        </div>
        <button type="button" onClick={onClickFvtBtn}>
          <img src={favouritBtn} alt="favourite" />
        </button>
      </div>
    </li>
  )
}

export default AppointmentItem
