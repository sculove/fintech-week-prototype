import type {FocusEventHandler, MouseEventHandler, PropsWithChildren} from 'react'
import classNames from 'classnames/bind'
import IconInputDelete from '../assets/IconSvg/IconInputDelete'
import styles from './InputTextFlexibleBox.module.scss'


const cx = classNames.bind(styles)

export type InputTextFlexibleBoxProps = PropsWithChildren<{
    showDeleteButton?: boolean
    styleClassName?: string
    focus?: boolean
    onClick: () => void
    onMouseDown?: MouseEventHandler<HTMLButtonElement>
    onFocus?: FocusEventHandler<HTMLDivElement>
    onBlur?: FocusEventHandler<HTMLDivElement>
}>

const InputTextFlexibleBox = ({
    styleClassName,
    children,
    onFocus,
    onBlur,
}: InputTextFlexibleBoxProps) => {
    return (
        <div className={cx('article', styleClassName)} onFocus={onFocus} onBlur={onBlur}>
            {children}
        </div>
    )
}

export default InputTextFlexibleBox
