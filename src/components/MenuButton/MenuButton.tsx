import React, { FC, ReactNode, useState } from 'react';
import classNames from 'classnames';
import styles from './MenuButton.module.scss';
import Button, { ButtonType } from '../Button';
import { CloseMenu, OpenMenu } from '../../assets/icons';

enum ButtonState {
    OPEN,
    CLOSE,
}

const MenuButton = () => {
    const [btnState, setBtnState] = useState(ButtonState.OPEN)

    const changeState = () => {
        return btnState === ButtonState.OPEN ? setBtnState(ButtonState.CLOSE) : setBtnState(ButtonState.OPEN)
    }

    return <Button className={styles.button} title={btnState === ButtonState.OPEN && <OpenMenu /> || btnState === ButtonState.CLOSE && <CloseMenu />} type={ButtonType.Primary} onClick={changeState} />    
}

export default MenuButton