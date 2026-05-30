import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { useState } from "react";
const getChildern = (data, parentId) => {
  return data.filter((d) => d.parent == parentId);
};
const List = ({ data, id, item }) => {
  const [show, setShow] = useState(false);
  const children = getChildern(data, item.id);
  return (
    <div className="children">
      <div
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        {children.length != 0 && (show ? <FaAngleDown /> : <FaAngleRight />)}
        {item.name}
      </div>
      {show &&
        children.map((c) => {
          return (
            <div className="children">
              <List data={data} id={c.id} item={c} />
            </div>
          );
        })}
    </div>
  );
};
export { getChildern, List };
