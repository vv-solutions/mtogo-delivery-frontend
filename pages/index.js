import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Button, Container, Form, Modal, Table} from "react-bootstrap";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import kitchenFacade from "../facades/kitchenFacade";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {use} from "chai";

export const getPropsTest = () =>{
  console.log(process.env.PGUSER)
}


export default function Home() {
  return (
    <div className="contentContainer shadow-sm p-3 mb-5 bg-white rounded">
      <Container>
        <h1>{localStorage.getItem("supplierId")}</h1>

        <Tabs className={"justify-content-center  mt-5"}>
          <TabList>
            <Tab id={"pendingTab"} onClick={fetchPending} data-testid="pendingTab">Pending Tickets</Tab>
            <Tab id={"inProgressTab"} onClick={fetchInProgress} data-testid="inProgressTab">In Progress Tickets</Tab>
            <Tab id={"allTab"} onClick={fetchAll}>All Tickets</Tab>
          </TabList>

          <TabPanel>
            <Table id={"pendingTable"} class="table table-striped table-hover border-top" data-testid="pendingTable">
              <thead className="thead-dark">
              <tr>
                <th>Ticket Id</th>
                <th>OrderId</th>
                <th>Items</th>
                <th>Comment</th>
                <th>Created at</th>
                <th>Accept</th>
                <th>Deny</th>
              </tr>
              </thead>
              <tbody>
              {tickets &&
                  tickets.map(ticket =>
                      <tr style={{cursor:"pointer"}} key={ticket.id}>
                        <td className='table-data'>{ticket.id }</td>
                        <td className='table-data'>{ticket.orderId }</td>
                        <td className="table-data">
                          {
                            ticket.ticketLines &&
                            ticket.ticketLines.map((line) => (
                              <div key={line.id}>
                                {line.productName} - Qty: {line.quantity}
                              </div>
                          ))}
                        </td>
                        <td className='table-data'>{ticket.comment }</td>
                        <td className='table-data '>{ticket.createStamp }</td>
                        <td><Button id={ticket.id} className={"btn-success"} onClick={handleAcceptClick} data-testid={"acceptButton_"+ticket.id}>Accept</Button></td>
                        <td><Button id={ticket.id} onClick={denyTicket} className={"btn-danger"}  data-testid={"denyButton_"+ticket.id}>Deny</Button></td>
                      </tr>
                  )
              }
              </tbody>
            </Table>
          </TabPanel>
          <TabPanel>
            <Table class="table table-striped table-hover border-top " data-testid="inProgressTable">
              <thead className="thead-dark">
              <tr>
                <th>Ticket Id</th>
                <th>OrderId</th>
                <th>Items</th>
                <th>Comment</th>
                <th>Pickup Time</th>
                <th>Created at</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
              {
                tickets &&
                  tickets.map(ticket=>
                    <tr key={ticket.id}>
                      <td>{ticket.id}</td>
                      <td>{ticket.orderId}</td>
                      <td>
                      {
                        ticket.ticketLines &&

                        ticket.ticketLines.map((line) => (
                          <div key={line.id}>
                            {line.productName} - Qty: {line.quantity}
                          </div>
                        ))}</td>
                      <td>{ticket.comment}</td>
                      <td>{ticket.pickupTime}</td>
                      <td>{ticket.createStamp}</td>
                      <td><Button id={ticket.id} onClick={doneTicket}  data-testid={"doneButton_"+ticket.id}>Done</Button></td>
                    </tr>
                  )
              }
              </tbody>
            </Table>
          </TabPanel>
          <TabPanel>
              <Table striped bordered hover  data-testid="doneTable">
                <thead>
                <tr>
                  <th>Ticket Id</th>
                  <th>OrderId</th>
                  <th>Items</th>
                  <th>Comment</th>
                  <th>Status</th>
                  <th>Created at</th>
                </tr>
                </thead>
                <tbody>
                {
                    tickets &&
                    tickets.map(ticket=>
                        <tr key={ticket.id}>
                          <td>{ticket.id}</td>
                          <td>{ticket.orderId}</td>
                          <td>
                            {
                                ticket.ticketLines &&

                                ticket.ticketLines.map((line) => (
                                    <div key={line.id}>
                                      {line.productName} - Qty: {line.quantity}
                                    </div>
                                ))}</td>
                          <td>{ticket.comment}</td>
                          <td>{getStatusNameByStatus(ticket.status)}</td>
                          <td>{ticket.createStamp}</td>
                        </tr>
                    )
                }
                </tbody>
              </Table>
            </TabPanel>
          {/* Modal for accepting ticket */}
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Enter Pickup Time</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="pickupDateTime">
                <Form.Label>Pickup Time</Form.Label>
                <Form.Control
                    data-testid="pickupInput"
                    type="datetime-local"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
              <Button variant="primary" data-testid="confirmAcceptButton" onClick={handleConfirmClick}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
        </Tabs>

      </Container>

    </div>
  )
}
