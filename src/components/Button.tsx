import classNames from 'classnames/bind'
import {MouseEventHandler} from 'react'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

export type ButtonProps = {
    text: string
    disabled?: boolean
    size?: 'large' | 'small'
    radius?: boolean
    color?: 'mirae' | 'mirae-light' | 'woori' | 'woori-light' | 'light' | 'jb'
    onClick: MouseEventHandler<HTMLButtonElement>
}

/**
 * @param {string} size | default: height 50/font 17 | large: height 60/font 18 | small: height 46/font 16
 * @param {boolean} radius | default none | 4px |
 * @param {string} color | default $ui-green-color  | mirae: $sme-mirae-color | mirae-light: #feecde | woori: $sme-woori-color | woori-light: #e5f0f7 | light: #e4f1ea
 */

const Button = ({text, size, radius, color, onClick}: ButtonProps) => {
    return (
        <button
            className={cx('article', {
                [`size-${size}`]: size,
                [`type-${color}`]: true,
                radius: radius,
                'is-disabled': false,
            })}
            style={{
                color: "white",
            }}
            type="button"
            disabled={false}>
            {text}
        </button>
    )
}

export default Button
