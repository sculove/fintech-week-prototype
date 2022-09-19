/* eslint-disable react/display-name */
import classNames from 'classnames/bind'
import {forwardRef} from 'react'
import styles from './BottomButton.module.scss'

import Button, {ButtonProps} from './Button'

const cx = classNames.bind(styles)

type BottomButtonProps = {
    fixed?: boolean
    showAlertText?: string
    buttonInfo: Omit<ButtonProps, 'size'>
}

const BottomButton = forwardRef<HTMLDivElement, BottomButtonProps>(({showAlertText, buttonInfo}) => {
    return (
        <div className={cx('article', {'is-fixed': true, 'with-text': false})}>
            <div className={cx('inner')}>
                {showAlertText && <p className={cx('alert-text')}>{showAlertText}</p>}
                <Button size="large" {...buttonInfo} />
            </div>
        </div>
    )
})
export default BottomButton
