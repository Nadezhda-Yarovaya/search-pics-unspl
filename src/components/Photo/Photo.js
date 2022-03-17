import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
/*import { CardContext } from '../../context/CardContext';*/
import {useApi} from "../../hooks/useApi";
import api from "../../utils/Api";

export const Photo = () => {
    //const photos=useContext(CardContext);
    const { id } = useParams();
    const handler = useCallback(() => {
        return api.getPhotoById(id);
    }, [id]);

    const { data, loading, error } = useApi(handler);

    console.log(data,loading,error);

    //const photo = data.find(item => item.id === id);    now data has info on concrete card 
    
    /* if loading then spinner */

    if (error) {
        return (
            <><p>Photo not found</p><a href="/search-pics-unspl">go HOME</a></>
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