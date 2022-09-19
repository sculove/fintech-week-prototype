import classnames from 'classnames/bind'
import styles from './ResultTitle.module.scss'

const cx = classnames.bind(styles)

type ResultTitleProps = {
    showFaqLink?: boolean
}

const ResultTitle = ({showFaqLink}: ResultTitleProps) => {
    return (
        <div className={cx('article')}>
            <h3 className={cx('title')}>조회 결과</h3>
            {showFaqLink && (
                <a className={cx('link')} target="_blank">
                    상품 FAQ
                </a>
            )}
        </div>
    )
}

export default ResultTitle
