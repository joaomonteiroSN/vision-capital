import Image from 'next/image'
import logos from '../../data'
import { logosTwo } from '../../data'
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

        <div className={styles.sectionFive}>
          <img className={styles.imgSectionFive} src='guy.svg'></img>

          <br></br>

          <div className={styles.mainContentFour}>
            <img src='logo-full.svg'></img>
            <h2>Brought to you by DeFiPie</h2>
            <p>DeFiPie is the first DeFi app to bring together crypto lending, staking, P2P loans, liquidity mining, and trading. We have a strong development and marketing team and an active, constantly growing community.</p>
            <p>Project incubation is a natural next step: now that we've done it ourselves, we want to help other quality projects to achieve success. </p>
          </div>


        </div>

        <br></br>

        <Bar logos={logosTwo}></Bar>

        <br></br>

        <div className={styles.sectionSix}>
          {/* <img src="bg-two.svg" className={styles.imgSectionSix}></img> */}

          <div className={styles.mainSectionSix}>
            <div className={styles.leftSide}>
              <div className={styles.titleMainSix}>
                <spam>Join</spam>
                <h2>Vision Capital and get funded</h2>
                <p>We'll get back to you within 24 hours</p>
              </div>
              <form className={styles.formMain}>
                <div className={styles.field}>
                  <label for="pName">How is your project called?</label>
                  <input type='text' id='pName' name='pName'></input>
                  <label for="about">Please tell us a few words about the project</label>
                  <input type='text' id='about' name='about'></input>
                </div>
                <div className={styles.field}>
                  <label for="email">Your Email</label>
                  <input type='email' id='email' name='email'></input>
                  <label for="teleName">Telegram name</label>
                  <input type='text' id='teleName' name='teleName'></input>
                </div>
              </form>
              <DarkButton></DarkButton>
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
