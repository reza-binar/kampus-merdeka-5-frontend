import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import PropType from "prop-types";

function MovieItem({ id, title, overview, imageURL }) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imageURL} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className="text-truncate">{overview}</Card.Text>
                <Button as={Link} variant="primary" to={`/details/${id}`}>
                    Details Movie
                </Button>
            </Card.Body>
        </Card>
    );
}

MovieItem.propTypes = {
    id: PropType.number.isRequired,
    title: PropType.string.isRequired,
    overview: PropType.string.isRequired,
    imageURL: PropType.string.isRequired,
};

export default MovieItem;
