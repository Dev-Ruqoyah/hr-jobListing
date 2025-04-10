interface  SubheadingTitle{
    subheadingtitle:string
}

const Header2:React.FC<SubheadingTitle> = ({subheadingtitle}) => {
    return ( 
        <p className="text-center">
        {subheadingtitle}
      </p>
     );
}
 
export default Header2;