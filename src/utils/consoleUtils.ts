import {DateTime} from "ts-luxon"

enum Colors {
    // noinspection JSUnusedGlobalSymbols
    Reset = "\x1b[0m",
    Bright = "\x1b[1m",
    Dim = "\x1b[2m",
    Underscore = "\x1b[4m",
    Blink = "\x1b[5m",
    Reverse = "\x1b[7m",
    Hidden = "\x1b[8m",
    FgBlack = "\x1b[30m",
    FgRed = "\x1b[31m",
    FgGreen = "\x1b[32m",
    FgYellow = "\x1b[33m",
    FgBlue = "\x1b[34m",
    FgMagenta = "\x1b[35m",
    FgCyan = "\x1b[36m",
    FgWhite = "\x1b[37m",
    FgGray = "\x1b[90m",
    BgBlack = "\x1b[40m",
    BgRed = "\x1b[41m",
    BgGreen = "\x1b[42m",
    BgYellow = "\x1b[43m",
    BgBlue = "\x1b[44m",
    BgMagenta = "\x1b[45m",
    BgCyan = "\x1b[46m",
    BgWhite = "\x1b[47m",
    BgGray = "\x1b[100m",
}

type LogOptions = {
    isError?: boolean
}

const log = (message: string, options?: LogOptions) => {
    const formattedDate = DateTime.now().toFormat("dd MMMM yyyy HH:mm:ss")

    if (options && options.isError) {
        console.log(`${Colors.FgRed}${Colors.Dim}⚠️ ${formattedDate}${Colors.Reset} — There was an error`)
        console.error(message)
        return
    }

    console.log(`${Colors.Dim}🚀 ${formattedDate}${Colors.Reset} — ${message}`)
}

const error = (message: string) => log(message, {isError: true})

export const consoleUtils = {
    Colors,
    log,
    error
}
