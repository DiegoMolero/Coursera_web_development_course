import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


    function RenderDish({dish}) {
        if (dish != null){
            const comments = dish.comments.map((comment) => {
                return (
                        <Card key={comment.id}>
                            <CardBody>
                                <CardText>{comment.author}</CardText>
                                <CardText>{comment.comment}</CardText>
                                <CardText>{comment.date}</CardText>
                                <CardText>
                                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                </CardText>

                            </CardBody>
                        </Card>
                );
            });
            
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h1>Comments</h1>
                        {comments}
                    </div>
                </div>

            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

 const DishDetail = (props) => {
     if(props.dish != null){
        return <RenderDish dish={props.dish}/>
     }else{
        return <div></div>
     }
 }

export default DishDetail;