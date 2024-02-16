import React from 'react'

function Map() {
  return (
    <div className='full-screen-map'>
      <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1Ypgk8DYBHrNg3YuBt__MZdLwzLRI2XI&ehbc=2E312F&noprof=1" width="100%" 
      height="90%"
      style={{ border: 0 }}
      allowFullScreen
      ></iframe>
      
      <style jsx>{`
        .full-screen-map {
          position: fixed;
          top: ;
          left: 0;
          width: 100%;
          height: 90%;
          margin: 0;
          padding: 0;
          overflow: hidden;
          z-index: 0;
        }
      `}</style>
    </div>
  )
}

export default Map