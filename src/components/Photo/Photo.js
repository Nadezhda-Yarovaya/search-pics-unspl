import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { CardContext } from '../../context/CardContext';

export const Photo = () => {
    const photos=useContext(CardContext);

    const { id } = useParams();

    const photo = photos.find(item => item.id === id);
    if (!photo) {
        return (
            <><p>Photo not found</p></>
        );
    }

    const { src, title, subtitle } = photo;

    return (
        <div className="photo">{" "}
            <Link className="photo-goback" to="/search-pics-unspl">{" "}
                Go Back {" "}
            </Link>{" "}
            <img className="photo-image" src={src} alt={title} />{" "}
            <p className="photo-title">{title}</p>{" "}
            <p className="photo-subtitle">{subtitle}</p>{" "}
        </div>
    );

};