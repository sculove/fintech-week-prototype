import React from 'react'
import classNames from 'classnames/bind'
import styles from './TabMenu.module.scss'

const cx = classNames.bind(styles)

const SMART_PLACE_LOAN_PATH = '/loan/sme/smartplace'

const TabMenu = () => {
    return (
        <ul className={cx('article')}>
            <li className={cx('item')}>
                <a href="#" onClick={(e) => {
                        e.preventDefault()
                    }}
                    className={cx('link')}>
                    스마트플레이스
                </a>
            </li>
            <li className={cx('item')}>
                <a
                    href="#"
                    className={cx('link', 'is-selected')}
                    onClick={(e) => {
                        e.preventDefault()
                    }}>
                    스마트스토어
                </a>
            </li>
        </ul>
    )
}

export default TabMenu
