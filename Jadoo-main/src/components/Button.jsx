
const Button = ({TagName="button", btnStyle="default", children, ...props}) => {
    const buttonStyle = ()=> {
        if(btnStyle==="default") {
        return "bg-yellow text-white hover:bg-amber-500 flex items-center gap-2 rounded-[10px] px-[26px] py-[18px]  cursor-pointer"
        }
        if(btnStyle==="secondary") {
        return "bg-red-500 text-white hover:bg-amber-500 items-center gap-2 rounded-[4px] cursor-pointer"
        }
        if(btnStyle==="icon") {
        return "bg-transparent text-blue flex items-center gap-2 rounded-[10px] px-[26px  cursor-pointer"
        }
    }
  return (
    <TagName 
    className={buttonStyle()}
    >
      {children}
    </TagName>
  )
}

export default Button
