import classNames from 'classnames/bind'
import styles from './SubmitContent.module.scss'
import NaverSubmitCertLink from './NaverSubmitCertLink'
import PublicSubmitCertLink from './PublicSubmitCertLink'

const cx = classNames.bind(styles)

const SubmitContent = () => {
    return <div className={cx('article')}>
      <NaverSubmitCertLink />
      <PublicSubmitCertLink />
    </div>
}

export default SubmitContent
