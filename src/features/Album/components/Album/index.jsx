import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Album.propTypes = {
    album: PropTypes.object.isRequired
};

function Album(props) {
    let { album } = props;
    return (
        <div className="album">
            <div className="album__thumbnail">
                <img src={album.thumbnailUrl} alt={album.name} />
            </div>
            <div className="album__name">
                <p>{album.name}</p>
            </div>
        </div>
    );
}

export default Album;