import IndexEN from "../Components/EN/0 - Index/Index";
import IndexJP from "../Components/JP/0 - Index/Index";

export const getIndexPage = (locale, lightTheme) => {
  let page;
  switch (locale) {
    case 'en':
      page = <IndexEN light={lightTheme}/>;
      break;
    case 'jp':
      page = <IndexJP light={lightTheme}/>;
      break;
    default:
      page = <IndexEN light={lightTheme}/>;
      break;
  }
  return page;
}