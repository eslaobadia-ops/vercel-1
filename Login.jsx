import React, { useState } from 'react'
import client, { setAuth } from '../api'
export default function Login(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [msg,setMsg]=useState('')
  async function submit(e){ e.preventDefault(); try{ const res = await client.post('/api/login',{email,password}); if(res.data.token){ setAuth(res.data.token); localStorage.setItem('jc_token', res.data.token); localStorage.setItem('jc_user', JSON.stringify(res.data.user)); window.location.href='/dashboard' } else setMsg(JSON.stringify(res.data)) } catch(err){ setMsg(err.response?.data?.message||err.message) } }
  return (<div className="card"><h3>Login</h3><form onSubmit={submit}><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" required/><br/><input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" required/><br/><button type="submit">Login</button></form><div className="small">{msg}</div></div>)
}
