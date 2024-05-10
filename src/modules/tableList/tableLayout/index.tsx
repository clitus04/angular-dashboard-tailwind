const TableLayout: React.FC = () => {
  return (
    <div className="overflow-x-scroll overflow-y-scroll pb-[2vw]">
      <table className="w-full">
        <thead className="border-t border-b-2">
          <th className="text-left py-[0.75vw] px-[0.75vw] text-theme-blue">
            Name
          </th>
          <th className="text-left py-[0.75vw] px-[0.75vw] text-theme-blue">
            Country
          </th>
          <th className="text-left py-[0.75vw] px-[0.75vw] text-theme-blue">
            City
          </th>
          <th className="text-right py-[0.75vw] px-[0.75vw] text-theme-blue">
            Salary
          </th>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw]"> Dakota Rice </td>
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw]"> Niger </td>
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw]"> Oud-Turnhout </td>
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw] text-right"> $36,738 </td>
          </tr>
          <tr className="border-b">
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw]"> Minerva Hooper </td>
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw]"> Curaçao </td>
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw]"> Sinaai-Waas </td>
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw] text-right"> $23,789 </td>
          </tr>
          <tr className="border-b">
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw]"> Sage Rodriguez </td>
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw]"> Netherlands </td>
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw]"> Baileux </td>
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw] text-right"> $56,142 </td>
          </tr>
          <tr className="border-b">
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw]"> Philip Chaney </td>
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw]"> Korea, South </td>
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw]"> Overland Park </td>
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw] text-right"> $38,735 </td>
          </tr>
          <tr className="border-b">
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw]"> Doris Greene </td>
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw]"> Malawi </td>
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw]">Feldkirchen in Kärnten</td>
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw] text-right"> $63,542 </td>
          </tr>
          <tr className="border-b">
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw]"> Mason Porter </td>
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw]"> Chile </td>
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw]"> Gloucester </td>
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw] text-right"> $78,615 </td>
          </tr>
          <tr>
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw]"> Jon Porter </td>
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw]"> Portugal </td>
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw]"> Gloucester </td>
            <td className="text-primary-600 py-[0.75vw] px-[0.25vw] text-right"> $98,615 </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableLayout;
