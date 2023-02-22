import React, { FC } from 'react';
import styles from './UserName.module.scss';

type userNameProps = { userName: string }

const UserName: FC<userNameProps> = ({userName}) => {
    const initials = userName.split(' ').map(word => word[0].toUpperCase()).join('')

    return (
        <div className={styles.userNameWrapper}>
            <div className={styles.initials}>{initials}</div>
            <p>{userName}</p>
        </div>
    )
}

export default UserName