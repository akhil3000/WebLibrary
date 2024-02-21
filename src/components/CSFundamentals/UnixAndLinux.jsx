import React from 'react'
import './CSFundamentals.css'
import MenuTitle from '../MenuTitle'
const UnixAndLinux = () => {
  return (
    <div className="menuitem">
    <MenuTitle title="Unix & Linux Tutorial" url="https://www.youtube.com/playlist?list=PLLOxZwkBK52DRvS1wKjAHvbOwLmLDl1Io"/>
    <MenuTitle title="Linux Documentation" url="https://phoenixnap.com/kb/linux-commands"/>
    <MenuTitle title="Flavours Of Linux" url="https://www.scaler.com/topics/linux-flavors/"/>
    <MenuTitle title="Real World Applications Of Linux" url="https://linuxways.net/best-of-linux/12-real-world-practical-applications-of-linux/"/>
    </div>
  )
}

export default UnixAndLinux