import {Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <Link className="card" to={`/search-pics-unspl/photos/${props.id}`}>
        <img className="class__image" src={props.src} alt={props.alt} />
        <p className="card__title">{props.title}</p>
        <p className="card__subtitle">{props.subtitle}</p>
        </Link>
    );
}

export default Card;