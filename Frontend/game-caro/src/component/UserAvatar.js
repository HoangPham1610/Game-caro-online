import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
class UserAvatar extends Component {
    render() {
        return (
            <div>
                <Image className="nav-user-avatar" src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/560187_128403440671657_2007208875_n.jpg?_nc_cat=108&cachebreaker=hd&_nc_oc=AQn_m-NWhgXhCBtyt00JhROY-IugK6URp6NYzh3bIFmaXwo9jCL_4cUqDaWpdD0PGcM&_nc_ht=scontent.fsgn2-3.fna&oh=8470616f7e00bd5414eff66835ba8996&oe=5E606D7F" roundedCircle/>
            </div>
        );
    }
}

export default UserAvatar;