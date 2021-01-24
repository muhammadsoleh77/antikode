import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Home() {

  const [dataDay, setDataDay] = useState([])
  const [dataName, setDataName] = useState([])

  useEffect(() => {
    let tanggal = new Date()
    let bulan = tanggal.getMonth()
    let tahun = tanggal.getFullYear()
    let daysInMonth = new Date(tahun, bulan, 0).getDate()

    let listDay = []

    for (var a = 1; a <= daysInMonth; a++) {

      const date = new Date(tahun, bulan, a)
      const options = { weekday: "long" }
      const dayName = new Intl.DateTimeFormat("en-US", options).format(date)

      if (a <= 7) {
        listDay.push({
          numDay: a,
          nameDay: dayName
        })
      } else {
        listDay.push({
          numDay: a
        })
      }

    }
    setDataDay(listDay)
  }, [])

  // START CLICK DATE
  const clickDate = (e, index) => {
    var input = ''
    var namanya = ''
    dataDay.map((doc, idx) => {
      if (index === idx) {
        input = prompt('Input Name')
        namanya = input
      }
    })

    var d = new Date()
    var time = (d.getHours() + ' : ' + d.getMinutes())

    let sss = [...dataDay]
    sss[index].namas = namanya
    sss[index].times = time
    setDataName(sss)
  }
  // END CLICK DATE

  return (
    <div className={styles.container}>
      <Head>
        <title>AntiKode Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Calendar Schedule
        </h1>

        <p className={styles.description}>
          by Muhammad Soleh
        </p>

        <div className={styles.grid}>
          <div className={styles.appCalendar}>
            {
              dataDay.map((el, index) => {
                return (
                  <div key={index} className={styles.tanggal} onClick={(e) => clickDate(e, index)}>
                    <div className={styles.word}>{el.nameDay}</div>
                    <div>{el.numDay}</div>

                    {
                      el.namas && dataName.map((el, index2) => {
                        if (index === index2) {
                          return (
                            <>
                              <p>Name: {el.namas} </p>
                              <p>Time: {el.times}</p>
                            </>
                          )
                        }
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        AntiKode Test
      </footer>
    </div>
  )
}

export default Home
