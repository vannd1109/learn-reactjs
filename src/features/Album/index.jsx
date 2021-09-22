import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFuture.propTypes = {

};

function AlbumFuture(props) {
    let albumList = [
        {
            id: 1,
            name: "Top 100 Nhạc Rap Việt Nam Hay Nhất",
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/1/7/2/7172e5eef050a364accf3109a0f7477a.jpg"
        },
        {
            id: 2,
            name: "Top 100 Nhạc Trữ Tình Hay Nhất",
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/b/d/9/b/bd9b5e1bc7e4118b375b3a548f890d23.jpg"
        },
        {
            id: 3,
            name: "Top 100 Nhạc Electronic/Dance Âu Mỹ Hay Nhất",
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg"
        },
    ]
    return (
        <div>
            <h3>Có thể bạn sẽ thích</h3>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFuture;