import * as dayjs from 'dayjs';
import 'dayjs/locale/fr';
dayjs.locale('fr');

export const isValidDayJsDate = (date) => {
    return dayjs(date).isValid()
}

export const toDayJsDate = (date) => {
    if (date && isValidDayJsDate(date)) {
        return dayjs(date)
    }
    return undefined
}

export const toDayJsDateOnFormat = (date, format = `DD/MM/YYYY à HH:MM`) => {
    const dayJsDate = toDayJsDate(date)
    if (!dayJsDate) {
        return undefined
    }
    return dayJsDate.format(format)
}
