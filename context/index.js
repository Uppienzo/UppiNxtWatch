import React from 'react'

const Context = React.createContext({
  activeBar: 'None',
  shiftTab: () => {},
  savedVideos: [],
  saveVideo: () => {},
  isDark: false,
  changeTheme: () => {},
})

export default Context
