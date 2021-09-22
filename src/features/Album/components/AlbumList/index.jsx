import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './styles.scss';

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired
};

function AlbumList(props) {
    let { albumList } = props;
    return (
        <ul className="album-list">
            {albumList.map(album => (
                <li key={album.id}>
                    <Album album={album} />
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;