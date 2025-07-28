const CategoryTableSkeleton = () => {
  const skeletonRows = Array(5).fill(0);

  return (
    <table className="w-full table-auto border-collapse ">
      <thead>
        <tr className="text-left bg-gray-100 animate-pulse ">
          <th className="p-5">
            <div className="h-4 w-32 bg-gray-300 rounded-2xl dark:bg-gray-300" />
          </th>
          <th className="p-5">
            <div className="h-4 w-32 bg-gray-300 rounded-2xl dark:bg-gray-300" />
          </th>
          <th className="p-5">
            <div className="h-4 w-64 bg-gray-300 rounded-2xl dark:bg-gray-300" />
          </th>
          <th className="p-5">
            <div className="h-4 w-16 bg-gray-300 rounded-2xl dark:bg-gray-300" />
          </th>
        </tr>
      </thead>
      <tbody>
        {skeletonRows.map((_, index) => (
          <tr
            key={index}
            className="animate-pulse border-b dark:border-gray-200"
          >
            <td className="p-5">
              <div className="h-4 w-32 bg-gray-300 rounded-2xl dark:bg-gray-200" />
            </td>
            <td className="p-5">
              <div className="h-4 w-32 bg-gray-300 rounded-2xl dark:bg-gray-200" />
            </td>
            <td className="p-5">
              <div className="h-4 w-64 bg-gray-300 rounded-2xl dark:bg-gray-200" />
            </td>
            <td className="p-5">
              <div className="h-4 w-16 bg-gray-300 rounded-2xl dark:bg-gray-200" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoryTableSkeleton;
