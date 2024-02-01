import menu1 from './Photos/menu1.jpg';
import menu2 from './Photos/menu2.jpg';
import menu3 from './Photos/menu3.jpg';

function Menu() {
    return(
        <div className='menu'>
            <div className='menu_img'>
                <img src={menu1} alt='pic' width='300px'/>
            </div>
            <div className='menu_img'>
                <img src={menu2} alt='pic' width='300px'/>
            </div>
            <div className='menu_img'>
                <img src={menu3} alt='pic' width='300px'/>
            </div>
        </div>
    )
}

export default Menu;