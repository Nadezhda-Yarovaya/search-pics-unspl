import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useApi } from '../../hooks/useApi';
import api from '../../utils/Api';
import Spinner from '../Spinner/Spinner.js';

export const Photo = () => {
  const { id } = useParams();

  console.log('id: ' + id);
  const handler = useCallback(() => {
    return api.getPhotoById(id);
  }, [id]);

  const { data, loading, error } = useApi(handler);

  if (loading) {
    return (
    <><Spinner /></>
    );
  }

  if (error) {
    return (
      <>
        <p>Photo not found</p>
        <a href="/search-pics-unspl">go HOME</a>
      </>
    );
  }

  const { src, title, subtitle } = data;

  return (
    <div className="photo">
      {' '}
      <Link className="photo-goback" to="/search-pics-unspl">
        {' '}
        Go Back{' '}
      </Link>{' '}
      <img className="photo-image" src={src} alt={title} />{' '}
      <p className="photo-title">{title}</p>{' '}
      <p className="photo-subtitle">{subtitle}</p>{' '}
    </div>
  );
};
