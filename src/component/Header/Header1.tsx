interface HeaderTitle{
    headertitle:string
}
const Header1:React.FC<HeaderTitle> = ({headertitle}) => {
  return (
    <h3 className="text-2xl font-semibold text-blue-950">
    {headertitle}
  </h3>
  )
}

export default Header1