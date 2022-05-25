import React from 'react'
import { T } from "@tolgee/react";
import { useRouter } from 'next/router';

const Welcome = () => {
  const router = useRouter();
  const setLanguage = (lang) => {
    router.replace(router.pathname, undefined, { locale: lang });
  };
  return (
    <>
      <select
        onChange={(e) => setLanguage(e.target.value)}
        value={router.locale}
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>
      <T keyName="title"><h1>Hello</h1></T>
    </>
  )
}

export default Welcome