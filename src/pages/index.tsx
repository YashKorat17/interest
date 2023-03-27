import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { IconChevronRight } from '@tabler/icons-react'


export default function Home() {
  return (
    <>
      <Head>
        <title>Invoicer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='padding_container'>
          <nav className={styles.nav}>
            <div>All Services For Invoice <span className={styles.badge}>Invoice</span></div>
            <div>
            </div>
          </nav>
          <div className={styles.hero_container}>
            <div className={styles.hero}>
              <div className={styles.hero_text}>
                <div className={styles.titlespan}>
                  <h1 className={styles.title}>Simplify Your Invoicing with AmsTechs</h1>
                </div>
                <p style={{fontSize:14,fontWeight:400,letterSpacing:0.8,wordSpacing:1}}>Say goodbye to the hassle of manual invoicing and payment tracking. [Your Company Name] offers a seamless and automated solution that saves you time and ensures accuracy. Fill out the form below to learn more and start streamlining your invoicing process today.</p>
                <br/>
                <div className={styles.hero_button}>
                </div>

              </div>
          <div className={styles.hero_form}>
<form className={styles.form}> 
<h1>User Survey Form</h1><br/>
  <div className={styles.form_group}>
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" placeholder="Enter your name" />
  </div>
  <div className={styles.form_group}>
    <label htmlFor="email">Email</label>
    <input type="email" name="email" id="email" placeholder="Enter your email" />
  </div>
  <div className={styles.form_group}>
    <label htmlFor="phone">Phone</label>
    <input type="tel" name="phone" id="phone" placeholder="Enter your phone" />
  </div>
  <div className={styles.form_group}>
    <label htmlFor="message">Message</label>
    <textarea name="message" id="message" placeholder="Enter your message" />
  </div>
  <div className={styles.form_group}>
    <button className={styles.button_dark}>Submit</button>
  </div>

</form>
          </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
