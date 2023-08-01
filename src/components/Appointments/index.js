import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    title: '',
    date: new Date(),
    isStarred: false,
    isFavourite: false,
    appointmentsList: [],
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {title, date} = this.state

    if (title.length > 0 && date.length > 0) {
      const newAppointment = {
        id: uuidv4(),
        title,
        date,
        isFavourite: false,
      }
      this.setState(prevState => ({
        appointmentsList: [...prevState.appointmentsList, newAppointment],
        title: '',
        date: '',
      }))
    }
  }

  onFavourite = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachOne => {
        if (eachOne.id === id) {
          return {...eachOne, isFavourite: !eachOne.isFavourite}
        }
        return eachOne
      }),
    }))
  }

  onStarred = () => {
    this.setState(prevState => ({isStarred: !prevState.isStarred}))
  }

  render() {
    const {title, isStarred, date, appointmentsList} = this.state

    const starredAppointments = appointmentsList.filter(
      each => each.isFavourite === true,
    )
    return (
      <div className="bg">
        <div className="card">
          <h1>Add Appointments</h1>
          <div className="order-form">
            <form onSubmit={this.onSubmitForm}>
              <div className="label">
                <label htmlFor="title">TITLE</label>
                <input
                  onChange={this.onChangeTitle}
                  placeholder="Title"
                  id="title"
                  value={title}
                />
              </div>
              <div className="label">
                <label htmlFor="date">DATE</label>
                <input
                  onChange={this.onChangeDate}
                  type="date"
                  id="date"
                  placeholder="dd/mm/yyyy"
                  value={date}
                />
              </div>
              <button className="add" type="submit">
                Add
              </button>
            </form>
            <img
              className="title-img"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr />
          <div className="str-app">
            <h1 className="h1">Appointments</h1>
            <button type="button" onClick={this.onStarred} className="str-btn">
              Starred
            </button>
          </div>
          <ul>
            {isStarred === true
              ? starredAppointments.map(eachAppmnt => (
                  <AppointmentItem
                    appmtDetails={eachAppmnt}
                    key={eachAppmnt.id}
                    onFavourite={this.onFavourite}
                    onStarred={this.onStarred}
                  />
                ))
              : appointmentsList.map(eachAppmnt => (
                  <AppointmentItem
                    appmtDetails={eachAppmnt}
                    key={eachAppmnt.id}
                    onFavourite={this.onFavourite}
                    onStarred={this.onStarred}
                  />
                ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
