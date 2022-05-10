import Navbar from './Navbar'

export default function Header(){
    return(
        <header>
                <Navbar />
                <h1 className='page-title'>Clean Blog</h1>
                <h2 className='page-subtitle'>A Blog Theme by Start Bootstrap</h2>
        </header>
    )
}