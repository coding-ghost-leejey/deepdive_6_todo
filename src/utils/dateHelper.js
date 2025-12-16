import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
dayjs.extend(relativeTime);
dayjs.locale("ko");

function formatTodoDate() {
  return dayjs().format("MM.DD.YYYY / hh:mm a");
}

export default formatTodoDate;
