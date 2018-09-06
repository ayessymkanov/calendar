import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Button } from 'reactstrap'
import { getMonth } from '../../utils/helpers'

export default ({ isOpen, toggle, title, day, onChange, onSubmit}) => (
  <Modal isOpen={isOpen} toggle={toggle}>
    <ModalHeader toggle={toggle}>Add an event | {getMonth()}, {day}</ModalHeader>
    <ModalBody>
      <Form onSubmit={onSubmit}>
        <Input type="text" value={title} onChange={onChange} />
      </Form>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={onSubmit}>Add</Button>{' '}
      <Button color="secondary" onClick={toggle}>Cancel</Button>
    </ModalFooter>
  </Modal>
)