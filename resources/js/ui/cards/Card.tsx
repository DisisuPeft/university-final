export function Card({
    title,
  }: {
    title: string;
  }) {
  
    return (
      <div className="rounded-xl bg-sky-500 shadow-sm">
        <div className="">
          {/* {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null} */}
          <h3 className="p-2 text-lg font-medium">{title}</h3>
        </div>
      </div>
    );
}