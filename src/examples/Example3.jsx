import { useRef, useEffect } from 'react'
import * as mapvthree from '@baidumap/mapv-three';

// 百度地图的ak从环境变量中读取
mapvthree.BaiduMapConfig.ak = import.meta.env.VITE_BAIDU_MAP_AK || '';

function Example3() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }
    const engine = new mapvthree.Engine(containerRef.current, {
      map: {
          center: [113, 23], // 广州
          range: 200000,
          pitch: 45,
          projection: 'ECEF',
      },
    });
    return () => {
      if (engine) {
          engine.dispose();
      }
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100vh' }}></div>
  )
}

export default Example3
