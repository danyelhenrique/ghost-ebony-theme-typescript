interface IGetAll {
  identify: string | Element | null;
  identifyClassToSearch?: string;
  callbackfn: (
    value: Element,
    key: number,
    parent: NodeListOf<Element>
  ) => void;
}
const Pagination = () => {
  const containerIdentify = "[data-pagination-type]";

  const fetchPage = async (dataLink: string) => {
    const response = await fetch(dataLink);
    const data = await response.text();
    return data;
  };

  const getAll = (data: IGetAll) => {
    const { identify, callbackfn, identifyClassToSearch = "" } = data;

    if (typeof identify === "string") {
      document.querySelectorAll(identify).forEach(callbackfn);
    } else if (identify) {
      identify.querySelectorAll(identifyClassToSearch).forEach(callbackfn);
    }
  };

  const handleClick = async (element: Element) => {
    const paginationLink = getAll({
      callbackfn: () => {},
      identify: element,
      identifyClassToSearch: "[data-link]",
    });

    const paginationType = element.getAttribute("data-pagination-type");

    if (paginationType === "fetch") {
      fetchPage("");
    }
  };
  const events = () => {
    getAll({
      callbackfn: handleClick,
      identify: containerIdentify,
    });
  };
};

export default Pagination;
