import './index.css'
const AppointmentItem = props => {
  const {appmtDetails, onFavourite, onStarred} = props
  const {id, title, date, isFavourite, isStarred} = appmtDetails

  const onClickFvtBtn = () => {
    onFavourite(id)
  }

  const onClickSrtBtn = () => {
    onStarred()
  }
  const favouritBtn = isFavourite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  return (
    <div className="list">
      <li>
        <div>
          <p>{title}</p>
          <p>{date}</p>
        </div>
        <button onClick={onClickFvtBtn}>
          <img src={favouritBtn} />
        </button>
      </li>
    </div>
  )
}

export default AppointmentItem
