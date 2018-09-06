import React from 'react'
import EventModal from './EventModal'
import './styles.scss'

export default class Day extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalActive: false,
      title: props.event.title
    }
  }

  toggleModal = () => {
    this.setState({
      isModalActive: !this.state.isModalActive
    })
  }

  onClick = () => {
    this.toggleModal()
  }
  onChange = (e) => {
    this.setState({ title: e.target.value })
  }
  deleteEvent = (e) => {
    e.stopPropagation()
    this.props.deleteEvent(this.props.index)
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.addEvent(this.props.index, this.state.title)
    this.toggleModal()
  }
  render() {
    const { index } = this.props
    const { title: eventTitle } = this.props.event
    const eventExists = eventTitle.length > 0
    const { isModalActive, title } = this.state
    return(
      <div className={`${eventExists ? 'day event' : 'day'}`} onClick={this.onClick}>
        <button className="day-btn">{eventExists ? 'edit' : 'add'}</button>
        <div className="day-meta">
          <div>{index + 1}</div>
          {eventTitle.length > 0 ? <div className="delete-event" onClick={this.deleteEvent}>x</div> : null}
        </div>
        <div className="event-title">{this.props.event.title}</div>
        <EventModal 
          isOpen={isModalActive}  
          title={title}
          day={index+1}
          toggle={this.toggleModal} 
          onSubmit={this.onSubmit}
          onChange={this.onChange}
        />
      </div>
    )
  }
}