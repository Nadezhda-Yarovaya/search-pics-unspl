import { Link } from 'react-router-dom';
import {useParams } from 'react-router-dom/cjs/react-router-dom.min';

export const Photo = ({ photos }) => {

    console.log('in photo');
    const {id} = useParams();
    console.log(id);

    const photo = photos.find(item => item.id === id); /* см возвратит без ретурна */
    if(!photo ) {
        return (
<><p>nothing</p></>
        );
    }

    const { src, title, subtitle } = photo;

    return (
        <div className="photo">{" "}
            <Link className="photo-goback" to="/">{" "}
               Go Back {" "}
            </Link>{" "}
            <img className="photo-image" src={src} alt={title} />{" "}
            <p className="photo-title">{title}</p>{" "}
            <p className="photo-subtitle">{subtitle}</p>{" "}
        </div>
    );

};