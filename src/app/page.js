import Image from 'next/image'
import logos from '../../data'
import styles from './page.module.css'
import { DarkButton } from '../../components/button-dark'
import { Bar } from '../../components/bar'
import { Card } from '../../components/cards'
import { ToDoCard } from '../../components/toDoCard'

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

      <br></br>

      <div className={styles.sectionThree}>
        <div className={styles.mainContentTwo}>
          <div className={styles.titleSection}>
            <spam >— For Projects</spam>
            <h2>Vision is the <spam className={styles.emphasis}>answer</spam></h2>
            <p>You have an idea, IncuPie has a plan. We offer everything you need to go from an early-stage idea to a successful exchange listing.</p>
          </div>

          <br></br>

          <div className={styles.cardsWrapper}>
            <ToDoCard p="Decentralized investments" spam="we'll distribute your tokens among our huge and active community"></ToDoCard>
            <ToDoCard p="Access to professional investors" spam="we'll put you in touch with funds and business angels ready to invest larger sums"></ToDoCard>
            <ToDoCard p="Exchange relations" spam="get better terms when listing your token"></ToDoCard>
            <ToDoCard p="Staking" spam="allow users to stake your tokens on DeFiPie and earn rewards"></ToDoCard>
            <ToDoCard p="Product-market fit analysis"></ToDoCard>
            <ToDoCard p="Detailed tokenomics"></ToDoCard>
            <ToDoCard p="Smart contract audit"></ToDoCard>
            <ToDoCard p="Community-building and social media marketing"></ToDoCard>
            <ToDoCard p="White Paper, blog, and media content from the best authors"></ToDoCard>
          </div>

          <div className={styles.sectionThreeButtons}>
            <DarkButton></DarkButton>
            <DarkButton></DarkButton>
          </div>

        </div>
      </div>

      <br></br>

      <div className={styles.sectionFour}>
        <div className={styles.mainContentThree}>
          <div className={styles.titleSection}>
            <spam >— For Investors</spam>
            <h2>Access <spam className={styles.emphasis}> high-potential</spam> DeFi startups before everyone else </h2>
          </div>

          <br></br>

          <div className={styles.cardsWrapper}>
            <ToDoCard p="Low entry prices on DeFi tokens"></ToDoCard>
            <ToDoCard p="Fully decentralized "></ToDoCard>
            <ToDoCard p="Only vetted projects that passed our due diligence"></ToDoCard>
            <ToDoCard p="New projects every month"></ToDoCard>
            <ToDoCard p="High chance of success thanks to our incubation program"></ToDoCard>
            <ToDoCard p="Yield farming rewards in PIE" spam="(up to 100% a year)"></ToDoCard>
          </div>

            <DarkButton></DarkButton>

        </div>
      </div>

    </main>
  )
}
