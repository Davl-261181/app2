import React from 'react';
import Loader from '../../common/loader/loader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Loader />
    }

  return <div>
      { /*<div>
           <img src='https://www.pnp.ru/upload/entities/2019/12/18/article/detailPicture/90/ac/96/c7/28dc349f219c5ff70af0b64bbae3632b.jpg'/>
      </div>*/}
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} />
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
    
    </div>
}

export default ProfileInfo;