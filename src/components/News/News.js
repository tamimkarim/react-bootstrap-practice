import React from 'react';
import {Button,Card} from 'react-bootstrap';
const News = (props) => {
   const{title, description } = props.article;
   
    return (
        <div>
            
                <Card style={{ width: '18rem' }}>
                    
                    <Card.Body>
                    <Card.Title> <h5>{title}</h5> </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
        </div>
    );
};

export default News;