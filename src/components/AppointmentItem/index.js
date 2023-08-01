import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {appmtDetails, onFavourite} = props
  const {id, title, date, isFavourite} = appmtDetails

  const favouritBtn = isFavourite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickBtn = () => {
    onFavourite(id)
  }

  return (
    <li>
      <div className="app-container">
        <div className="align-row">
          <p className="title">{title}</p>
          <button
            type="button"
            data-testid="star"
            onClick={onClickBtn}
            className="btn-favourite"
          >
            <img src={favouritBtn} alt="star" />
          </button>
        </div>
        <p className="date">
          date: {format(new Date(date), 'dd MMMM yyyy, EEEE')}
        </p>
      </div>
    </li>
  )
}

export default AppointmentItem
