import classNames from 'classnames/bind'
import styles from './Complete.module.scss'
import Step from './Step'
import Title from './Title'

const cx = classNames.bind(styles)

type CompleteProps = {
    step: 1 | 2
}

const Complete = ({step}: CompleteProps) => {
    return (
        <div className={cx('article')}>
            <Title
                title={
                    <>
                        <em>아래 버튼</em>을 눌러
                        <br />
                        마지막 인증을 완료해 주세요
                    </>
                }
            />
            <Step currentStep={step} />
        </div>
    )
}

export default Complete
