import "./list.scss"

function List({item, active, setCurrent}) {
  return (
    <li  className={active && "active"} onClick={()=>setCurrent(item)} >{item}</li>
  )
}

export default List