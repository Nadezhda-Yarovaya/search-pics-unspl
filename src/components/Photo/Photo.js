import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { CardContext } from '../../context/CardContext';
import {useApi} from '../../hooks/useApi';
import api from '../../utils/Api.js';
import Spinner from '../Spinner/Spinner.js';

export const Photo = () => {
    const { id } = useParams();
    const handler = useCallback(() => { /* это для того чтобы менялся ай ди */
        return api.getPhotoById(id);
    }, [id]);
    const {data, loading, error} = useApi(handler);

    console.log(data);

    //const photo = data.find(item => item.id === id);   

    if (loading) {
        return (<div className="photo"><Spinner />      </div>);
    }
    if (error) {
        return (
            <><div className="photo"><p>Photo not found</p></div></>
        );
    }

    const { src, title, subtitle } = data;

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