import React from "react";
import { Row,Col,Card } from "react-bootstrap";

const ItemCard = ({itemsData})=>{
  return(
    <Row>{
      itemsData.length >= 1 ? (itemsData.map((item)=>{
        return(
          <Col
          key={item.id} sm="12" className="mb-2">
          <Card className="d-flex flex-row">
          <Card.Img variant="top" src= {item.imgurl}className="img-item" />
          <Card.Body>
            <Card.Title className="d-flex justify-content-between"> 
              <div className="item-title " >{item.title}</div>
              <div className="mb-2 item-title" >{item.price}</div>
              </Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        )
      })): <h1>there Is no more</h1>
    }
  </Row>
  )
}

export default ItemCard;