import './Coin.css';

function Layout(props){
    return(
        <div className='coin-app'>
            {props.children}
        </div>
    );
}
export default Layout;