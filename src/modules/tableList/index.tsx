import TableLayout from "./tableLayout";

const TableList: React.FC = () => {
  return (
    <div>
      <div className="bg-white p-[1.5%] rounded-xl shadow-md mb-[1.5vw]">
        <div className="text-[1.5vw] text-primary-600 mb-[2vw]">
          Simple Table
        </div>
        <TableLayout />
      </div>
      <div className="p-[1.5%]">
        <div className="text-[1.7vw] mb-[0.5vw]">Table on Plain Background</div>
        <div className="text-[1vw] text-primary-300 mb-[2.25vw]">Here Is A Subtitle For This Table</div>
        <div>
          <TableLayout />
        </div>
      </div>
    </div>
  );
};

export default TableList;
