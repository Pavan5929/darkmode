import React,{useContext} from 'react'
import Title from "../Components/Title"
import Button from "../Components/Button"
import { ThemeContext } from './context/Theme';
function Blog() {
  const {theme,changeTheme}=useContext(ThemeContext);
    return(

  <div className='container'>
    <Title text={`My Blog with theme ${theme} Theme`}/>
   <span style={{position:"absolute",top:10,right:10}}>
    <Button text={theme==="dark"?"Light":"Dark"} 
    btnClass={`${theme==="dark" && "btn-light"}
    btn-sm`

}
    onClick={changeTheme}/>
   </span>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>

    </div>)
}

export default Blog
