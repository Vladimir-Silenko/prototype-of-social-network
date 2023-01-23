import { OnpageChanged, } from '../../redux/users-reducer'
import { Btn } from '../reusable/button'
import { useState } from 'react'
import styled from 'styled-components'

const Button = styled(Btn)`
background:transparent;
color:grey;
width:30px;
padding:2px;
border:none;
`
const Container = styled.div`
margin:40px 30%;
`
type PropsType = {
    st: any
    dispatch: any
    pagesCount: number
}
type pageItemProps = {
    currentPage: number
    id: any
    key: number
    onClick: any
}

const PageItem = styled.span<pageItemProps>`
    cursor: pointer;
    display: inline-block;
    margin: 0 3px;
    font-weight:${currentPage => currentPage ? 'bold' : 'normal'};
`
export const Paginator: React.FC<PropsType> = ({ st, dispatch, pagesCount }) => {
    // debugger
    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) { pages.push(i) }
    const pageAmount: number = 10
    let [leftborder, setLeftborder] = useState<number>(1)
    let rightborder = leftborder + pageAmount - 1

    return <Container>
        <div>
            {leftborder > 10 && <Button onClick={() => setLeftborder(leftborder - 10)}>{'<<'}</Button>}

            {
                pages.map(item => {
                    if (item >= leftborder && item <= rightborder) {
                        return <PageItem
                            currentPage={st.currentPage}
                            id={item}
                            key={item}
                            onClick={() => dispatch(OnpageChanged(item))}>
                            {item}
                        </PageItem>
                    }
                })
            }
            <Button onClick={() => setLeftborder(rightborder + 1)}>{'>>'}</Button>

        </div>
    </Container>

}