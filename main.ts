import * as dotEnv from 'dotenv'
import logUpdate from 'log-update'

dotEnv.config()

const main = async () => {
    console.log(`Public key:${process.env.PUBLIC}, Private key: ${process.env.PRIVATE}`)

    let seconds = 0

    setInterval(() => {
        seconds += 1
        logUpdate(`
            Seconds:\t${seconds}`.replace(/^ +| +$/gm, '')
        )

    }, 1000)
}

main()
