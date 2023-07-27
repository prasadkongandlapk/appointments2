import {Component} from 'react'

import './index.css'

import {format} from 'date-fns'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

const initialAppointmentsList = []

class Appointments extends Component {
  state = {
    title: '',
    date: new Date(),
    isStarred: false,
    appointmentsList: initialAppointmentsList,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {title, date, appointmentsList} = this.state

    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isFavourite: false,
    }
    if (title.length > 0 && date.length > 0) {
      this.setState(prevState => ({
        appointmentsList: [...appointmentsList, newAppointment],
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
    const {title, date, isStarred, appointmentsList} = this.state

    const displayDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

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
                  name="title"
                  value={title}
                />
              </div>
              <div className="label">
                <label htmlFor="date">DATE</label>
                <input
                  onChange={this.onChangeDate}
                  type="date"
                  name="date"
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
            <button type="button" className="str-btn">
              Starred
            </button>
          </div>
          <ul>
            {appointmentsList.map(eachAppmnt => (
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
