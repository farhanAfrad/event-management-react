import dayjs from "dayjs";
export const getCalender = (
    month = dayjs().month(),
    year = dayjs().year()
) => {
    const firstDateOfMonth = dayjs().year(year).month(month).startOf('month');
    const lastDateOfMonth = dayjs().year(year).month(month).endOf('month');
    const arrayOfDate = [];

    // prefix
    for (let i = firstDateOfMonth.day(); i > 0; i--) {
        arrayOfDate.push({
            date: firstDateOfMonth.subtract(i, 'day'),
            currentMonth: false,
            today: firstDateOfMonth.date(i).toDate().toDateString() === dayjs().toDate().toDateString()
        })
    }

    // current date
    for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
        arrayOfDate.push({
            date: firstDateOfMonth.date(i),
            currentMonth: true,
            today: firstDateOfMonth.date(i).toDate().toDateString() === dayjs().toDate().toDateString()
        })
    }
    // create suffix
    const remaining = 42 - arrayOfDate.length;
    for (let i = lastDateOfMonth.date() + 1; i <= lastDateOfMonth.date() + remaining; i++) {

        arrayOfDate.push({
            date: firstDateOfMonth.date(i),
            currentMonth: false,
            today: firstDateOfMonth.date(i).toDate().toDateString() === dayjs().toDate().toDateString()
        });
    }
    
    return arrayOfDate;

}