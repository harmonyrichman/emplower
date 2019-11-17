'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'Cody',
      lastName: 'Pugster',
      email: 'cody@email.com',
      date: 'November 15, 2019',
      company: 'Rite Aid',
      position: 'Sales Manager',
      residency: 'New York',
      jobDuties:
        'I have had previous managerial experience at my last job at Burger King. I enjoy working with others and believe I can bring the right temperment to the job.',
      related:
        'My charge was nonviolent offense which shows that I am capable of handling the position.',
      timeElapsed:
        'The offense happened 4 years ago, so there has been a lot of time that has passed since then and I have made better decisions.',
      ageAtCommit:
        "I was seventeen at the time, and have learned so much since then. After getting convicted I realized I didn't want my life moving down the same path and I needed to make a change.",
      serious:
        "I was charged with a nonviolent misdeamor. I didn't have train fare going home one day, so I made the poor decision to jump the turnstile. While it was a poor choice, I do not believe that it affects my work ethic or my ability to be successful.",
      rehab:
        "Since the offense, I re-enrolled in a GED program and have since obtained my GED and my associate's degree. I hope to also receive my certification in security.",
      safetyIssue:
        'I strongly believe that I will not be a threat to anyone in the company or to any of Rite Aids customers. I made a poor choice when I was young but I want to keep moving forward as the person I know I am.',
      password: '123'
    }),
    User.create({
      firstName: 'Murphy',
      lastName: 'Meowman',
      email: 'murphy@email.com',
      date: 'November 15, 2019',
      company: 'Chipotle',
      position: 'Cashier',
      residency: 'New York',
      jobDuties:
        'I have had previous managerial experience at my last job at Burger King. I enjoy working with others and believe I can bring the right temperment to the job.',
      timeElapsed:
        'The offense happened 4 years ago, so there has been a lot of time that has passed since then and I have made better decisions.',
      ageAtCommit:
        "I was seventeen at the time, and have learned so much since then. After getting convicted I realized I didn't want my life moving down the same path and I needed to make a change.",
      // serious:
      //   "I was charged with a nonviolent misdeamor. I didn't have train fare going home one day, so I made the poor decision to jump the turnstile. While it was a poor choice, I do not believe that it affects my work ethic or my ability to be successful.",
      rehab:
        "Since the offense, I re-enrolled in a GED program and have since obtained my GED and my associate's degree. I hope to also receive my certification in security.",
      safetyIssue:
        'I strongly believe that I will not be a threat to anyone in the company or to any of Rite Aids customers. I made a poor choice when I was young but I want to keep moving forward as the person I know I am.',
      password: '123'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
