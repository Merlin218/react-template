import { CSSProperties, FC } from "react"

const Logo:FC<{
  width: number,
  color: string,
  style ?: CSSProperties
}> = (props)=>{
  const {width,color,style} = props
  return (
    <div style={{
      width:width+'px',
      overflow:'hidden',
      ...style
    }}>
      <img src="/public/logo.svg" width={width} 
      style={{
        position: 'relative',
        left: '-120px',
        filter: 'drop-shadow('+ color +' 120px 0)'
      }} />
    </div>
  )
}

export default Logo
