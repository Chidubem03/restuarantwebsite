import {MenuList} from './MenuList'

const Menu = () => {
    return ( 
        <div className="menu">
             <h1 className="menuTitle">Our Menu</h1>
             <div className="menuList">
                {MenuList.map((menuItem, key)=>{
                    return( 
                    <div className="menuItem"><div style={{backgroundImage: `url(${menuItem.image})`}}> </div>
                    <h1> {menuItem.name}</h1>
                    <p>#{menuItem.price}.00</p>
                    </div>
                    );
                })}
             </div>
        </div>
     );
}
 
export default Menu;