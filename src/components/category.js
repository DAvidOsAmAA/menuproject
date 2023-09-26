import React from "react";
import { Row,Col } from "react-bootstrap";


const Category = ({filterbycategory ,allCat})=>{


  const onFilter =(cat)=>{
    filterbycategory(cat)
  }
  return(
    <Row>
      <Col sm="12" className="d-flex justify-content-center my-4 mb-5">
      {
      allCat.length>= 1 ? (allCat.map((cat)=>{
        return(
          <div>
          <button onClick={()=> onFilter(cat)} style={{border:"1px solid #b45b35"}} className="btn mx-2">{cat}</button>
          </div>
        )
      })):<h1> there is no category</h1>
      }
        
      

    </Col>
    </Row>
  )
}
export default Category;