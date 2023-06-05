import dayjs from 'dayjs'
import 'dayjs/locale/ja' // import locale

dayjs.locale('ja')  // use Japanese locale globally

export default (({ app }, inject) => {
  inject('dayjs', string =>  dayjs(string));
});
