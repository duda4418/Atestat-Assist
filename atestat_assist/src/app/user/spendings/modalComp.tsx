import Image from "next/image";
import Sidebar from "../SideBar";
import { Button } from "@/components/ui/button";
import { Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, } from "@/components/ui/select";

export default function ModalComp({editIndex, setEditIndex, newSpending, setNewSpending, tableData, setTableData, handleCloseModal} :any) {

    const handleSubmit = () => {
        if (newSpending.detail && newSpending.date && newSpending.importance && newSpending.money) {
          let updatedTableData = [...tableData];
          
          if (editIndex !== null) {
            updatedTableData[editIndex] = newSpending;
          } else {
            updatedTableData.push(newSpending);
          }
    
          setTableData(updatedTableData);
          setNewSpending({ detail: '', date: '', importance:'', money: '' });
          handleCloseModal();
        } else {
          alert('Please fill in all fields.');
        }
      };
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewSpending((prev:any) => ({
          ...prev,
          [name]: value,
        }));
      };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-center text-xl mb-4">{editIndex !== null ? 'Edit Person' : 'Add New Person'}</h2>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Detail</label>
              <input
                type="text"
                name="detail"
                value={newSpending.detail}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Importance</label>
              <input
                type="text"
                name="importance"
                value={newSpending.importance}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Date</label>
              <input
                type="text"
                name="date"
                value={newSpending.date}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Money</label>
              <input
                type="text"
                name="money"
                value={newSpending.money}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex justify-between">
              <Button onClick={handleCloseModal} className="bg-gray-500 text-white">Cancel</Button>
              <Button onClick={handleSubmit} className="bg-blue-500 text-white">{editIndex !== null ? 'Update' : 'Add'}</Button>
            </div>
          </div>
        </div>
  );
}


