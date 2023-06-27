import Image from 'next/image'
import logos from '../../data'
import { logosTwo } from '../../data'
import styles from './page.module.css'
import { DarkButton } from '../../components/button-dark'
import { LightButton } from '../../components/button-light'
import { Bar } from '../../components/bar'
import { Card } from '../../components/cards'
import { ToDoCard } from '../../components/toDoCard'

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <img src='logo.svg'></img>
        <div className={styles.nav}>
          <nav className={styles.aNav}>
            <a className={styles.click} href='_blank'>For Projects</a>
            <a className={styles.click} href='_blank'>For Investors</a>
          </nav>
          <DarkButton s="Join Now"></DarkButton>
        </div>
      </header>

      <br></br>

      <div className={styles.sectionOne}>
        <div className={styles.mainContent}>
          <h1 className={styles.title}>Vision Capital</h1>
          <p className={styles.pTitle}>The right way to fund and incubate your DeFi startup</p>
          <div className={styles.buttonsTitle}>
            <DarkButton s="I Need Funding"></DarkButton>
            <LightButton s="Become an Investor" ></LightButton>
          </div>
        </div>
      </div>

      <br></br>

      <Bar logos={logos}></Bar>

      <br></br>

      <div className={styles.sectionTwo}>
        <h2>Traditional Fundraising
          <span className={styles.emphasis}> Doesn't Work </span>
          in DeFi
        </h2>
        <div className={styles.cardsDiv}>
          <Card s="01" p="Without a big budget, it's hard to approach venture investors"></Card>
          <Card s="02" p="VCs don't care about your DeFi idea – only their gains"></Card>
          <Card s="03" p="They force you into selling your tokens at a huge discount…"></Card>
          <Card s="04" p="...Then dump them at the first opportunity"></Card>
          <Card s="05" p="Result: your token collapses. Everyone goes home."></Card>
        </div>
      </div>

      <br></br>

      <div className={styles.background}>
        <div className={styles.sectionThree}>
          <div className={styles.mainContentThree}>
            <div className={styles.titleSection}>
              <span >— For Projects</span>
              <h2>Vision is the <span className={styles.emphasis}>answer</span></h2>
              <p>You have an idea, IncuPie has a plan. We offer everything you need to go from an early-stage idea to a successful exchange listing.</p>
            </div>

            <br></br>

            <div className={styles.cardsWrapper}>
              <ToDoCard p="Decentralized investments" span="we'll distribute your tokens among our huge and active community"></ToDoCard>
              <ToDoCard p="Access to professional investors" span="we'll put you in touch with funds and business angels ready to invest larger sums"></ToDoCard>
              <ToDoCard p="Exchange relations" span="get better terms when listing your token"></ToDoCard>
              <ToDoCard p="Staking" span="allow users to stake your tokens on DeFiPie and earn rewards"></ToDoCard>
              <ToDoCard p="Product-market fit analysis"></ToDoCard>
              <ToDoCard p="Detailed tokenomics"></ToDoCard>
              <ToDoCard p="Smart contract audit"></ToDoCard>
              <ToDoCard p="Community-building and social media marketing"></ToDoCard>
              <ToDoCard p="White Paper, blog, and media content from the best authors"></ToDoCard>
            </div>

            <div className={styles.sectionThreeButtons}>
              <DarkButton s="I Need Funding"></DarkButton>
              <LightButton s="Learn More" ></LightButton>
            </div>
          </div>
        </div>
      </div>

      <br></br>

      <div className={styles.backgroundSectionFour}>
        <div className={styles.sectionFour}>
          <div className={styles.mainContentThree}>
            <div className={styles.titleSection}>
              <span >— For Investors</span>
              <h2>Access <span className={styles.emphasis}> high-potential</span> DeFi startups before everyone else </h2>
            </div>

            <br></br>

            <div className={styles.cardsWrapper}>
              <ToDoCard p="Low entry prices on DeFi tokens"></ToDoCard>
              <ToDoCard p="Fully decentralized "></ToDoCard>
              <ToDoCard p="Only vetted projects that passed our due diligence"></ToDoCard>
              <ToDoCard p="New projects every month"></ToDoCard>
              <ToDoCard p="High chance of success thanks to our incubation program"></ToDoCard>
              <ToDoCard p="Yield farming rewards in PIE" span="(up to 100% a year)"></ToDoCard>
            </div>

            <DarkButton s="Become an Investor"></DarkButton>

          </div>
        </div>
      </div>

      <br></br>

        <div className={styles.backgroundSectionFive}>
        </div>
      <div className={styles.sectionFive}>
        <br></br>
          <div className={styles.mainContentFive}>
            <img src='logo-full.svg'></img>
            <h2>Brought to you by DeFiPie</h2>
            <p>DeFiPie is the first DeFi app to bring together crypto lending, staking, P2P loans, liquidity mining, and trading. We have a strong development and marketing team and an active, constantly growing community.</p>
            <p>Project incubation is a natural next step: now that we've done it ourselves, we want to help other quality projects to achieve success. </p>
          </div>
      </div>

      <br></br>

      <Bar logos={logosTwo}></Bar>

      <br></br>

      <div className={styles.backgroundSectionSix}>
        <div className={styles.sectionSix}>
          <div className={styles.mainSectionSix}>
            <div className={styles.leftSide}>
              <div className={styles.titleMainSix}>
                <span>Join</span>
                <h2>Vision Capital and get funded</h2>
                <p>We'll get back to you within 24 hours</p>
              </div>
              <form className={styles.formMain}>
                <div className={styles.inputWrapper}>
                  <label htmlFor="pName">How is your project called?</label>
                  <input type='text' id='pName' name='pName'></input>
                </div>

                <div className={styles.inputWrapper}>
                  <label htmlFor="email">Your Email</label>
                  <input type='email' id='email' name='email'></input>
                </div>

                <div className={styles.inputWrapper}>
                  <label htmlFor="about">Please tell us a few words about the project</label>
                  <input type='text' id='about' name='about'></input>
                </div>

                <div className={styles.inputWrapper}>
                  <label htmlFor="teleName">Telegram name</label>
                  <input type='text' id='teleName' name='teleName'></input>
                </div>

              </form>
              <DarkButton s="Send"></DarkButton>
            </div>
            <div className={styles.rightSide}>
              <div className={styles.socialBar}>
                <img src='face-icon.svg'></img>
                <img src='tweet-icon.svg'></img>
                <img src='tele-icon.svg'></img>
                <img src='github-icon.svg'></img>
              </div>
              <div className={styles.contact}>
                <a>hello@visioncapital.com</a>
                <a>Join us on Telegram</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
