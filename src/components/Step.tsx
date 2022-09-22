import classNames from 'classnames/bind'
import styles from './Step.module.scss'

const cx = classNames.bind(styles)

type StepProps = {
    currentStep: 1 | 2
}

const Step = ({currentStep}: StepProps) => {
    const stepList = ['국세청']

    return (
        <ol className={cx('article')}>
            {stepList.map((item, index) => {
                const isCurrentStep = currentStep === index + 1 // 현재 단계인 경우
                const isPrevStep = currentStep > index + 1 // 이전 단계인 경우
                return (
                    <li className={cx('item', {'current-step': isCurrentStep})} key={`step-${index}`}>
                        {isCurrentStep && <span className="blind">현재 단계</span>}
                        <span className={cx('number')}>{index + 1}</span>
                        {item}
                        {isPrevStep && <strong className={cx('text')}>인증완료</strong>}
                    </li>
                )
            })}
        </ol>
    )
}

export default Step
