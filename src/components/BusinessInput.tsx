import classnames from 'classnames/bind'
import {ForwardedRef, InputHTMLAttributes, SyntheticEvent} from 'react'
import styles from './BusinessInput.module.scss'

import InputTextFlexibleBox, {InputTextFlexibleBoxProps} from './InputTextFlexibleBox'

const cx = classnames.bind(styles)

type InputRefProps = {
    ref?: ForwardedRef<HTMLInputElement>
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    onFocus?: (e: SyntheticEvent) => void
    onBlur?: (e: SyntheticEvent) => void
}

export type BusinessInputProps = {
    focus: boolean
    inputTextFlexibleBoxProps: InputTextFlexibleBoxProps
    firstInputProps: InputProps & InputRefProps
    middleInputProps: InputProps & InputRefProps
    lastInputProps: InputProps & InputRefProps
    readOnly?: boolean
}

const BusinessInput = ({
    focus,
    inputTextFlexibleBoxProps,
    firstInputProps,
    middleInputProps,
    lastInputProps,
    readOnly,
}: BusinessInputProps) => {
    return (
        <InputTextFlexibleBox {...inputTextFlexibleBoxProps}>
            <div className={cx('input-box', {'is-focus': focus})}>
                <div className={cx('input')}>
                    <input
                        type="text"
                        className={cx('input-value')}
                        title="사업자 등록번호 앞자리"
                        placeholder={'000'}
                        {...firstInputProps}
                        readOnly={true}
                        value={123}
                    />
                </div>
                <div className={cx('dash')}>
                    <span className="blind">-</span>
                </div>
                <div className={cx('input')}>
                    <input
                        type="text"
                        className={cx('input-value')}
                        title="사업자 등록번호 중간자리"
                        placeholder={'00'}
                        {...middleInputProps}
                        readOnly={true}
                        value={45}
                    />
                </div>
                <div className={cx('dash')}>
                    <span className="blind">-</span>
                </div>
                <div className={cx('input')}>
                    <input
                        type="text"
                        className={cx('input-value')}
                        title="사업자 등록번호 마지막자리"
                        placeholder={'00000'}
                        {...lastInputProps}
                        readOnly={true}
                        value={6789}
                    />
                </div>
            </div>
        </InputTextFlexibleBox>
    )
}

export default BusinessInput
