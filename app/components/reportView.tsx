'use client'

import { useEffect } from "react";


export const ReportView: React.FC = ()=>{

  const slug='this is a slug'

  useEffect(()=>{
    fetch('/api/incr', {
      method: "POST", 
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({slug})
    });
  }, [])

  return null;
}