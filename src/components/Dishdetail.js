import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label,Card, CardImg, CardText, CardBody,
    CardTitle, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import { Control, LocalForm, Errors,formValueSelector ,Field } from 'react-redux-form';

import { Link } from 'react-router-dom';


    function handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }
    function RenderDish({dish}) {
        if (dish != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name} </CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>    
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    // function RenderComments(props){}
    function RenderComments({comments}) {
        const AddComment=()=>
        {
            const [ModalIsOpen,Set]=useState(false);
            const toggle=()=>Set(!ModalIsOpen);
            return(
                <div>
                    <Button outline onClick={toggle}><span className="fa fa-pencil "></span> Submit Comment</Button>
                    <Modal isOpen={ModalIsOpen} toggle={toggle} >
                        <ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
                        
                        <ModalBody>
                        <CommentForm />
                        </ModalBody>
                        <ModalFooter>
                        </ModalFooter>
                    </Modal>
                </div>
            )
        }
        const CommentForm=()=>
        {
            const required = (val) => val && val.length;
            const maxLength = (len) => (val) => !(val) || (val.length <= len);
            const minLength = (len) => (val) => val && (val.length >= len);
            const isNumber = (val) => !isNaN(Number(val));
            const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
            return(
                <div className="container">
                    <LocalForm onSubmit={(values) => handleSubmit(values)}>
                    <Row className="form-group">
                                <Label htmlFor="lastname" >Rating</Label>
                                <Control.select model=".rating" id="rating" name="rating"
                                        placeholder="rating"
                                        className="form-control"
                                         >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                         </Control.select>
                                </Row>
                            <Row className="form-group">
                                <Label htmlFor="fullname" >Your Name</Label>
                                    <Control.text model=".lastname" id="fullname" name="fullname"
                                        placeholder="Full name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" > Comment</Label>
                                    <Control.textarea model=".textarea" id="textarea" name="textarea"
                                        className="form-control" style={{height:200}}
                                         />
            
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: -1}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                            </LocalForm>

                </div>
            )

        }

        if (comments != null) {
            const cmnts = comments.map((commnts) => {
                return (
                    <ul key={commnts.id} className="list-unstyled">
                        <li>
                            <p> {commnts.comment} </p>
                            <p> -- {commnts.author},
                                &nbsp;
                                {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: '2-digit'
                                }).format(new Date(Date.parse(commnts.date)))}
                            </p>
                        </li>
                    </ul>
                );
            });

            return (
                <div className="col-12 col-md-5 m-1">
                    <h4> Comments </h4>
                    {cmnts}
                    <br/>

                    <AddComment/>
                    
                </div>
            );  
        // if comments is empty     
        } else {
            return (
                <div></div>
            );
        }
    }
    
    const DishDetail = (props) => {
       
        if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem> <Link to='home'>Home</Link> </BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>    
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments} />
                    </div>    
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
    
export default DishDetail;