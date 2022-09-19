import type {PropsWithChildren, ReactNode} from 'react'
import classNames from 'classnames/bind'
import {AniLoadingCube} from '@financial/common-icons'
import IconCloseLayer from '../assets/IconSvg/IconCloseLayer'
import styles from './LoadingCubeLayer.module.scss'
import Steppers from './Steppers'

const cx = classNames.bind(styles)

type LoadingCubeLayerProps = PropsWithChildren<{
    tipText?: string
    tipDesc?: ReactNode
}>

const LoadingCubeLayer = ({tipText, tipDesc}: LoadingCubeLayerProps) => {
    return (
        <>
            <div className={cx('article')}>
             <div className={cx('inner')}>
                <Steppers list={['심사대상조회', '자료제출', 'ACSS 심사', '한도확인']} step={3} />
                <div style={{height: "50px"}}/>
                <AniLoadingCube width={110} height={110} />
                <h3 className={cx('title')}><div>ACSS를 이용해</div><div>한도와 금리를 심사중입니다.</div></h3>
                {tipText && <strong className={cx('tip')}>{tipText}</strong>}
                {tipDesc && <p className={cx('desc')}>{tipDesc}</p>}
            </div>
            <button type="button" className={cx('button-close')}>
                <IconCloseLayer width={"30"} height={"30"} />
                <span className="blind">창닫기</span>
            </button>
            </div>
        </>
    )
}
export default LoadingCubeLayer
