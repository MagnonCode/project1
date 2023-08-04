import React, { useState } from 'react'
import styles from '@/styles/Contact.module.css'
import { useRouter } from 'next/router'

const Contact = () => {
  const router = useRouter()
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    description:''
  })

  const handleSumbit = async (e)=>{
    e.preventDefault()
    setTimeout(()=>alert('Thank you for contacting us'),1000)
    let response = await fetch('/api/postcontact',{
      method:'POST',
      body:JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    let data = await response.json()
    if(data){
      router.push('/')
    }
  }

  const handleChangeForm = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  return (
    <div >
      <form onSubmit={handleSumbit} className={styles.wrapper}>
      <h1>Contact Us</h1>
        <input className={styles.input} type="text" name="name" onChange={handleChangeForm} value={formData.name} placeholder="Enter your name" required/>
        <input className={styles.input} type="email" name="email" onChange={handleChangeForm} value={formData.email} placeholder="Enter your email" required/>
        <input className={styles.input} type="number" name="phone" onChange={handleChangeForm} value={formData.phone} placeholder="Enter your phone number" required/>
        <textarea className={styles.input} type="text-area" name="description" onChange={handleChangeForm} value={formData.description} placeholder="Enter your query" required/>
        <input  type="submit" className={styles.submit}/>
      </form>
    </div>
  )
}

export default Contact