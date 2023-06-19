import Image from 'next/image'
import logos from '../../data'
import styles from './page.module.css'
import { DarkButton } from '../../components/button-dark'
import { Bar } from '../../components/bar'
import { Card } from '../../components/cards'

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.center}>
          <img src='Logo.svg' className={styles.logoStyle}></img>
          <div className={styles.navButtons}>
            <div className={styles.links}>
              <a className={styles.click} href='_blank'>For Projects</a>
              <a className={styles.click} href='_blank'>For Investors</a>
            </div>
            <div>
              <DarkButton></DarkButton>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.sectionOne}>
        <div className={styles.mainContent}>
          <h1 className={styles.title}>Vision Capital</h1>
          <p className={styles.pTitle}>The right way to fund and incubate your DeFi startup</p>
          <div className={styles.buttonsTitle}>
            <DarkButton></DarkButton>
            <DarkButton></DarkButton>
          </div>
        </div>
      </div>

      <br></br>

      <Bar logos={logos}></Bar>

      <br></br>

      <div className={styles.sectionTwo}>
        <h2>Traditional Fundraising
          <spam className={styles.emphasis}> Doesn't Work </spam>
          in DeFi</h2>
        <Card></Card>
      </div>

    </main>
  )
}
