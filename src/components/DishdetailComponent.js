import React,   {   Component   } from 'react';
import {    Card,   CardImg,    CardImgOverlay, CardText,   CardBody,   CardTitle,  ListGroup, ListGroupItem    }  from 'reactstrap';

class Dishdetail extends Component {

    constructor(props)  {
        super(props);

        this.state  =   {
            selectedDish:   null,
            selectedComments:   null
        };
        console.log('Menu Component constructor is invoked');
    }

    onDishSelect(dish){
        this.setState({ selectedDish:   dish, selectedComments: dish.comments});
    }

    renderComments(comments) {
        if (comments != null) {
            const comment = comments.map((commentList) => {
                return (
                    <ul key={commentList.id} className="list-unstyled">
                        <li className="col-12">
                            {commentList.comment}
                        </li>
                        <li className="col-12">
                            -- {commentList.author},
                            {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day:'2-digit'
                            })
                                .format(new Date(Date.parse(commentList.date)))}
                        </li>
                    </ul>
                );
            });
            return (
                <div className="col-12 col-md-5 m-1 col-sm-12 col-xs-12">
                    <h4>Comments</h4>
                    <div className="row">
                        {comment}
                    </div>
                </div>
            )
        }
        else{
            return(
                <div></div>
            );
        }
    }


    renderDish(dish)    {
        if (dish    !=  null)   {
            return(
                    <div className="col-12 col-md-5 m-1 col-sm-12 col-xs-12">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render(){

        const   Dishdetail    =   this.props.dishes.map((dish)    =>{
            return(
                <div key={dish.id}  className="col-12 col-md-5 m-1">
                    <Card onClick={()   =>  this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        console.log('Menu Component render is invoked');
        return(
            <div className="container">
                <div className="row">
                    {Dishdetail}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                    {this.renderComments(this.state.selectedComments)}
                </div>
            </div>
        );
    }
}

export default Dishdetail;