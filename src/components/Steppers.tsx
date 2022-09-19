import classNames from 'classnames/bind'
import styles from './Steppers.module.scss'

const cx = classNames.bind(styles)

type SteppersProps = {
    list: string[]
    step: number
    color?: 'mirae' | 'woori'
}

const Steppers = ({list, step, color}: SteppersProps) => {
    return (
        <div className={cx('article')}>
            <ol
                className={cx('list', {
                    [`type-${color}`]: color,
                })}>
                {list.map((stepname: string, key: number) => {
                    const isCurrentStep = step - 1 === key
                    return (
                        <li key={key} className={cx('item', {current: isCurrentStep})}>
                            {isCurrentStep && <span className="blind">현재 단계</span>}
                            <div className={cx('step')}>{key + 1}</div>
                            <span className={cx('text')}>{stepname}</span>
                        </li>
                    )
                })}
            </ol>
            <h2 className="blind">{list[step - 1]}</h2>
        </div>
    )
}
export default Steppers
