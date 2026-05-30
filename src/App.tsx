import "./styles.css";
import { List, getChildern } from "./List";

const list = [
  { id: 1, name: "Parent 1", parent: null },
  { id: 2, name: "Parent 2", parent: null },
  { id: 3, name: "Child 1.1", parent: 1 },
  { id: 4, name: "Child 1.2", parent: 1 },
  { id: 5, name: "Child 2.1", parent: 2 },
  { id: 6, name: "Child 2.2", parent: 2 },
  { id: 7, name: "Child 1.1.1", parent: 3 },
  { id: 8, name: "Child 1.1.2", parent: 3 },
  { id: 9, name: "Child 2.1.1", parent: 5 },
  { id: 10, name: "Child 2.1.2", parent: 5 },
  { id: 11, name: "Parent 3", parent: null },
  { id: 12, name: "Parent 4", parent: null },
];

export default function App() {
  const parents = getChildern(list, null);
  return (
    <div className="App">
      {parents.map((item) => {
        return <List data={list} id={item.id} item={item} />;
      })}
    </div>
  );
}
