import {FC, ReactNode} from 'react'
import GoingHome from '@/components/GoingHome'

interface LayoutProps{
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({children})=>{
    return <div className='bg-blue-100 h-screen'>
        <GoingHome></GoingHome>
        {children}
    </div>
}

export default Layout