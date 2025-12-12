import React, { useEffect, useState } from 'react'
import client, { setAuth } from '../api'
export default function Dashboard(){
  const [profile,setProfile]=useState(null); const [results,setResults]=useState([])
  useEffect(()=>{ const t=localStorage.getItem('jc_token'); if(!t){ window.location.href='/login'; return } setAuth(t); (async ()=>{ try{ const p = await client.get('/api/profile'); setProfile(p.data); const r = await client.get('/api/results'); setResults(r.data.results||[]) }catch(e){ console.error(e) } })() },[])
  return (<div><div className="card"><h3>Welcome {profile?.name}</h3><div className="small">{profile?.email}</div></div><div className="card"><h4>Results</h4>{results.length?results.map(x=>(<div key={x.id}>{x.subject}: {x.score}</div>)):<div className="small">No results</div>}</div></div>)
}
