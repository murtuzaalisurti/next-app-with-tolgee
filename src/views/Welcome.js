import React from 'react'
import { T } from "@tolgee/react";
import { useRouter } from 'next/router';

const Welcome = () => {
  const router = useRouter();
  const setLanguage = (lang) => {
    router.replace(router.pathname, undefined, { locale: lang });
  };
  return (
    <div>
      <select
        onChange={(e) => setLanguage(e.target.value)}
        value={router.locale}
      >
        <option value="en">🇬🇧 English</option>
        <option value="hi">hi Hindi</option>
      </select>
      <T keyName="title">Hello</T>
    </div>
  )
}

export default Welcome