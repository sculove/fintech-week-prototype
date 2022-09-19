import {CloseButton} from './HeaderBtn'
import Header from './Header'

export const CommonHeader = ({title}: {title:any}) => {
    return <Header title={title} rightComponent={<CloseButton />} />
}

export default CommonHeader
