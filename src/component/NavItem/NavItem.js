import './NavItem.css'

const NavItem = (prop) => {
  return (
    <li className='nav-item'>{prop.children}</li>
  )
}
const NavItemDropDown = (prop) => {
    return (
      <li className='nav-item dropdown'>{prop.children}</li>
    )
  }
  export default NavItem
  export {NavItemDropDown}
