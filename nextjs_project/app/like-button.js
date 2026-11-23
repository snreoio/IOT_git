// ===== 14. Next.js 2 : like-button.js (app 폴더에 생성) =====
// 'use client' 디렉티브를 추가하면, 이 파일에 있는 모든 컴포넌트는 클라이언트 컴포넌트가 됨
'use client';

import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return <button onClick={handleClick}>Like ({likes})</button>;
}
