export const FilteredTypesBar = ({
  TypesData,
  selectedType,
  onClick,
}: {
  TypesData: Array<Type>;
  selectedType: string;
  onClick: (id: string) => void;
}) => (
  <div className="flex rounded-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] my-4">
    {TypesData.map((type: any, index: number) => {
      return (
        <button
          key={index}
          type="button"
          className={`${
            type.value === selectedType ? "text-red-600" : "text-slate-400"
          } p-4 font-semibold`}
          onClick={() => onClick(type.value)}
        >
          {type.name}
        </button>
      );
    })}
  </div>
);

interface Type {
  name: string;
  value: string;
  color: string;
  dbValue: string;
}
