import { useSearch } from "../state";
import { definitionType } from "../state/types";

type DataType = string | definitionType;

type PropType = {
  heading: string;
  data: DataType[];
};

export default function List({ heading, data }: PropType) {
  const { handleSearch } = useSearch();
  const filterData = data.filter((_: DataType, i: number) => i < 10);

  return (
    <div className={"list " + heading}>
      <h3>{heading}</h3>

      <ul>
        {filterData.map((value: DataType, i: number) => {
          if (typeof value === "string")
            return (
              <li key={"-" + i}>
                <button onClick={() => handleSearch(value)}>{value}</button>
              </li>
            );

          const { definition, example } = value;

          return (
            <li key={"-" + i}>
              <p className="definition">{definition}</p>

              {example && <q className="example">"{example}"</q>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
