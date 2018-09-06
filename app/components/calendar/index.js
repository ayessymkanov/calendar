import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'
import Day from './Day'
import { addEvent, deleteEvent } from '../../store'
import { getMonth } from '../../utils/helpers'

class Calendar extends React.Component {
  renderDays = () => {
    const { days, addEvent, deleteEvent } = this.props;
    const daysArray = Object.keys(days);
    return daysArray.map((day, index) => 
      <Day 
        key={index} 
        index={index} 
        event={days[index]} 
        addEvent={addEvent} 
        deleteEvent={deleteEvent} 
      />)
  }
  render() {
    return (
      <div>
        <div style={{ textAlign: 'center', fontSize: 24, margin: '40px' }}>{getMonth()}</div>
        <Container style={{ display: 'flex', flexWrap: 'wrap' }}>
          {this.renderDays()}
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ days: state })

export default connect(mapStateToProps, { addEvent, deleteEvent })(Calendar)